"use client";

import Image from "next/image";
import Routes from "@/constants/routes";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { SiPolestar } from "react-icons/si";
import RotatingText from "@/components/reactbits/RotatingText";
import { softskills } from "@/data/aboutme";

export const Resumen = () => {
  return (
    <section className="flex gap-10 flex-col xl:flex-row justify-center items-center w-full">
      <div className="w-full flex justify-center max-w-[600px] ">
        <Image
          src="/profileIA.webp"
          alt="Foto de Perfil hecho con IA"
          className="object-cover" 
          width={1200}
          height={800}
        />
      </div>
      <div className="flex gap-5 justify-center flex-col items-center text-center xl:text-right xl:justify-end xl:max-w-[800px] w-full">
        <h1 className="uppercase text-3xl flex gap-2 items-center flex-wrap justify-center lg:text-5xl font-bold">
          <SiPolestar />
          SELF-SUMMARY
          <SiPolestar />
        </h1>
        <div className="flex gap-3 items-center justify-center flex-col xl:justify-end">
          <h3 className="text-2xl font-semibold my-3 xl:text-right w-full lg:text-3xl flex items-center justify-center xl:justify-end gap-2 flex-wrap">
            Elena Suarez |
            <span>
              <RotatingText
                texts={[
                  " Software Engineering",
                  " Full Stack Developer",
                  " Tech Enthusiast",
                  " Design",
                ]}
                mainClassName="text-purple"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
          </h3>
          <p className="md:text-xl xl:text-2xl">
            Soy una apasionada del <b>desarrollo y el diseño</b>, transformando
            ideas en soluciones tecnológicas eficientes y visualmente
            impactantes. Me encanta <b>crear aplicaciones dinámicas</b>, seguras
            y optimizadas, explorando nuevas herramientas.{" "}
            <b>¡Nunca dejes de crear, aprender y mejorar!</b>
          </p>
          <div className="flex flex-wrap gap-2 justify-center xl:justify-end">
            {softskills.map((skill) => (
              <span
                key={skill.id}
                className="bg-purpleLight font-semibold text-black p-2 rounded-xl hover:scale-110 transition duration-300 ease hover:bg-purple">
                {skill.title}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-5 items-center justify-center flex-wrap w-full xl:justify-end">
          <a
            href="https://drive.google.com/file/d/1UrZ3UFCLuRn3V2YcrJ1BpX5YDPBz4SPk/view?usp=sharing"
            className="flex gap-2 items-center bg-purpleText rounded-md py-2 px-5 w-full md:w-auto justify-center transition duration-300 hover:bg-[#37284d79] md:text-xl lg:py-3 lg:px-10">
            <TbFileCv className="md:text-2xl" />
            Descargar CV
          </a>
          <Link
            href={Routes.proyectos}
            className="flex gap-2 items-center border border-purpleLight rounded-md py-2 px-5 w-full md:w-auto justify-center transition duration-300 hover:bg-[#5a5a5a17] md:text-xl lg:py-3 lg:px-10">
            <FaCode className="md:text-2xl" />
            Ver Proyectos
          </Link>
        </div>
      </div>
    </section>
  );
};