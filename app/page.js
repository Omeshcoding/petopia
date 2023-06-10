import Navbar from '@/components/Navbar';
import Image from 'next/image';
import hero from '../public/images/justin-veenema-NH1d0xX6Ldk-unsplash.jpg';

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section className="font-bold text-4xl">
        <Image
          src={hero}
          height={300}
          width={1000}
          alt="hero"
          className="absolute top-0 w-full  bg-cover z-[-1]"
        />
      </section>
    </main>
  );
}
