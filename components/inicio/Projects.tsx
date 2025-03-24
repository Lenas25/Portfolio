import Routes from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";
import SpotlightCard from "../reactbits/SpotlightCard";

export const Projects = () => {
  return (
    <SpotlightCard className="custom-spotlight-card row-start-3 lg:col-span-2 lg:row-span-1 md:row-start-3 md:col-span-2 lg:col-start-3 lg:row-start-3 bg-gradient-to-tl from-[#d4c6f870] from-[29.18%] to-[#ffffffa1] to-[118.51%] rounded-3xl p-8 group relative flex flex-col justify-between gap-5 lg:gap-10" spotlightColor="rgba(255, 218, 250, 0.2)">
      <div className="w-full h-full my-auto max-h-[300px] md:max-w-[300px] container mx-auto bg-gradient-to-tl from-black/50 to-purple/20 overflow-hidden rounded-tl-[70px] rounded-br-[70px] flex justify-center items-center z-10">
        <Image
          src="/projectshome.webp"
          alt="foto de perfil"
          className="w-full object-cover h-full" 
          width={1200}
          height={800}
        />
      </div>
      <div className="flex justify-between items-center gap-5 z-10">
        <div className="text-black space-y-1 lg:w-full">
          <p className="font-semibold text-black/60 md:text-lg lg:text-xl">Tecnologias Empleadas</p>
          <h3 className="font-bold text-xl uppercase md:text-2xl lg:text-3xl">Proyectos</h3>
        </div>
        <div className="w-fit flex absolute right-2 bottom-5 md:relative md:bottom-0 md:right-0">
          <Link
            href={Routes.proyectos}
            className="-rotate-[33deg] size-20 xl:size-24 group-hover:scale-105 group-hover:-rotate-45 transition duration-300 ease-in-out opacity-50 group-hover:opacity-100">
            <Image src="/abrir.webp" alt="Ver proyectos" 
          width={1200}
          height={800} />
          </Link>
        </div>
      </div>
    </SpotlightCard>
  );
};

