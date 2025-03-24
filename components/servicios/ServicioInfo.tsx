"use client";

import s from "./Servicio.module.css";
import { FaChevronRight } from "react-icons/fa";
import { motion,AnimatePresence } from "framer-motion";

interface ServicioInfoProps {
  id: number;
  handleShow: (id: number) => void;
  show: number | null;
  name: string;
  info: string;
}

export const ServicioInfo = ({
  handleShow,
  show,
  name,
  info,
  id,
}: ServicioInfoProps) => {



  return (
    <div className={`${s.servicecard}`}>
      <button
        type="button"
        className={`flex justify-between items-center group w-full text-xl font-semibold text-left md:text-2xl lg:text-4xl hover:text-purple transition duration-300 ease-in-out cursor-pointer ${
          show === id ? "text-purple font-extrabold" : "text-white"
        }`}
        onClick={() => handleShow(id)}>
        {name}{" "}
        <FaChevronRight
          className={`-rotate-[30deg] transition duration-300 ease-in-out group-hover:text-purple group-hover:-translate-x-5 ${
            show === id ? "rotate-90" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {
          show === id && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, hanging: 0, height: "auto" }}
              exit={{ opacity: 0 }}
              className="text-white text-left mt-5">
              {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
<p className="lg:text-xl flex flex-col gap-2" dangerouslySetInnerHTML={{ __html: info }} />
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  );
};

export default ServicioInfo;
