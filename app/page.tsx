import Image from "next/image";
import localFont from "next/font/local";
const recoleta = localFont({ src: "./recoleta.ttf" });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-36  2xl:py-40">
      <header className="flex flex-col items-center gap-8 2xl:mt-10 mb-16 md:mb-10">
        <div className="flex items-center relative gap-1 md:gap-6">
          <Image
            src="/icons/left-arrow.svg"
            alt="Splenify"
            className=" absolute left-9 md:left-14 top-10 2xl:top-14"
            width={50}
            height={50}
          />
          <Image
            src="/icons/right-arrow.svg"
            alt="Splenify"
            className=" absolute right-10 md:right-14 top-10 2xl:top-14"
            width={42}
            height={43}
          />
          <h3 className=" text-sm md:text-base p-1 md:p-2.5 2xl:p-3 px-5 2xl:px-7 border font-semibold  -rotate-12 text-[#7268FA] rounded-2xl border-slate-300 2xl:text-lg">
            App Dev
          </h3>
          <h3 className=" text-sm md:text-base p-1 md:p-2.5 2xl:p-3 px-5 2xl:px-7 border font-semibold  rotate-12 text-[#7268FA] rounded-2xl border-slate-300 2xl:text-lg">
            UI | UX
          </h3>
          <h3 className=" text-sm md:text-base p-1 md:p-2.5 2xl:p-3 px-5 2xl:px-7 border font-semibold  -rotate-12 text-[#7268FA] rounded-2xl border-slate-300 2xl:text-lg">
            Design
          </h3>
          <h3 className=" text-sm md:text-base p-1 md:p-2.5 2xl:p-3 px-5 2xl:px-7 border font-semibold  rotate-12 text-[#7268FA] rounded-2xl border-slate-300 2xl:text-lg">
            Writing
          </h3>
        </div>
        <h2 className=" text-2xl  md:text-3xl 2xl:text-4xl tracking-wide ">
          Your Ultimate
        </h2>
      </header>
      <section className="flex flex-col items-center gap-8 ">
        <h1
          className={` text-5xl md:text-6xl 2xl:text-8xl text-center ${recoleta.className}`}
        >
          Software <span className="grad_text ">Solution</span> Partner
        </h1>
        <p className="2xl:text-lg tracking-wide text-center text-slate-800">
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
      <section className="hidden lg:flex gap-10 my-16">
        <div className="flex flex-col gap-3">
          <h3 className=" p-2.5 2xl:p-4 px-5 2xl:px-10 border flex flex-col text-slate-400/80   rotate-12  rounded-3xl border-slate-300 2xl:text-lg ">
            <span className="2xl:text-3xl text-[#7268FA] font-semibold">
              300+
            </span>
            Happy Clients
          </h3>
          <h3 className=" p-2.5 2xl:p-4 px-5 2xl:px-10 border flex flex-col text-slate-400/80   -rotate-12 bg-white  rounded-3xl border-slate-300 2xl:text-lg ">
            <span className="2xl:text-3xl text-[#7268FA]  font-semibold">
              40+
            </span>
            Skillful Talent
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center space-y-8">
          <h2 className="  text-lg 2xl:text-xl">we have worked with</h2>
          <div className="flex items-center gap-8 justify-center flex-wrap max-w-2xl 2xl:max-w-4xl">
            {Array.from({ length: 8 }).map((_, index) => (
              <Image
                key={index}
                src={`/images/c${index + 1}.svg`}
                alt="Clients"
                width={130}
                className={` opacity-40 ${index === 1 && "mt-2"} ${
                  index === 0 && "opacity-30"
                }  ${index === 4 && "opacity-30"} 
                ${index === 3 && "opacity-30"}  `}
                height={130}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className=" p-2.5 2xl:p-4 px-5 2xl:px-10 border flex flex-col text-slate-400/80   -rotate-12  rounded-3xl border-slate-300 2xl:text-lg ">
            <span className="2xl:text-3xl text-[#7268FA] font-semibold">
              10+
            </span>
            Year of Market
          </h3>
          <h3 className=" p-2.5 2xl:p-4 px-5 2xl:px-10 border flex flex-col text-slate-400/80   rotate-12 bg-white  rounded-3xl border-slate-300 2xl:text-lg ">
            <span className="2xl:text-3xl text-[#7268FA]  font-semibold">
              80+
            </span>
            App Built
          </h3>
        </div>
      </section>
    </main>
  );
}
