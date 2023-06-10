'use client';

import { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Link from 'next/link';
import { useSession, getProviders, signIn, signOut } from 'next-auth/react';

const Navbar = () => {
  // console.log(getProviders);
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
      <Logo />
      <div className="nav-items dropdown">
        <a>About Us </a>
        <a>Reviews</a>
        <a>Services</a>
        {session?.user ? (
          <button onClick={signOut}>Sign Out</button>
        ) : (
          <>
            <Link href="/signin">Sign In</Link>
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
