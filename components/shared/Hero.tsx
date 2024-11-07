import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { containerVariants, fadeInVariants } from "@/lib/animations";
import HeroBentoGrid from "@/components/shared/HeroBentoGrid";
import Link from "next/link";
import { scrollToSection } from "./Navbar";

const recoleta = localFont({ src: "../../app/recoleta.ttf" });

const Hero = () => {
  return (
    <section>
      <header
        id="home"
        className="flex flex-col items-center gap-8 2xl:mt-10 mb-14 md:mb-10"
      >
        <div className="flex items-center relative gap-3 md:gap-3 2xl:gap-5">
          <Image
            src="/icons/left-arrow.svg"
            alt="Splenify"
            className="  absolute -left-1 md:left-14 top-10 2xl:top-14"
            width={50}
            height={50}
          />
          <Image
            src="/icons/right-arrow.svg"
            alt="Splenify"
            className=" absolute -right-2 md:right-14 top-10 2xl:top-14
            
            "
            width={42}
            height={42}
          />
          <h3 className=" text-xs md:text-sm px-2 py-1.5 md:px-6 md:py-2  2xl:py-2  2xl:px-8 border   -rotate-12 text-[#7268FA] rounded-[20px] border-slate- dark:border-slate-700 dark:bg-slate-900 2xl:text-lg">
            App Dev
          </h3>
          <h3 className=" text-xs md:text-sm px-2 py-1.5 md:px-6 md:py-2   2xl:py-2  2xl:px-8 border   rotate-12 text-[#7268FA] rounded-[20px] border-slate- dark:border-slate-700 dark:bg-slate-900 2xl:text-lg">
            UI | UX
          </h3>
          <h3 className=" text-xs md:text-sm px-2 py-1.5 md:px-6 md:py-2  2xl:py-2  2xl:px-8 border   -rotate-12 text-[#7268FA] rounded-[20px] border-slate- dark:border-slate-700 dark:bg-slate-900 2xl:text-lg">
            Design
          </h3>
          <h3 className=" text-xs md:text-sm px-2 py-1.5 md:px-6 md:py-2   2xl:py-2  2xl:px-8 border   rotate-12 text-[#7268FA] rounded-[20px] border-slate- dark:border-slate-700 dark:bg-slate-900 2xl:text-lg">
            Writing
          </h3>
        </div>
        <h2 className=" text-3xl mt-2  md:text-[1.9rem] font-normal 2xl:text-[2.3rem]  ">
          We help you
        </h2>
      </header>
      <section className="flex  flex-col   items-center gap-6 ">
        <motion.div
          viewport={{ once: true }}
          initial={
            {
              opacity: 0.1,
              scale: 0.5,
            } /* Set initial properties */
          }
          whileInView={
            {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.6,
                ease: "easeOut",
              },
            } /* Animate when in view */
          }
          className={` text-[2.85rem] -mt-4 leading-none -tracking-wide md:text-8xl 2xl:text-[7.4rem] px-1.5 text-center ${recoleta.className}`}
        >
          Design.<span className="grad_text px-6 ">Develop.</span>
          Deploy
        </motion.div>
        <p className="2xl:text-[1.2rem] tracking-wide my-1 px-3.5 text-center text-slate-900 dark:text-white">
          We’re a modern app-building company that creates apps that your
          customers <br /> love and that evolve with your business.
        </p>
        <div className="flex  items-center justify-center gap-3 w-full  md:gap-4 px-12">
          <button
            onClick={() => scrollToSection("contact")}
            className=" bg-gradient-to-r hover:bg-gradient-to-tr hover:bg-[#DF56FE] transition-colors text-xs  md:w-48 flex-grow md:flex-grow-0 from-[#DF56FE] to-[#7165FF]   md:text-base 2xl:text-lg text-white font-normal rounded-[23px] px-5 2xl:px-8 py-[1.1rem]  "
          >
            Contact Us
          </button>
          <Link
            href={"https://www.cal.com/splenify"}
            className=" bg-white dark:bg-transparent text-center  tracking-tight hover:shadow-lg    duration-400 transition-shadow  flex-grow md:flex-grow-0 md:w-48 text-xs md:text-base 2xl:text-lg text-[#7165FF] font-semibold rounded-[23px] px-5 2xl:px-8 py-[1rem]  border-[3px] border-[#7165FF]"
          >
            Book Meeting
          </Link>
        </div>
        <HeroBentoGrid />
      </section>
      <div className="flex gap-10 my-[60px] justify-center ">
        <div className="hidden lg:flex flex-col gap-3">
          <h3 className=" p-2.5 2xl:p-4 px-8 2xl:px-10 border flex flex-col text-slate-400/80   rotate-12  rounded-3xl bg-white dark:bg-slate-900 dark:border-slate-700  border-slate-300 2xl:text-lg ">
            <span className="text-3xl 2xl:text-4xl text-[#7268FA] font-semibold">
              300+
            </span>
            Happy Clients
          </h3>
          <h3 className=" p-2.5 2xl:p-4 px-8 2xl:px-10 border flex flex-col text-slate-400/80   -rotate-12   rounded-3xl bg-white dark:bg-slate-900 dark:border-slate-700  border-slate-300 2xl:text-lg ">
            <span className=" text-3xl 2xl:text-4xl text-[#7268FA]  font-semibold">
              40+
            </span>
            Skillful Talent
          </h3>
        </div>
        <div className="flex flex-col px-4 items-center justify-center space-y-8">
          <h2 className="  text-lg  2xl:text-xl">
            Our long list of happy clients include:
          </h2>
          <div className="flex items-center gap-8 justify-center flex-wrap max-w-2xl 2xl:max-w-4xl">
            <motion.div
              variants={containerVariants} // Apply the container variant for staggering
              initial="initial"
              viewport={{ once: true, amount: 0.5 }}
              whileInView="animate" // Trigger the staggered animation
              className="flex items-center gap-x-4 gap-y-2 justify-center flex-wrap"
            >
              {Array.from({ length: 9 }).map((_, index) => (
                <motion.div
                  variants={fadeInVariants} // Each child fades in
                  key={index}
                  viewport={{ once: true, amount: 0.5 }}
                  className="relative"
                >
                  <Image
                    src={`/images/partner${index + 1}.svg`}
                    alt="Clients"
                    width={130}
                    className={` dark:invert dark:opacity-70 opacity-40 
              w-[120px] 2xl:w-[150px] `}
                    height={130}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col gap-3">
          <h3 className=" p-2.5 2xl:p-4 px-5 2xl:px-10 border flex flex-col text-slate-400/80   -rotate-12  rounded-3xl border-slate-300 bg-white dark:bg-slate-900 dark:border-slate-700  2xl:text-lg ">
            <span className="text-3xl 2xl:text-4xl text-[#7268FA] font-semibold">
              10+
            </span>
            Year of Market
          </h3>
          <h3 className=" p-2.5 2xl:p-4 px-5 2xl:px-10 border flex flex-col text-slate-400/80   rotate-12 bg-white dark:bg-slate-900 dark:border-slate-700  rounded-3xl border-slate-300 2xl:text-lg ">
            <span className="text-3xl 2xl:text-4xl text-[#7268FA]  font-semibold">
              80+
            </span>
            App Built
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
