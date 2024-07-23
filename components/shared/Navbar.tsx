import React from "react";
import Image from "next/image";
import Link from "next/link";

const navlinks = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const Navbar = () => {
  return (
    <div className=" w-full absolute items-center flex justify-between shadow-2xl shadow-gray-200/50 px-3 md:px-12 py-6 2xl:py-8 ">
      <Image
        src="/images/splenify.svg"
        alt="Splenify"
        width={150}
        height={150}
      />
      <div className="inline-flex items-center gap-10">
        {navlinks.map((item, index) => (
          <Link
            key={index}
            href="#"
            className=" text-sm 2xl:text-lg font-semibold  flex flex-col "
          >
            <p
              className={`${
                item.link === "#" ? "text-black" : "text-[#878787]"
              }`}
            >
              {item.name}
            </p>
            {item.link === "#" && (
              <span className="w-[45%] border-2 rounded-md border-[#00FAFE]"></span>
            )}
          </Link>
        ))}

        {/* <a href="#" className="text-lg font-semibold text-gray-800">
          Services
        </a>
        <a href="#" className="text-lg font-semibold text-gray-800">
          About
        </a>
        <a href="#" className="text-lg font-semibold text-gray-800">
          Contact
        </a> */}
      </div>
      <div className="flex items-center gap-4">
        <button className=" bg-black p-1 2xl:p-2 rounded-full">
          <Image src="/icons/sun.svg" alt="Phone" width={30} height={30} />
        </button>
        <button className=" bg-white text-sm 2xl:text-base text-slate-500 font-semibold rounded-full px-5 2xl:px-8 py-2.5 2xl:py-4 border-2 border-[#00FAFE]">
          Schedule a call
        </button>
      </div>
    </div>
  );
};

export default Navbar;
