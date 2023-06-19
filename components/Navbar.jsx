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
        <a>About Us </a>
        <a>Reviews</a>
        <Link href="/dashboard">Services</Link>
        {session?.user ? (
          <button onClick={signOut}>Sign Out</button>
        ) : (
          <>
            <Link href="/signup">Sign In</Link>
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
