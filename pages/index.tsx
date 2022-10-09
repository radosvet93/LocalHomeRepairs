import Image from 'next/image';

export default function Home() {
  return (
    <section className="flex flex-rol justify-center items-center h-screen">
      <main className="z-10 opacity-90">
        <h1 className="text-center text-8xl text-white bg-blue-800 p-10 border-slate-400 border-b-8 rounded-t-xl">
          Under Construction
        </h1>
        <p className="text-7xl text-center text-white bg-blue-400 p-10 border-white border-t-8 rounded-b-xl">
          Coming soon!
        </p>
      </main>
      <div className="">
        <Image className="blur-sm brightness-50" src="/img/img.jpg" layout="fill" />
      </div>
    </section>
  );
}
