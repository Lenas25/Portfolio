"use client";

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
        <div>
          <span className="flex gap-5 items-center text-gray text-sm lg:text-lg">
            2025 - Actual{" "}
            <div className="size-3 rounded-full bg-purple">
              <div className="size-3 rounded-full animate-ping bg-purple" />
            </div>
          </span>
          <p className="text-lg mt-2 md:text-2xl text-purple font-bold lg:text-3xl">
            Practicante de Sistemas y TI
          </p>
          <p className="text-gray lg:text-xl">Internet Para Todos S.A.C</p>
          <p className=" mt-2 lg:text-lg">
            Gestioné y soporté infraestructuras tecnológicas, optimizando su
            seguridad y eficiencia. Adquirí experiencia en <b>Azure y Google Cloud</b> para servidores y despliegue de aplicaciones, además de automatizar
            procesos y fortalecer mis habilidades en <b>seguridad, redes y cloud.</b>
          </p>
        </div>
        <div>
          <span className="flex gap-5 items-center text-gray text-sm lg:text-lg">
            2024 - Actual{" "}
            <div className="size-3 rounded-full bg-purple">
              <div className="size-3 rounded-full animate-ping bg-purple" />
            </div>
          </span>
          <p className="text-lg mt-2 md:text-2xl text-purple font-bold lg:text-3xl">
            Freelance
          </p>
          <p className="text-gray lg:text-xl">LenasDev</p>
          <p className="mt-2 lg:text-lg" >
            Diseño y desarrollo <b>landing pages y sistemas web</b> utilizando tanto
            <b>No-Code</b> como código, adaptándome a las necesidades de cada cliente.
            Creo soluciones modernas, funcionales y optimizadas, enfocadas en
            usabilidad y rendimiento. Además, integro herramientas y automatizo
            procesos para mejorar la eficiencia y escalabilidad de los
            proyectos.
          </p>
        </div>
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
        <div>
          <span className="flex gap-5 items-center text-gray text-sm lg:text-lg">
            2021 - Actual{" "}
            <div className="size-3 rounded-full bg-purple">
              <div className="size-3 rounded-full animate-ping bg-purple" />
            </div>
          </span>
          <p className="text-lg mt-2 md:text-2xl text-purple font-bold lg:text-3xl">
            Ingeniería de Software
          </p>
          <p className="text-gray lg:text-xl">Universidad Tecnológica del Perú</p>
          <p className="mt-2 lg:text-lg">
          Actualmente curso el <b>8vo ciclo</b> de Ingeniería de Software, formando parte del <b>décimo superior</b>. Mi formación me ha permitido desarrollar habilidades en <b>Desarrollo Software, Machine Learning y Big Data</b>, aplicando metodologías ágiles y tecnologías innovadoras para crear soluciones eficientes y escalables.
          </p>
        </div>
      </div>
    </section>
  );
};

