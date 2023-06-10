import React from 'react';
import Logo from '../components/Logo';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="nav">
      <Logo />
      <div className="nav-items dropdown">
        <a>About Us </a>
        <a>Reviews</a>
        <a>Services</a>
        <Link href="/signup">Sign up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
