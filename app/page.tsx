"use client";
import Image from "next/image";
import localFont from "next/font/local";
import Testimonials from "@/components/shared/Testimonials";
const recoleta = localFont({ src: "./recoleta.ttf" });
import HeroBentoGrid from "@/components/shared/HeroBentoGrid";
import { motion } from "framer-motion";
import { containerVariants, fadeInVariants } from "@/lib/animations";
import Hero from "@/components/shared/Hero";
import AppsOnDemand from "@/components/shared/AppsOnDemand";
import Specialization from "@/components/shared/Specialization";
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
    <main className="flex min-h-screen  flex-col items-center pt-36  overflow-x-hidden 2xl:pt-40">
      {/* Hero Section */}
      <Hero />
      {/* Apps on demand */}
      <AppsOnDemand />
      {/* Specialization */}
      <Specialization />
      {/* Services */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.9,
            ease: "easeInOut",
          },
        }}
        className="flex flex-col w-full  items-center gap-5 py-12 md:px-8  my-[20px] md:my-[30px]"
      >
        <h2 className=" text-base   2xl:xl tracking-wide ">
          and we go beyond just visuals…
        </h2>
        <h1
          className={` text-xl relative md:text-3xl 2xl:text-5xl tracking-wide text-center mb-6 ${recoleta.className}`}
        >
          Our full scope of <span className=" text-[#F149FF] ">design</span> &
          {""} <span className=" text-[#7165FF] ">development</span> services
          include
          <Image
            src="/images/line_vector2.svg"
            alt="Splenify"
            width={300}
            height={300}
            className="  dark:invert  w-[180px] 2xl:w-[300px] absolute right-[13rem] 2xl:right-[22rem] -top-1 rotate-1  "
          />
          <Image
            src="/images/line_vector.svg"
            alt="Splenify"
            width={160}
            height={140}
            className="  dark:invert  w-[120px] 2xl:[160px] absolute left-[14.6rem] 2xl:left-[24rem] -top-1   "
          />
        </h1>
        <div className="grid grid-cols-1 max-w-5xl 2xl:max-w-7xl md:grid-cols-2 lg:grid-cols-3  gap-8 px-8 md:px-4 2xl:px-0  p-2 w-full">
          <motion.div
            initial={
              {
                opacity: 0.1,
                scale: 0.7,
              } /* Set initial properties */
            }
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
              },
            }}
            viewport={{ once: true }}
            className="flex flex-col  w-full bg-[#F3F3F9] dark:bg-slate-900 overflow-hidden  px-4 2xl:px-6 py-8 2xl:py-14 rounded-2xl "
          >
            <h2 className=" font-semibold text-xl 2xl:text-2xl mb-4">UX</h2>
            <div className="flex flex-wrap items-center justify-start gap-3">
              <div className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3.5 py-1.5 rounded-full">
                <Image
                  src="/icons/audit.svg"
                  alt="Splenify"
                  width={22}
                  height={22}
                  className=" w-[16px] 2xl:w-[22px] "
                />
                <p className="text-[#7165FF]  text-xs   2xl:text-base">
                  UX Audit
                </p>
              </div>
              {services.map((service, index) => (
                <div
                  key={index}
                  className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3 2xl:px-3.5 py-1.5 rounded-full"
                >
                  <Image
                    src={service.icon}
                    alt="Splenify"
                    width={22}
                    height={22}
                    className=" dark:invert w-[16px] 2xl:w-[22px] "
                  />
                  <p className="text-[#4E758D] dark:text-slate-300 text-xs   2xl:text-base">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={
              {
                opacity: 0.1,
                scale: 0.7,
              } /* Set initial properties */
            }
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
              },
            }}
            viewport={{ once: true }}
            className="flex flex-col  w-full bg-[#F3F3F9] dark:bg-slate-900 overflow-hidden  px-4 2xl:px-6 py-8 2xl:py-14 rounded-2xl "
          >
            {" "}
            <h2 className=" font-semibold text-xl 2xl:text-2xl mb-4">UI</h2>
            <div className="flex flex-wrap items-center justify-start gap-3">
              <div className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3.5 py-1.5 rounded-full">
                <Image
                  src="/icons/audit.svg"
                  alt="Splenify"
                  width={22}
                  height={22}
                  className=" w-[16px] 2xl:w-[22px] "
                />
                <p className="text-[#7165FF]  text-xs   2xl:text-base">
                  UX Audit
                </p>
              </div>
              {services.map((service, index) => (
                <div
                  key={index}
                  className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3 2xl:px-3.5 py-1.5 rounded-full"
                >
                  <Image
                    src={service.icon}
                    alt="Splenify"
                    width={22}
                    height={22}
                    className=" w-[16px] dark:invert 2xl:w-[22px] "
                  />
                  <p className="text-[#4E758D]  text-xs dark:text-slate-300  2xl:text-base">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={
              {
                opacity: 0.1,
                scale: 0.7,
              } /* Set initial properties */
            }
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
              },
            }}
            viewport={{ once: true }}
            className="flex flex-col  w-full bg-[#F3F3F9] dark:bg-slate-900 overflow-hidden  px-4 2xl:px-6 py-8 2xl:py-14 rounded-2xl "
          >
            {" "}
            <h2 className=" font-semibold text-xl 2xl:text-2xl mb-4">
              Front-End
            </h2>
            <div className="flex flex-wrap items-center justify-start gap-3">
              <div className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3.5 py-1.5 rounded-full">
                <Image
                  src="/icons/audit.svg"
                  alt="Splenify"
                  width={22}
                  height={22}
                  className=" w-[16px]  2xl:w-[22px] "
                />
                <p className="text-[#7165FF]  text-xs   2xl:text-base">
                  UX Audit
                </p>
              </div>
              {services.map((service, index) => (
                <div
                  key={index}
                  className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3 2xl:px-3.5 py-1.5 rounded-full"
                >
                  <Image
                    src={service.icon}
                    alt="Splenify"
                    width={22}
                    height={22}
                    className=" w-[16px] dark:invert 2xl:w-[22px] "
                  />
                  <p className="text-[#4E758D]  text-xs dark:text-slate-300  2xl:text-base">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={
              {
                opacity: 0.1,
                scale: 0.7,
              } /* Set initial properties */
            }
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
              },
            }}
            viewport={{ once: true }}
            className="flex flex-col  w-full bg-[#F3F3F9] dark:bg-slate-900 overflow-hidden  px-4 2xl:px-6 py-8 2xl:py-14 rounded-2xl "
          >
            {" "}
            <h2 className=" font-semibold text-xl 2xl:text-2xl mb-4">
              Back-end
            </h2>
            <div className="flex flex-wrap items-center justify-start gap-3">
              <div className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3.5 py-1.5 rounded-full">
                <Image
                  src="/icons/audit.svg"
                  alt="Splenify"
                  width={22}
                  height={22}
                  className=" w-[16px]  2xl:w-[22px] "
                />
                <p className="text-[#7165FF]  text-xs   2xl:text-base">
                  UX Audit
                </p>
              </div>
              {services.map((service, index) => (
                <div
                  key={index}
                  className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3 2xl:px-3.5 py-1.5 rounded-full"
                >
                  <Image
                    src={service.icon}
                    alt="Splenify"
                    width={22}
                    height={22}
                    className=" w-[16px] dark:invert 2xl:w-[22px] "
                  />
                  <p className="text-[#4E758D]  text-xs dark:text-slate-300  2xl:text-base">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={
              {
                opacity: 0.1,
                scale: 0.7,
              } /* Set initial properties */
            }
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
              },
            }}
            viewport={{ once: true }}
            className="flex flex-col  w-full bg-[#F3F3F9] dark:bg-slate-900 overflow-hidden  px-4 2xl:px-6 py-8 2xl:py-14 rounded-2xl "
          >
            {" "}
            <h2 className=" font-semibold text-xl 2xl:text-2xl mb-4">
              Deployment
            </h2>
            <div className="flex flex-wrap items-center justify-start gap-3">
              <div className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3.5 py-1.5 rounded-full">
                <Image
                  src="/icons/audit.svg"
                  alt="Splenify"
                  width={22}
                  height={22}
                  className=" w-[16px]  2xl:w-[22px] "
                />
                <p className="text-[#7165FF]  text-xs   2xl:text-base">
                  UX Audit
                </p>
              </div>
              {services.map((service, index) => (
                <div
                  key={index}
                  className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3 2xl:px-3.5 py-1.5 rounded-full"
                >
                  <Image
                    src={service.icon}
                    alt="Splenify"
                    width={22}
                    height={22}
                    className=" w-[16px] dark:invert 2xl:w-[22px] "
                  />
                  <p className="text-[#4E758D]  text-xs dark:text-slate-300  2xl:text-base">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={
              {
                opacity: 0.1,
                scale: 0.7,
              } /* Set initial properties */
            }
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
              },
            }}
            viewport={{ once: true }}
            className="flex flex-col  w-full bg-[#F3F3F9] dark:bg-slate-900 overflow-hidden  px-4 2xl:px-6 py-8 2xl:py-14 rounded-2xl "
          >
            {" "}
            <h2 className=" font-semibold text-xl 2xl:text-2xl mb-4">
              Maintenance
            </h2>
            <div className="flex flex-wrap items-center justify-start gap-3">
              <div className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3.5 py-1.5 rounded-full">
                <Image
                  src="/icons/audit.svg"
                  alt="Splenify"
                  width={22}
                  height={22}
                  className=" w-[16px]  2xl:w-[22px] "
                />
                <p className="text-[#7165FF]  text-xs   2xl:text-base">
                  UX Audit
                </p>
              </div>
              {services.map((service, index) => (
                <div
                  key={index}
                  className=" inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3 2xl:px-3.5 py-1.5 rounded-full"
                >
                  <Image
                    src={service.icon}
                    alt="Splenify"
                    width={22}
                    height={22}
                    className=" w-[16px] dark:invert 2xl:w-[22px] "
                  />
                  <p className="text-[#4E758D]  text-xs dark:text-slate-300  2xl:text-base">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* Projects */}
      <section
        id="projects"
        className="flex flex-col w-full relative  items-center gap-3 2xl:gap-5   my-[20px] md:my-[30px]"
      >
        <Image
          src="/images/left-arrow.svg"
          alt="Splenify"
          width={300}
          height={300}
          className=" absolute  -top-1 rotate-1 right-0 
          w-[350px] 2xl:w-[430px] dark:invert

           "
        />
        <Image
          src="/images/right-arrow.svg"
          alt="Splenify"
          width={160}
          height={140}
          className=" absolute left-0 -top-10 rotate-1  
          w-[350px] 2xl:w-[430px] dark:invert
          "
        />
        <h2 className=" text-base   2xl:xl tracking-wide ">
          and we go beyond just visuals…
        </h2>
        <h1
          className={` text-xl relative md:text-4xl 2xl:text-5xl tracking-wide text-center mb-6 ${recoleta.className}`}
        >
          See our latest projects
        </h1>
        <div
          style={styles.gridContainer}
          className=" w-full max-w-5xl 2xl:max-w-7xl gap-12 2xl:gap-16 "
        >
          <div
            style={{ ...styles.gridItem, ...styles.item1 }}
            className="flex flex-col"
          >
            <Image
              src="/images/p1.png"
              alt="Splenify"
              width={985}
              height={923}
              className=" w-full h-full "
            />
            <div className="flex items-center w-full pt-4 justify-between">
              <div className="flex flex-col">
                <p className=" font-thin text-base">Mobile Application</p>
                <h2 className="text-xl font-bold ">Aura IOS | Android</h2>
              </div>
              <button className="bg-[#F3F3F9] dark:bg-slate-900 dark:border px-6 py-4 rounded-full font-thin text-base">
                View Project
              </button>
            </div>
          </div>
          <div
            style={{ ...styles.gridItem, ...styles.item2 }}
            className=" flex flex-col"
          >
            <Image
              src="/images/p2.png"
              alt="Splenify"
              width={985}
              height={923}
              className=" w-full h-full "
            />
            <div className="flex items-center w-full pt-4 justify-between">
              <div className="flex flex-col">
                <p className=" font-thin text-base">Video Animation</p>
                <h2 className="text-xl font-bold ">AB.S Snack Animation</h2>
              </div>
              <button className="bg-[#F3F3F9] dark:bg-slate-900 dark:border px-6 py-4 rounded-full font-thin text-base">
                View Project
              </button>
            </div>
          </div>
          <div
            style={{ ...styles.gridItem, ...styles.item3 }}
            className="flex flex-col"
          >
            <Image
              src="/images/p3.png"
              alt="Splenify"
              width={985}
              height={923}
              className=" w-full h-full "
            />
            <div className="flex items-center w-full pt-4  justify-between">
              <div className="flex flex-col">
                <p className=" font-thin text-base">Web Development</p>
                <h2 className="text-xl font-bold ">
                  Gradient Website <br /> Development
                </h2>
              </div>
              <button className="bg-[#F3F3F9] dark:bg-slate-900 dark:border px-6 py-4 rounded-full font-thin text-base">
                View Project
              </button>
            </div>
          </div>
          <div
            style={{ ...styles.gridItem, ...styles.item4 }}
            className=" flex flex-col"
          >
            <Image
              src="/images/p4.png"
              alt="Splenify"
              width={985}
              height={923}
              className=" w-full h-full "
            />
            <div className="flex items-center w-full pt-4  justify-between">
              <div className="flex flex-col">
                <p className=" font-thin text-base">
                  Full Stack Web Development
                </p>
                <h2 className="text-xl font-bold ">Dashboard Teamify</h2>
              </div>
              <button className="bg-[#F3F3F9] dark:bg-slate-900 dark:border px-6 py-4 rounded-full font-thin text-base">
                View Project
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <Testimonials />
      {/* footer  */}
      <footer
        id="contact"
        className=" w-full bg-[#161C2D] py-16 px-4 md:px-[70px] mt-[100px]"
      >
        <div className="flex flex-col md:flex-row gap-8 items-start px-3 md:px-0  md:items-center justify-between pb-16 border-b border-gray-600">
          <div className="flex flex-col max-w-md gap-3">
            <h2 className=" text-xl 2xl:text-3xl text-white font-semibold">
              Ready to launch your next project?
            </h2>
            <p className=" text-gray-400 leading-6 tracking-wide">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
          <button className=" bg-[#2420FF] text-white py-3 px-8 rounded-full 2xl:text-lg">
            Get Started with Splenify
          </button>
        </div>
        <div className="flex items-center justify-between px-3 md:px-0 pt-16">
          <div className="flex flex-col max-w-xs gap-3">
            <h2 className=" text-xl 2xl:text-3xl text-white font-semibold">
              Splenify
            </h2>
            <p className=" text-gray-400 leading-6 tracking-wide text-sm">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
            <div className="flex gap-6 mt-4 mb-8">
              <Image
                src="/icons/fb.svg"
                alt="Splenify"
                width={20}
                height={20}
              />
              <Image
                src="/icons/insta.svg"
                alt="Splenify"
                width={20}
                height={20}
              />
              <Image
                src="/icons/linkedin.svg"
                alt="Splenify"
                width={20}
                height={20}
              />
            </div>
            <p className=" text-lg font-thin text-gray-400">
              Copyright © Splenify
            </p>
          </div>
          <ul className=" space-y-2">
            <li className=" text-sm 2xl:text-base text-gray-200 hover:cursor-pointer">
              About
            </li>
            <li className=" text-sm 2xl:text-base text-gray-200 hover:cursor-pointer">
              Home
            </li>
            <li className=" text-sm 2xl:text-base text-gray-200 hover:cursor-pointer">
              Services
            </li>
            <li className=" text-sm 2xl:text-base text-gray-200 hover:cursor-pointer">
              Portfolio
            </li>
            <li className=" text-sm 2xl:text-base text-gray-200 hover:cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}

const styles = {
  gridContainer: {
    display: "grid",
    gridTemplateRows: "repeat(5, 1fr)",
    gridTemplateColumns: "repeat(4, 1fr)",
    padding: "10px",
    // rowGap: "40px",
    // columnGap: "70px",
  },
  gridItem: {
    display: "flex",
    // backgroundColor: "#F3F3F9",
    alignItems: "center",
    justifyContent: "center",

    fontSize: "20px",
    fontWeight: "bold",
  },
  item1: {
    gridRow: "1 / span 3",
    gridColumn: "1 / span 2",
  },
  item2: {
    gridRow: "1 / span 2",
    gridColumn: "3 / span 2",
  },
  item3: {
    gridRow: "4 / span 2",
    gridColumn: "1 / span 2",
  },
  item4: {
    gridRow: "3 / span 3",
    gridColumn: "3 / span 2",
  },
};
