"use client";

import Lottie from "lottie-react";
import type { LottieRefCurrentProps } from "lottie-react";
import Link from "next/link";
import animationData from "@/public/lottiemenu.json";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Routes from "@/constants/routes";
import { usePathname } from "next/navigation";

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

const MenuItem = ({ href, text }: { href: string; text: string }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
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

export const Sidebar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [delayedNav, setDelayedNav] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    // Create the handler function
    const handleResize = () => {
      if (typeof window !== 'undefined' && window.matchMedia("(min-width: 768px)").matches) {
        setOpenNav(true);
        setDelayedNav(true);
      } else {
        setOpenNav(false);
        setDelayedNav(false);
      }
      if (lottieRef.current) {
        lottieRef.current.playSegments([155, 190], true);
      }
    };
  
    // Only run on the client side
    if (typeof window !== 'undefined') {
      // Run once on initial mount
      handleResize();
      
      // Set up the event listener
      window.addEventListener("resize", handleResize);
      
      // Clean up
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const handleClick = () => {
    if (lottieRef.current) {
      if (!openNav) {
        lottieRef.current.playSegments([0, 100], true);
      } else {
        lottieRef.current.playSegments([100, 190], true);
      }
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
     md:flex-wrap md:py-5 lg:justify-between lg:gap-10 lg:px-20">
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
            <Image src="/logo.webp" alt="Logo LenasDev" width={100} height={100} />
          </motion.div>
          {Object.entries(Routes)
            .slice(0, 4)
            .map(([key, value]) => (
              <MenuItem key={key} href={value} text={key} />
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
      <button
        type="button"
        onClick={handleClick}
        className={`size-6 z-50 md:hidden ${
          delayedNav ? "fixed right-5" : "relative"
        }`}>
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          autoplay={false}
          loop={false}
        />
      </button>
    </nav>
  );
};
