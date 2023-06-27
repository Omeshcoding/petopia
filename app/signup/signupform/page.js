'use client';
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
    <article className="bg-lightBrown">
      {currentStepIndex + 1}/ {steps.length}
      {step}
    </article>
  );
};

export default SignupForm;
