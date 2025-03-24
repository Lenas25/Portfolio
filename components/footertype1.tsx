"use client";

import Routes from "@/constants/routes";
import Link from "next/link";
import {
  FaDownload,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export const FooterType1 = () => {
  return (
    <footer className="px-5 py-10 text-center md:w-[70%] z-10 mx-auto mt-5">
      <h5 className="text-2xl font-semibold md:text-4xl">LenasDev</h5>
      <ul className="flex gap-3 justify-center items-center flex-wrap my-5 md:gap-6">
        {Object.entries(Routes)
          .slice(0, 4)
          .map(([key, value]) => (
            <Link
              key={key}
              href={value}
              className="text-lg font-semibold md:text-2xl duration-300 ease-in-out hover:scale-110">
              {key}
            </Link>
          ))}
      </ul>
      <div className="h-[0.5px] w-full bg-white my-5 md:my-10" />
      <div className="flex gap-5 justify-center items-center flex-wrap md:gap-16">
        <a
          href="https://drive.google.com/file/d/1UrZ3UFCLuRn3V2YcrJ1BpX5YDPBz4SPk/view?usp=sharing"
          className="flex gap-2 items-center outline-1 py-2 px-5 rounded-full group shadow-[0px_2px_10px_-5px_#ffffff] md:text-2xl md:px-">
          Descargar CV{" "}
          <FaDownload className="duration-200 ease-in-out group-hover:translate-x-1" />
        </a>
        <div className="flex items-center gap-2 md:gap-5">
          <button
            type="button"
            className="flex items-center justify-center p-2 outline-1 rounded-full text-xl duration-300 ease-in-out shadow-[0px_2px_10px_-3px_#ffffff]  hover:-translate-y-1 hover:bg-blue-500 hover:outline-none md:p-3">
            <FaLinkedinIn className="md:text-2xl" />
          </button>
          <button
            type="button"
            className="p-2 outline-1  rounded-full text-xl duration-300 ease-in-out hover:-translate-y-1 hover:outline-none shadow-[0px_2px_10px_-3px_#ffffff] md:p-3">
            <FaGithub className="md:text-2xl" />
          </button>
          <button
            type="button"
            className="p-2 outline-1  rounded-full text-xl duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#F61558] hover:outline-none shadow-[0px_2px_10px_-3px_#ffffff] md:p-3">
            <FaInstagram className="md:text-2xl" />
          </button>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <Link
          href={Routes.inicio}
          className="relative w-6 right-0 -top-44 block">
        </Link>
      </div>
    </footer>
  );
};

