import React from 'react';
import UserProfileForms from '@components/Forms/UserProfileForms';

const SignupForm = () => {
  return (
    <article>
      <h2 className="text-4xl mt-20 mb-10">
        Hello! Please tell us a little bit about yourself
      </h2>
      <UserProfileForms />
    </article>
  );
};

export default SignupForm;
