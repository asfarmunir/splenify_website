import Image from "next/image";
import localFont from "next/font/local";
const recoleta = localFont({ src: "./recoleta.ttf" });

const services = [
  {
    title: "Research & Strategy",
    icon: "/icons/research.svg",
  },
  {
    title: "User Journey Map",
    icon: "/icons/user.svg",
  },
  {
    title: "Information Architecture",
    icon: "/icons/info.svg",
  },
  {
    title: "Usability testing",
    icon: "/icons/testing.svg",
  },
  {
    title: "UX Writing",
    icon: "/icons/writing.svg",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-36  2xl:py-40">
      {/* Hero Section */}
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

      <div className="hidden lg:flex gap-10 my-16">
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
      </div>

      {/* Apps on demand */}
      <section className="flex flex-col  items-center gap-5 2xl:mt-16 mb-16 md:mb-10">
        <h2 className=" text-base   2xl:xl tracking-wide ">How we do it?</h2>
        <h1
          className={` text-xl relative md:text-3xl 2xl:text-5xl tracking-wide text-center ${recoleta.className}`}
        >
          World-class apps on demand, with our{""}{" "}
          <span className=" text-[#DF56FE] ">process!</span>
          <Image
            src="/images/line_vector.svg"
            alt="Splenify"
            width={200}
            height={200}
            className=" absolute -right-3 -bottom-3 -rotate-4 "
          />
        </h1>
        <div className="hidden lg:flex items-end my-16 2xl:my-20">
          <div className="w-[10.5rem] 2xl:w-[11.8rem] h-[6.5rem] 2xl:h-[7.5rem] bg-[#F3F3F9] flex py-2 items-center rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl  justify-center">
            <div className="flex bg-white rounded-2xl w-36  2xl:w-[10.4rem] h-[5.2rem] 2xl:h-[5.6rem] flex-col relative  items-center justify-center">
              <Image
                src="/images/phoneCall.svg"
                alt="Splenify"
                width={70}
                height={70}
                className=" w-[58px] 2xl:w-[70px] h-[58px] 2xl:h-[70px] absolute -top-12 2xl:-top-14"
              />
              <h3 className=" italic text-sm 2xl:text-lg  font-semibold  text-center text-gray-500">
                Discovery <br /> Call
              </h3>
            </div>
          </div>
          <div className="w-[10.5rem] 2xl:w-[11.8rem] h-[8rem] 2xl:h-[9rem] bg-[#F3F3F9] flex py-2 items-start rounded-tr-3xl rounded-tl-3xl   justify-center">
            <div className="flex bg-white rounded-2xl w-36  2xl:w-[10.4rem] h-[5.2rem] 2xl:h-[5.6rem] flex-col relative  items-center justify-center">
              <Image
                src="/images/research.svg"
                alt="Splenify"
                width={70}
                height={70}
                className=" w-[62px] 2xl:w-[75px] h-[62px] 2xl:h-[75px] absolute -top-10 2xl:-top-12"
              />
              <h3 className=" italic text-sm 2xl:text-lg  font-semibold  text-center text-gray-500">
                Research
              </h3>
            </div>
          </div>
          <div className="w-[10.5rem] 2xl:w-[11.8rem] h-[9.5rem] 2xl:h-[10.5rem] bg-[#F3F3F9] flex py-2 items-start rounded-tr-3xl rounded-tl-3xl   justify-center">
            <div className="flex bg-white rounded-2xl w-36  2xl:w-[10.4rem] h-[5.2rem] 2xl:h-[5.6rem] flex-col relative  items-center justify-center">
              <Image
                src="/images/design.svg"
                alt="Splenify"
                width={70}
                height={70}
                className=" w-[62px] 2xl:w-[80px] h-[62px] 2xl:h-[80px] absolute -top-12 2xl:-top-[4.5rem]"
              />
              <h3 className=" italic text-sm 2xl:text-lg  font-semibold  text-center text-gray-500">
                UI/Ux <br /> Design
              </h3>
            </div>
          </div>
          <div className="w-[10.5rem] 2xl:w-[11.8rem] h-[11rem] 2xl:h-[12rem] bg-[#F3F3F9] flex py-2 items-start rounded-tr-3xl rounded-tl-3xl   justify-center">
            <div className="flex bg-white rounded-2xl w-36  2xl:w-[10.4rem] h-[5.2rem] 2xl:h-[5.6rem] flex-col relative  items-center justify-center">
              <Image
                src="/images/frontend.svg"
                alt="Splenify"
                width={70}
                height={70}
                className=" w-[62px] 2xl:w-[80px] h-[62px] 2xl:h-[80px] absolute -top-12 2xl:-top-16"
              />
              <h3 className=" italic text-sm 2xl:text-base  font-semibold  text-center text-gray-500">
                Front-End Development
              </h3>
            </div>
          </div>
          <div className="w-[10.5rem] 2xl:w-[11.8rem] h-[12.5rem] 2xl:h-[13.5rem] bg-[#F3F3F9] flex py-2 items-start rounded-tr-3xl rounded-tl-3xl   justify-center">
            <div className="flex bg-white rounded-2xl w-36  2xl:w-[10.4rem] h-[5.2rem] 2xl:h-[5.6rem] flex-col relative  items-center justify-center">
              <Image
                src="/images/backend.svg"
                alt="Splenify"
                width={70}
                height={70}
                className=" w-[62px] 2xl:w-[83px] h-[62px] 2xl:h-[83px] absolute -top-12 2xl:-top-[4.5rem]"
              />
              <h3 className=" italic text-sm 2xl:text-base  font-semibold  text-center text-gray-500">
                Backend-End Development
              </h3>
            </div>
          </div>
          <div className="w-[10.5rem] 2xl:w-[11.8rem] h-[14rem] 2xl:h-[15rem] bg-[#F3F3F9] flex py-2 items-start rounded-tr-3xl rounded-tl-3xl   justify-center">
            <div className="flex bg-white rounded-2xl w-36  2xl:w-[10.4rem] h-[5.2rem] 2xl:h-[5.6rem] flex-col relative  items-center justify-center">
              <Image
                src="/images/deployment.svg"
                alt="Splenify"
                width={70}
                height={70}
                className=" w-[69px] 2xl:w-[90px] h-[69px] 2xl:h-[90px] absolute -top-12 2xl:-top-[4.5rem]"
              />
              <h3 className=" italic text-sm 2xl:text-lg  font-semibold  text-center text-gray-500">
                Depolyment
              </h3>
            </div>
          </div>
          <div className="w-[10.5rem] 2xl:w-[11.8rem] h-[15.5rem] 2xl:h-[16.5rem] bg-[#F3F3F9] flex py-2 items-start rounded-tr-3xl rounded-tl-3xl rounded-br-3xl   justify-center">
            <div className="flex bg-white rounded-2xl w-36  2xl:w-[10.4rem] h-[5.2rem] 2xl:h-[5.6rem] flex-col relative  items-center justify-center">
              <Image
                src="/images/mentain.svg"
                alt="Splenify"
                width={70}
                height={70}
                className=" w-[70px] 2xl:w-[95px] h-[70px] 2xl:h-[95px] absolute -top-12 2xl:-top-[4.5rem]"
              />
              <h3 className=" italic text-sm 2xl:text-lg  font-semibold  text-center text-gray-500">
                Maintenance
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* Partners */}
      <section className="flex flex-col  w-full items-center gap-5 2xl:mt-16 mb-16 md:mb-20">
        <h2 className=" text-base   2xl:xl tracking-wide ">
          What do we specialize in?
        </h2>
        <h1
          className={` text-xl relative md:text-3xl 2xl:text-5xl tracking-wide text-center mb-16 ${recoleta.className}`}
        >
          Our partners hire us to{" "}
          <span className=" text-[#7165FF] ">design & develop</span> their…
          <Image
            src="/images/line_vector2.svg"
            alt="Splenify"
            width={380}
            height={380}
            className=" absolute right-36 -bottom- -rotate-4 "
          />
        </h1>
        <div className="grid grid-cols-1 max-w-7xl lg:grid-cols-2 gap-8 px-8 md:px-12 2xl:px-0  p-2 w-full">
          <div className="flex flex-col md:flex-row w-full  overflow-hidden  rounded-2xl ">
            <div className=" py-10 md:py-0 w-full md:w-[50%] bg-[#F3F3F9]  flex flex-col items-center justify-center">
              <h2 className=" text-2xl md:text-lg 2xl:text-2xl font-semibold mb-2">
                Mobile & Web Apps
              </h2>
              <p className=" md:max-w-[15.5rem] 2xl:max-w-[20rem] px-8 text-lg md:text-xs 2xl:text-sm text-center md:text-start ">
                We’ll research your product and start building.
              </p>
            </div>
            <div className=" w-full md:w-[50%] bg-[#F3F3F9] ">
              <Image
                src="/images/portfolio1.jpg"
                alt="Splenify"
                width={225}
                className=" w-full h-full "
                height={123}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full  overflow-hidden  rounded-2xl ">
            <div className=" py-10 md:py-0 w-full md:w-[50%] bg-[#F3F3F9]  flex flex-col items-center justify-center">
              <h2 className=" text-2xl md:text-lg 2xl:text-2xl font-semibold mb-2">
                Website
              </h2>
              <p className=" md:max-w-[15.5rem] 2xl:max-w-[20rem] px-8 text-lg md:text-xs 2xl:text-sm text-center md:text-start ">
                We’ll research your product and start building.
              </p>
            </div>
            <div className=" w-full md:w-[50%] bg-[#F3F3F9] ">
              <Image
                src="/images/portfolio2.jpg"
                alt="Splenify"
                width={225}
                className=" w-full h-full "
                height={123}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full  overflow-hidden  rounded-2xl ">
            <div className=" py-10 md:py-0 w-full md:w-[50%] bg-[#F3F3F9]  flex flex-col items-center justify-center">
              <h2 className=" text-2xl md:text-lg 2xl:text-2xl font-semibold mb-2">
                Mobile & Web Apps
              </h2>
              <p className=" md:max-w-[15.5rem] 2xl:max-w-[20rem] px-8 text-lg md:text-xs 2xl:text-sm text-center md:text-start ">
                We’ll research your product and start building.
              </p>
            </div>
            <div className=" w-full md:w-[50%] bg-[#F3F3F9] ">
              <Image
                src="/images/portfolio1.jpg"
                alt="Splenify"
                width={225}
                className=" w-full h-full "
                height={123}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full  overflow-hidden  rounded-2xl ">
            <div className=" py-10 md:py-0 w-full md:w-[50%] bg-[#F3F3F9]  flex flex-col items-center justify-center">
              <h2 className=" text-2xl md:text-lg 2xl:text-2xl font-semibold mb-2">
                Website
              </h2>
              <p className=" md:max-w-[15.5rem] 2xl:max-w-[20rem] px-8 text-lg md:text-xs 2xl:text-sm text-center md:text-start ">
                We’ll research your product and start building.
              </p>
            </div>
            <div className=" w-full md:w-[50%] bg-[#F3F3F9] ">
              <Image
                src="/images/portfolio2.jpg"
                alt="Splenify"
                width={225}
                className=" w-full h-full "
                height={123}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full  overflow-hidden  rounded-2xl ">
            <div className=" py-10 md:py-0 w-full md:w-[50%] bg-[#F3F3F9]  flex flex-col items-center justify-center">
              <h2 className=" text-2xl md:text-lg 2xl:text-2xl font-semibold mb-2">
                Mobile & Web Apps
              </h2>
              <p className=" md:max-w-[15.5rem] 2xl:max-w-[20rem] px-8 text-lg md:text-xs 2xl:text-sm text-center md:text-start ">
                We’ll research your product and start building.
              </p>
            </div>
            <div className=" w-full md:w-[50%] bg-[#F3F3F9] ">
              <Image
                src="/images/portfolio1.jpg"
                alt="Splenify"
                width={225}
                className=" w-full h-full "
                height={123}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full  overflow-hidden  rounded-2xl ">
            <div className=" py-10 md:py-0 w-full md:w-[50%] bg-[#F3F3F9]  flex flex-col items-center justify-center">
              <h2 className=" text-2xl md:text-lg 2xl:text-2xl font-semibold mb-2">
                Website
              </h2>
              <p className=" md:max-w-[15.5rem] 2xl:max-w-[20rem] px-8 text-lg md:text-xs 2xl:text-sm text-center md:text-start ">
                We’ll research your product and start building.
              </p>
            </div>
            <div className=" w-full md:w-[50%] bg-[#F3F3F9] ">
              <Image
                src="/images/portfolio2.jpg"
                alt="Splenify"
                width={225}
                className=" w-full h-full "
                height={123}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="flex flex-col  w-full items-center gap-5 2xl:mt-16 mb-16 md:mb-20">
        <h2 className=" text-base   2xl:xl tracking-wide ">
          and we go beyond just visuals…
        </h2>
        <h1
          className={` text-xl relative md:text-3xl 2xl:text-5xl tracking-wide text-center mb-16 ${recoleta.className}`}
        >
          Our full scope of <span className=" text-[#F149FF] ">design</span> &
          {""} <span className=" text-[#7165FF] ">development</span> services
          include
          <Image
            src="/images/line_vector2.svg"
            alt="Splenify"
            width={300}
            height={300}
            className=" absolute right-[22rem] -top-1 rotate-1  "
          />
          <Image
            src="/images/line_vector.svg"
            alt="Splenify"
            width={160}
            height={140}
            className=" absolute left-[24rem] -top-1   "
          />
        </h1>
        <div className="grid grid-cols-1 max-w-7xl md:grid-cols-2 lg:grid-cols-3  gap-8 px-8 md:px-12 2xl:px-0  p-2 w-full">
          <div className="flex flex-col  w-full bg-[#F3F3F9]  overflow-hidden  px-6 py-14 rounded-2xl ">
            <h2 className=" font-semibold text-2xl mb-4">UX</h2>
            <div className="flex flex-wrap items-center justify-start gap-3">
              <div className=" inline-flex items-center gap-1 bg-white px-3.5 py-1.5 rounded-full">
                <Image
                  src="/icons/audit.svg"
                  alt="Splenify"
                  width={22}
                  height={22}
                />
                <p className="text-[#7165FF] text-sm 2xl:text-base">UX Audit</p>
              </div>
              {services.map((service, index) => (
                <div
                  key={index}
                  className=" inline-flex items-center gap-1 bg-white px-3 2xl:px-3.5 py-1.5 rounded-full"
                >
                  <Image
                    src={service.icon}
                    alt="Splenify"
                    width={22}
                    height={22}
                  />
                  <p className="text-[#4E758D] text-sm 2xl:text-base">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col  w-full bg-[#F3F3F9]  overflow-hidden  px-6 py-14 rounded-2xl ">
            <h2 className=" font-semibold text-2xl mb-4">UI</h2>
            <div className="flex flex-wrap items-center justify-start gap-3">
              <div className=" inline-flex items-center gap-1 bg-white px-3.5 py-1.5 rounded-full">
                <Image
                  src="/icons/audit.svg"
                  alt="Splenify"
                  width={22}
                  height={22}
                />
                <p className="text-[#7165FF] text-sm 2xl:text-base">UX Audit</p>
              </div>
              {services.map((service, index) => (
                <div
                  key={index}
                  className=" inline-flex items-center gap-1 bg-white px-3 2xl:px-3.5 py-1.5 rounded-full"
                >
                  <Image
                    src={service.icon}
                    alt="Splenify"
                    width={22}
                    height={22}
                  />
                  <p className="text-[#4E758D] text-sm 2xl:text-base">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col  w-full bg-[#F3F3F9]  overflow-hidden  px-6 py-14 rounded-2xl ">
            <h2 className=" font-semibold text-2xl mb-4">Front-End</h2>
            <div className="flex flex-wrap items-center justify-start gap-3">
              <div className=" inline-flex items-center gap-1 bg-white px-3.5 py-1.5 rounded-full">
                <Image
                  src="/icons/audit.svg"
                  alt="Splenify"
                  width={22}
                  height={22}
                />
                <p className="text-[#7165FF] text-sm 2xl:text-base">UX Audit</p>
              </div>
              {services.map((service, index) => (
                <div
                  key={index}
                  className=" inline-flex items-center gap-1 bg-white px-3 2xl:px-3.5 py-1.5 rounded-full"
                >
                  <Image
                    src={service.icon}
                    alt="Splenify"
                    width={22}
                    height={22}
                  />
                  <p className="text-[#4E758D] text-sm 2xl:text-base">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col  w-full bg-[#F3F3F9]  overflow-hidden  px-6 py-14 rounded-2xl ">
            <h2 className=" font-semibold text-2xl mb-4">Back-end</h2>
            <div className="flex flex-wrap items-center justify-start gap-3">
              <div className=" inline-flex items-center gap-1 bg-white px-3.5 py-1.5 rounded-full">
                <Image
                  src="/icons/audit.svg"
                  alt="Splenify"
                  width={22}
                  height={22}
                />
                <p className="text-[#7165FF] text-sm 2xl:text-base">UX Audit</p>
              </div>
              {services.map((service, index) => (
                <div
                  key={index}
                  className=" inline-flex items-center gap-1 bg-white px-3 2xl:px-3.5 py-1.5 rounded-full"
                >
                  <Image
                    src={service.icon}
                    alt="Splenify"
                    width={22}
                    height={22}
                  />
                  <p className="text-[#4E758D] text-sm 2xl:text-base">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col  w-full bg-[#F3F3F9]  overflow-hidden  px-6 py-14 rounded-2xl ">
            <h2 className=" font-semibold text-2xl mb-4">Deployment</h2>
            <div className="flex flex-wrap items-center justify-start gap-3">
              <div className=" inline-flex items-center gap-1 bg-white px-3.5 py-1.5 rounded-full">
                <Image
                  src="/icons/audit.svg"
                  alt="Splenify"
                  width={22}
                  height={22}
                />
                <p className="text-[#7165FF] text-sm 2xl:text-base">UX Audit</p>
              </div>
              {services.map((service, index) => (
                <div
                  key={index}
                  className=" inline-flex items-center gap-1 bg-white px-3 2xl:px-3.5 py-1.5 rounded-full"
                >
                  <Image
                    src={service.icon}
                    alt="Splenify"
                    width={22}
                    height={22}
                  />
                  <p className="text-[#4E758D] text-sm 2xl:text-base">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col  w-full bg-[#F3F3F9]  overflow-hidden  px-6 py-14 rounded-2xl ">
            <h2 className=" font-semibold text-2xl mb-4">Maintenance</h2>
            <div className="flex flex-wrap items-center justify-start gap-3">
              <div className=" inline-flex items-center gap-1 bg-white px-3.5 py-1.5 rounded-full">
                <Image
                  src="/icons/audit.svg"
                  alt="Splenify"
                  width={22}
                  height={22}
                />
                <p className="text-[#7165FF] text-sm 2xl:text-base">UX Audit</p>
              </div>
              {services.map((service, index) => (
                <div
                  key={index}
                  className=" inline-flex items-center gap-1 bg-white px-3 2xl:px-3.5 py-1.5 rounded-full"
                >
                  <Image
                    src={service.icon}
                    alt="Splenify"
                    width={22}
                    height={22}
                  />
                  <p className="text-[#4E758D] text-sm 2xl:text-base">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
