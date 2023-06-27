import FormInput from '@components/FormInput';

const UserProfileForms = () => {
  return (
    <section>
      <h2 className="text-4xl mt-20 mb-10">
        Hello! Please tell us a little bit about yourself
      </h2>
      <form className="text-left">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between w-[100%]  ">
            <FormInput
              label="First Name"
              type="text"
              placeholder="Your first name"
              style=" py-4 pr-20 "
            />
            <FormInput
              label="Last Name"
              type="text"
              placeholder="Your last name"
              style=" py-4 pr-20 "
            />
          </div>
          <div className="flex justify-between w-[100%] ">
            <FormInput
              label="Phone"
              type="text"
              placeholder="000-000-0000"
              style=" py-4 pr-20 "
            />
            <FormInput
              label="Phone alt"
              type="text"
              placeholder="000-000-0000"
              style=" py-4 pr-20 "
            />
          </div>
          <div className="flex justify-between w-[100%] ml-4 ">
            <FormInput
              label="City"
              type="text"
              placeholder="City"
              style=" py-4 pr-20 "
            />
            <FormInput
              label="State"
              type="n"
              style="w-14 py-4 pr-20 "
              placeholder="In"
            />
            <FormInput
              label="Zip"
              type="text"
              style="w-10 py-4 pr-20 "
              placeholder="32789"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default UserProfileForms;
