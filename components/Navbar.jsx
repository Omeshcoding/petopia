'use client';

import { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import logo from '../public/SVG/logo.svg';
import Link from 'next/link';
import { useSession, getProviders, signIn, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const fetchProvider = async () => {
      const response = await getProviders();
      console.log(response);
      setProviders(response);
    };
    fetchProvider();
  }, []);
  console.log(providers);
  return (
    <nav className="nav">
      <Logo logo={logo} title="PAWTASTIC" bgColor="white" />
      <div className="nav-items dropdown">
        <Link href="/signup/signupform">Signup</Link>
        <Link
          href="/booking
      "
        >
          Reviews
        </Link>
        <Link href="/dashboard">Dashboard</Link>
        {session?.user ? (
          <button onClick={signOut}>Sign Out</button>
        ) : (
          <>
            <Link href="/booking">Booking</Link>
            {/* {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  className="btn"
                  onClick={() => {
                    return signIn(provider.id);
                    // router.push('/');
                  }}
                >
                  Sign in
                </button>
              ))} */}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
