import Routes from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import SpotlightCard from "../reactbits/SpotlightCard";

export const Servicios = () => {
  return (
    <SpotlightCard
      className="custom-spotlight-card md:row-span-1 md:col-span-2 lg:col-span-2 lg:row-span-1 md:col-start-1 md:row-start-3 lg:col-start-1 lg:row-start-3 bg-gradient-to-tl from-[#d4c6f870] from-[29.18%] to-[#ffffffa1] to-[118.51%] rounded-3xl p-8 group relative flex flex-col justify-between gap-5 lg:gap-10"
      spotlightColor="rgba(255, 218, 250, 0.2)">
      <div className="w-full h-full my-auto max-h-[200px] md:max-w-[300px] container mx-auto bg-gradient-to-br from-black/50 to-purple/20 overflow-hidden rounded-tl-[70px] rounded-br-[70px] md:max-h-[170px] flex justify-center items-center z-10">
        <Image
          src="/servicioshome.webp" 
          width={500}
          height={500}
          priority
          alt="foto de perfil"
          className="w-full object-cover h-full"
        />
      </div>
      <div className="flex justify-between items-center gap-5 z-10">
        <div className="text-black space-y-1 lg:w-full">
          <p className="font-semibold text-black/60 md:text-lg lg:text-xl">
            Desarollo e Innovación
          </p>
          <h3 className="font-bold text-xl uppercase md:text-2xl lg:text-3xl">
            Servicios
          </h3>
        </div>
        <div className="w-fit flex absolute right-2 bottom-5 md:relative md:bottom-0 md:right-0">
          <Link
            href={Routes.servicios}
            className="-rotate-[33deg] size-20 xl:size-24 group-hover:scale-105 group-hover:-rotate-45 transition duration-300 ease-in-out opacity-50 group-hover:opacity-100">
            <Image src="/abrir.webp" alt="Ver proyectos" 
          width={500}
          height={500}
          priority />
          </Link>
        </div>
      </div>
    </SpotlightCard>
  );
};
