import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-36  2xl:py-40">
      <header className="flex flex-col items-center gap-8 2xl:mt-10 mb-8">
        <div className="flex items-center relative gap-6">
          <Image
            src="/icons/left-arrow.svg"
            alt="Splenify"
            className=" absolute left-14 top-14"
            width={50}
            height={50}
          />
          <Image
            src="/icons/right-arrow.svg"
            alt="Splenify"
            className=" absolute right-14 top-14"
            width={42}
            height={43}
          />
          <h3 className=" p-2.5 2xl:p-3 px-5 2xl:px-7 border font-semibold  -rotate-12 text-[#7268FA] rounded-2xl border-slate-300 2xl:text-lg">
            App Dev
          </h3>
          <h3 className=" p-2.5 2xl:p-3 px-5 2xl:px-7 border font-semibold  rotate-12 text-[#7268FA] rounded-2xl border-slate-300 2xl:text-lg">
            UI | UX
          </h3>
          <h3 className=" p-2.5 2xl:p-3 px-5 2xl:px-7 border font-semibold  -rotate-12 text-[#7268FA] rounded-2xl border-slate-300 2xl:text-lg">
            Design
          </h3>
          <h3 className=" p-2.5 2xl:p-3 px-5 2xl:px-7 border font-semibold  rotate-12 text-[#7268FA] rounded-2xl border-slate-300 2xl:text-lg">
            Writing
          </h3>
        </div>
        <h2 className=" text-3xl 2xl:text-4xl tracking-wide ">Your Ultimate</h2>
      </header>
      <section className="flex flex-col items-center gap-8">
        <h1 className="text-6xl 2xl:text-7xl">Software Solution Partner</h1>
        <p className="2xl:text-lg tracking-wide text-slate-800">
          Your trusted partners for all things digital. Let’s transform your
          online presence.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <button className=" bg-gradient-to-r  w-48 from-slate-100 to-[#E2E2E2]  text-base 2xl:text-lg text-slate-800 font-semibold rounded-3xl px-5 2xl:px-8 py-3 2xl:py-4 ">
            Contact Us
          </button>
          <button className=" bg-white w-48 text-base 2xl:text-lg text-slate-800 font-semibold rounded-3xl px-5 2xl:px-8 py-3 2xl:py-4 border-2 border-slate-800">
            Book Meeting
          </button>
        </div>
      </section>
    </main>
  );
}
