'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import UserProfileForms from '@components/Forms/UserProfileForms';
import PetBasicsDetails from '@components/Forms/PetBasicDetails';
import { useMultistepForm } from '@hooks/useMultistepForm';

const SignupForm = () => {
  const router = useRouter();
  const { data: session } = useSession();
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
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([
      <UserProfileForms {...data} handleChange={handleChange} />,
      <PetBasicsDetails {...data} handleChange={handleChange} />,
    ]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLastStep) return next();
    try {
      const response = await fetch('/api/petdata', {
        method: 'POST',
        body: JSON.stringify({
          userId: session?.user.id,
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          phoneAlt: data.phoneAlt,
          city: data.city,
          petName: data.petName,
          breed: data.breed,
          birthday: data.birthday,
          gender: data.gender,
          spayed: data.spayed,
          weight: data.weight,
        }),
      });

      if (response.ok) {
        router.push('/signup/signupform');
      }
    } catch (error) {
      console.log(error);
    }
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
