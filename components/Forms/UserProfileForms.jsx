import FormInput from '@components/FormInput';

const UserProfileForms = ({
  firstName,
  lastName,
  phone,
  phoneAlt,
  city,
  handleChange,
}) => {
  return (
    <section>
      <h2 className="text-4xl mt-20 mb-10">
        Hello! Please tell us a little bit about yourself
      </h2>
      <div className="text-left">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between w-[100%]  ">
            <div className="flex flex-col mx-auto gap-4">
              <label>First Name </label>
              <input
                type="text"
                className={`border-2 pl-5 border-lightBrown rounded-md py-4 pr-20 `}
                value={firstName}
                onChange={(e) => handleChange({ firstName: e.target.value })}
              />
            </div>
            <div className="flex flex-col mx-auto gap-4">
              <label>Last Name </label>
              <input
                type="text"
                className={`border-2 pl-5 border-lightBrown rounded-md py-4 pr-20 `}
                value={lastName}
                onChange={(e) => handleChange({ lastName: e.target.value })}
              />
            </div>
          </div>
          <div className="flex justify-between w-[100%] ">
            <div className="flex flex-col mx-auto gap-4">
              <label>Phone </label>
              <input
                type="text"
                className={`border-2 pl-5 border-lightBrown rounded-md py-4 pr-20 `}
                value={phone}
                onChange={(e) => handleChange({ phone: e.target.value })}
              />
            </div>
            <div className="flex flex-col mx-auto gap-4">
              <label>Phone Alt </label>
              <input
                type="text"
                className={`border-2 pl-5 border-lightBrown rounded-md py-4 pr-20 `}
                value={phoneAlt}
                onChange={(e) => handleChange({ phoneAlt: e.target.value })}
              />
            </div>
          </div>
          <div className="flex justify-between w-[100%] ml-4 ">
            <div className="flex flex-col mx-auto gap-4">
              <label>City </label>
              <input
                type="text"
                className={`border-2 pl-5 border-lightBrown rounded-md py-4 pr-20 `}
                value={city}
                onChange={(e) => handleChange({ city: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfileForms;
