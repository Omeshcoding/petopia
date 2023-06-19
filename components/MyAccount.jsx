import Link from 'next/link';

const MyAccount = () => {
  return (
    <section className="w-[100%] h-[100vh]  ">
      <div className="mb-14   border-b-2 border-lightGray">
        <h4 className="text-3xl ml-16 text-darkGray py-8">My Account</h4>
      </div>
      <div className="text-primary mt-6 mb-16 ">
        <h5 className="py-3 ml-16 ">PROFILE</h5>
        <div className="flex flex-col ml-16 gap-2">
          <Link href="">Home address</Link>
          <Link href="">Contact info</Link>
        </div>
      </div>
      <div className="h-[40%]  text-primary">
        <h5 className="py-3 ml-16">PAYMENT INFO</h5>
        <div className="flex flex-col ml-16 gap-2">
          <Link href="">Payment methods</Link>
          <Link href="">Receipts</Link>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
