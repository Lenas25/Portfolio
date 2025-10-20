"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import Routes from "@/constants/routes";
import { usePathname } from "next/navigation";

interface AnimatedHamburgerButtonProps {
  handleClick: () => void;
  delayed: boolean;
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem = ({
  href,
  text,
  handleClick,
}: {
  href: string;
  text: string;
  handleClick: () => void;
}) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${
        path === href
          ? "text-purple md:border-b-2 md:border-b-purple"
          : "text-white"
      }`}>
      <motion.li
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}>
        {text}
      </motion.li>
    </Link>
  );
};

const AnimatedHamburgerButton = ({
  handleClick,
  delayed,
}: AnimatedHamburgerButtonProps) => {
  return (
    <MotionConfig
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}>
      <motion.button
        className={`z-50 md:hidden cursor-pointer w-10 h-10 rounded-full hover:bg-purple/60 flex transition-colors duration-300 ${
          delayed ? "fixed right-5" : "relative"
        }`}
        animate={delayed ? "open" : "closed"}
        onClick={handleClick}>
        <motion.span
          style={{
            left: "50%",
            top: "30%",
            y: "-50%",
          }}
          variants={{
            open: { rotate: "-45deg", left: "47%", top: "37%" },
            closed: { rotate: "0deg" },
          }}
          className="absolute w-3 h-1 bg-white rounded-full"
        />
        <motion.span
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: { rotate: "45deg" },
            closed: { rotate: "0deg" },
          }}
          className="absolute w-6 h-1 bg-white rounded-full"
        />
        <motion.span
          style={{
            left: "50%",
            bottom: "30%",
            x: "-100%",
            y: "50%",
          }}
          variants={{
            open: { rotate: "-45deg", left: "54%", bottom: "38%" },
            closed: { rotate: "0deg" },
          }}
          className="absolute w-3 h-1 bg-white rounded-full"
        />
      </motion.button>
    </MotionConfig>
  );
};

export const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [delayedNav, setDelayedNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(min-width: 768px)").matches
      ) {
        setOpenNav(true);
        setDelayedNav(true);
      } else {
        setOpenNav(false);
        setDelayedNav(false);
      }
    };

    if (typeof window !== "undefined") {
      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const handleClick = () => {
    if (
      window.matchMedia("(min-width: 768px)").matches
    ) {
      setOpenNav(true);
      setDelayedNav(true);
    } else {
      setOpenNav(!openNav);
      setTimeout(() => {
        setDelayedNav(!openNav);
      }, 1000);
    }
  };

  const navVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const sidebarVariants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(0px at calc(100% - 35px) 40px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <nav
      className="flex justify-between flex-wrap items-center p-5 gap-5 md:gap-3 
     md:flex-wrap md:py-5 lg:justify-between lg:gap-10 lg:px-10">
      <h2 className="text-2xl md:text-3xl">LenasDev</h2>
      <motion.div
        animate={delayedNav ? "open" : "closed"}
        variants={sidebarVariants}
        className="fixed inset-0 bg-gradient-to-br from-[#01080F] to-[#302A41] h-screen w-screen z-10 md:relative md:bg-none md:w-auto md:h-auto md:z-0">
        <motion.ul
          initial={false}
          animate={delayedNav ? "open" : "closed"}
          variants={navVariants}
          className={`fixed inset-0 z-50 flex-col items-center justify-center h-full w-full gap-5 text-4xl uppercase font-semibold md:relative lg:gap-10 md:text-2xl md:flex-row md:w-fit md:normal-case  ${
            delayedNav ? "flex" : "hidden"
          } `}>
          <motion.div variants={itemVariants} className="md:hidden">
            <Image
              src="/logo.webp"
              alt="Logo LenasDev"
              width={100}
              height={100}
            />
          </motion.div>
          {Object.entries(Routes)
            .slice(0, 4)
            .map(([key, value]) => (
              <MenuItem
                key={key}
                href={value}
                text={key}
                handleClick={handleClick}
              />
            ))}
        </motion.ul>
      </motion.div>
      <a
        href="https://wa.link/mvbomi"
        target="__blank"
        className="bg-purple/70 text-black font-semibold py-2 px-5 rounded-full contact-button w-fit relative overflow-hidden text-md
        md:px-6 md:py-2 md:text-xl">
        <span>Hablemos!</span>
      </a>
      <AnimatedHamburgerButton handleClick={handleClick} delayed={delayedNav} />
    </nav>
  );
};
