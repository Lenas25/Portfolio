

import Image from "next/image";
import Masonry from "../reactbits/Masonry";
import { proyectos } from "@/data/projects";

export const Proyectos = () => {

  return (
    <main className="pt-20 md:py-20 px-5 md:gap-20 w-full md:px-10">
      <div className="flex gap-2 justify-center items-center mb-5">
        <Image src="/starproject.webp" alt="Estrella de 10 puntas" className="max-w-[30px] sm:max-w-[100px]" />
        <h1 className="text-2xl font-semibold text-center sm:text-5xl">MIS PROYECTOS</h1>
        <Image src="/starproject.webp" alt="Estrella de 10 puntas" className="max-w-[30px] sm:max-w-[100px]"/>
      </div>
      <Masonry data={proyectos} />
    </main>
  );
};

