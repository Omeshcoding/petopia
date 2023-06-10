'use client';
import { useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import Link from 'next/link';
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
      console.log(response);
      setProviders(response);
    };
    fetchProvider();
  }, []);
  setTimeout(() => {
    if (session?.user) router.push('/');
  }, 1000);

  return (
    <article className="flex h-[100vh] ">
      <div className="flex flex-col bg-[#2b2d42] w-[40%] py-20 px-10 gap-6 text-white">
        <Logo />
        <h4 className=" text-2xl font-semibold">Why our service?</h4>
        <ol className="flex-column gap-6">
          <li>We're animal lovers backed by</li>
          <li>Poered by tech, so you can</li>
          <li>Update and pics for every</li>
        </ol>
      </div>
      <div className="flex flex-col gap-6 justify-center items-center w-[60%] capitalize">
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
