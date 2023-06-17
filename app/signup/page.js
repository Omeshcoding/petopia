'use client';
import { useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import logo from '../../public/SVG/logodark.svg';
import { signIn, getProviders } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const page = () => {
  const [providers, setProviders] = useState(null);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const fetchProvider = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    fetchProvider();
  }, []);
  setTimeout(() => {
    if (session?.user) router.push('/');
  }, 1000);

  return (
    <article className="flex h-[100vh] justify-center ">
      <div className="flex flex-col text-left  bg-secondary w-[40%]  pt-20  text-primary">
        <div className="mx-auto mt-20">
          <Logo logo={logo} title="PAWTASTIC" bgColor="primary" />
          <h4 className=" text-2xl font-bold mt-14 mb-3 ml-[-14px]">
            Why our service?
          </h4>
          <ol className="flex-column gap-8 list-disc">
            <li>We're animal lovers backed by</li>
            <li>Powered by tech, so you can</li>
            <li>Update and pics for every</li>
          </ol>
        </div>
      </div>
      <div className="flex flex-col gap-6 bg-primary justify-center items-center w-[60%] capitalize">
        <h2 className="head-text">Sign up to continue</h2>
        {providers &&
          Object.values(providers).map((provider) => (
            <button
              key={provider.name}
              className="btn"
              onClick={() => signIn(provider.id)}
            >
              Sign in with google
            </button>
          ))}
      </div>
    </article>
  );
};

export default page;