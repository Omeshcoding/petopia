import logo from '../public/SVG/logo.svg';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src={logo}
        width={50}
        height={40}
        alt="logo"
        className={`bg-white rounded-full p-2`}
      />
      <h2 className="ml-2 w-2 font-semibold">PAWTASTIC</h2>
    </div>
  );
};

export default Logo;
