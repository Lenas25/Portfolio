"use client";

import { educacion } from "@/data/education";
import { experiencias } from "@/data/experiences";
import { motion } from "framer-motion";

export const Experiencia = () => {
  return (
    <section className="grid gap-10 grid-cols-1 md:grid-cols-[1fr_1px_1fr]">
      <div className="space-y-6 rounded-lg">
        <h3 className="uppercase relative w-fit text-purpleLight lg:text-2xl">
          Experiencia
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 left-0 w-full h-[1px] bg-purpleLight"
          />
        </h3>
        {
          experiencias.map((exp, index) => (
            <div key={index}>
              <span className="flex gap-5 items-center text-gray text-sm lg:text-lg">
                {exp.periodo}{" "}
                {exp.actual && (
                  <div className="size-3 rounded-full bg-purple">
                    <div className="size-3 rounded-full animate-ping bg-purple" />
                  </div>
                )}
              </span>
              <p className="text-lg mt-2 md:text-2xl text-purple font-bold lg:text-3xl">
                {exp.puesto}
              </p>
              {exp.empresa && (
                <p className="text-gray lg:text-xl">{exp.empresa}</p>
              )}
              <p className=" mt-2 lg:text-lg">
                {exp.descripcion}
              </p>
            </div>
          ))
        }
      </div>
      <div className="md:h-full md:w-[1px] bg-gray w-full h-[1px] md:flex" />
      <div className="space-y-6 rounded-lg">
        <h3 className="uppercase relative w-fit text-purpleLight lg:text-2xl">
          Educación
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 left-0 w-full h-[1px] bg-purpleLight"
          />
        </h3>
        {
          educacion.map((edu, index) => (
            <div key={index}>
              <span className="flex gap-5 items-center text-gray text-sm lg:text-lg">
                {edu.periodo}{" "}
                {edu.actual && (
                  <div className="size-3 rounded-full bg-purple">
                    <div className="size-3 rounded-full animate-ping bg-purple" />
                  </div>)}
              </span>
              <p className="text-lg mt-2 md:text-2xl text-purple font-bold lg:text-3xl">
                {edu.titulo}
              </p>
              <p className="text-gray lg:text-xl">{edu.institucion}</p>
              <p className=" mt-2 lg:text-lg" dangerouslySetInnerHTML={{ __html: edu.descripcion }} />
            </div>
          ))
        }
      </div>
    </section>
  );
};

