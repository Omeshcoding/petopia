'use client';
import { useState } from 'react';
import UserProfileForms from '@components/Forms/UserProfileForms';
import PetsBasics from '@components/Forms/PetsBasic';
import { useMultistepForm } from '@hooks/useMultistepForm';

const SignupForm = () => {
  const { steps, currentStepIndex, step } = useMultistepForm([
    <UserProfileForms />,
    <PetsBasics />,
  ]);
  console.log(step);
  return (
    <article>
      <h2 className="text-4xl mt-20 mb-10">
        Hello! Please tell us a little bit about yourself
      </h2>
      {/* {currentStepIndex - 1}/ {steps.length} */}
      {step}
    </article>
  );
};

export default SignupForm;
