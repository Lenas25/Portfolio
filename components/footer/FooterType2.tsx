"use client";

import Routes from "@/constants/routes";
import Link from "next/link";
import {
  FaDownload,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { motion } from "framer-motion";

const InfiniteScroll = () => {
  const itemStyle = "text-3xl font-bold";

  const items = [
    { content: <HiSparkles className={itemStyle} /> },
    { content: <p className={itemStyle}>Design</p> },
    { content: <HiSparkles className={itemStyle} /> },
    { content: <p className={itemStyle}>Develop</p> },
    { content: <HiSparkles className={itemStyle} /> },
    { content: <p className={itemStyle}>Innovation</p> },
  ];

  return (
    <div className="bg-white flex -rotate-[5deg] h-16 items-center gap-32 ">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="flex text-black justify-between gap-10 flex-shrink-0 md:w-full">
        {items.map((item, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<div key={index}>{item.content}</div>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="flex text-black justify-between gap-10 flex-shrink-0 md:w-full">
        {items.map((item, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<div key={index}>{item.content}</div>
        ))}
      </motion.div>
    </div>
  );
};

interface FooterType2Props {
  isConect?: boolean | null;
}

export const FooterType2 = ({ isConect = false }: FooterType2Props) => {
  return (
    <div className="overflow-x-hidden z-10">
      <div className="h-14 w-full bg-gradient-to-r from-purpleText to-purple mt-20">
        <InfiniteScroll />
      </div>
      <footer className="px-5 py-10 text-center md:w-[90%] mx-auto relative mt-10 md:mt-16">
        <div className="flex justify-between gap-5 items-center flex-wrap">
          <h5 className="text-2xl font-semibold md:text-4xl">LenasDev</h5>
          <ul className="flex gap-3 justify-center items-center flex-wrap md:gap-6">
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
        </div>
        <div className="h-[0.5px] w-full bg-white my-5" />
        <div className="flex gap-5 justify-center items-center flex-wrap md:gap-16 md:justify-end">
          <a
            href="https://drive.google.com/file/d/1UrZ3UFCLuRn3V2YcrJ1BpX5YDPBz4SPk/view?usp=sharing"
            className="flex gap-2 items-center outline-1 py-2 px-5 rounded-full group shadow-[0px_2px_10px_-5px_#ffffff] md:text-2xl md:px-">
            Descargar CV{" "}
            <FaDownload className="duration-200 ease-in-out group-hover:translate-x-1" />
          </a>
          <div
            className={`items-center gap-2 md:gap-5 ${
              isConect ? "hidden" : "flex"
            }`}>
            <a
              href="https://www.linkedin.com/in/elena-suarez-paredes/"
              className="flex items-center justify-center p-2 outline-1 rounded-full text-xl duration-300 ease-in-out shadow-[0px_2px_10px_-3px_#ffffff]  hover:-translate-y-1 hover:bg-blue-500 hover:outline-none md:p-3">
              <FaLinkedinIn className="md:text-2xl" />
            </a>
            <a
              href="https://github.com/Lenas25"
              className="p-2 outline-1 rounded-full text-xl duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#000000]  hover:outline-none shadow-[0px_2px_10px_-3px_#ffffff] md:p-3">
              <FaGithub className="md:text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/_lenasp"
              className="p-2 outline-1  rounded-full text-xl duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#F61558] hover:outline-none shadow-[0px_2px_10px_-3px_#ffffff] md:p-3">
              <FaInstagram className="md:text-2xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
