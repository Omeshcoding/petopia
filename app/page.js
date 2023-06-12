import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section className="font-bold  text-white tracking-widest">
        <div className="hero"></div>
        <div className="hero-title ">
          <h1 className="z-30   font-bold text-4xl sm:text-5xl">
            We care for your furry little loved ones while you’re away
          </h1>
          <button className=" mx-auto lg:mr-auto lg:mx-0 bg-white px-6 py-3 rounded-full font-semibold text-[#707070]">
            Schedule a visit
          </button>
        </div>
      </section>
    </main>
  );
}
