'use client';
import { useState } from 'react';
import UserProfileForms from '@components/Forms/UserProfileForms';
import PetBasicsDetails from '@components/Forms/PetBasicDetails';
import { useMultistepForm } from '@hooks/useMultistepForm';

const SignupForm = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    phoneAlt: '',
    city: '',
    petName: '',
    breed: '',
    birthday: '',
    gender: '',
    spayed: '',
    weight: '',
  });

  const handleChange = (name) => {
    console.log(name);
    setData((prev) => {
      return { ...prev, ...name };
    });
  };
  console.log(data);
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([
      <UserProfileForms {...data} handleChange={handleChange} />,
      <PetBasicsDetails {...data} handleChange={handleChange} />,
    ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    next();
    // conso
  };

  return (
    <form className="bg-lightBrown h-[100%]" onSubmit={handleSubmit}>
      {currentStepIndex + 1}/ {steps.length}
      {step}
      <div className="mt-5  flex gap-2 justify-end items-end mx-10 h-40">
        {!isFirstStep && (
          <button type="button" className="btn bg-white" onClick={back}>
            Back
          </button>
        )}

        <button className="btn bg-white" type="submit">
          {isLastStep ? 'Confirm' : 'Next'}
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
