import React from 'react';
import FormInput from '@components/FormInput';

const PetBasicDetails = ({
  petName,
  breed,
  birthday,
  gender,
  spayed,
  weight,
  handleChange,
}) => {
  return (
    <section>
      <h2 className="text-4xl mt-20 mb-10">
        Yay, we love dogs! Give us the basics about your pup.
      </h2>
      <div className="text-left">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between w-[100%]  ">
            <div className="flex flex-col mx-auto gap-4">
              <label>Pet Name </label>
              <input
                type="text"
                className={`border-2 pl-5 border-lightBrown rounded-md py-4 pr-20 `}
                value={petName}
                onChange={(e) => handleChange({ petName: e.target.value })}
              />
            </div>
            <div className="flex flex-col mx-auto gap-4">
              <label>Breed </label>
              <input
                type="text"
                className={`border-2 pl-5 border-lightBrown rounded-md py-4 pr-20 `}
                value={breed}
                onChange={(e) => handleChange({ breed: e.target.value })}
              />
            </div>
          </div>
          <div className="flex justify-between w-[100%] ">
            <div className="flex flex-col mx-auto gap-4">
              <label>Birthday</label>
              <input
                type="text"
                className={`border-2 pl-5 border-lightBrown rounded-md py-4 pr-20 `}
                placeholder="MM/DD/YYYY"
                value={birthday}
                onChange={(e) => handleChange({ birthday: e.target.value })}
              />
            </div>
            <div className="flex flex-col mx-auto gap-4">
              <label>Gender</label>
              <input
                type="text"
                className={`border-2 pl-5 border-lightBrown rounded-md py-4 pr-20 `}
                placeholder="Male/Female"
                value={gender}
                onChange={(e) => handleChange({ gender: e.target.value })}
              />
            </div>
          </div>
          <div className="flex justify-between w-[100%]">
            <div className="flex flex-col mx-auto gap-4">
              <label>Spayed or Neutered</label>
              <input
                type="text"
                className={`border-2 pl-5 border-lightBrown rounded-md py-4 pr-20 `}
                placeholder="Male/Female"
                value={spayed}
                onChange={(e) => handleChange({ spayed: e.target.value })}
              />
            </div>
            <div className="flex flex-col mx-auto gap-4">
              <label>Weight</label>
              <input
                type="text"
                className={`border-2 pl-5 border-lightBrown rounded-md py-4 pr-20 `}
                placeholder="kg"
                value={weight}
                onChange={(e) => handleChange({ weight: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetBasicDetails;
