import Image from "next/image";
import Link from "next/link";
import Routes from "@/constants/routes";
import SpotlightCard from "../reactbits/SpotlightCard";

export const Presentacion = () => {
  return (
    <SpotlightCard
      className="custom-spotlight-card md:col-span-4 lg:col-span-3 lg:row-span-2 bg-gradient-to-tl from-[#d4c6f870] from-[29.18%] to-[#ffffffa1] to-[118.51%] rounded-3xl p-8 group relative flex flex-col justify-between gap-5 lg:gap-10 md:flex-row lg:flex-col xl:flex-row"
      spotlightColor="rgba(255, 218, 250, 0.2)">
      <div className="w-full h-full my-auto max-h-[300px] md:max-w-[300px] container mx-auto bg-gradient-to-br from-black/50 to-purple/20 overflow-hidden rounded-tl-[70px] rounded-br-[70px] z-10">
        <Image
          src="/profile.webp"
          alt="foto de perfil"
          className="w-full object-cover h-full"
          width={1200}
          height={800}
        />
      </div>
      <div className="flex flex-col justify-center items-center z-10">
        <div className="text-black space-y-2">
          <h3 className="font-semibold lg:text-2xl">A WEB DEVELOPER</h3>
          <h1 className="text-3xl font-semibold md:text-7xl">Elena Suarez.</h1>
          <p className="text-md pr-12 md:pr-0 lg:text-xl md:text-lg">
            Soy una desarolladora web en Lima, Perú.{" "}
            <b>¡Nunca dejes de crear, aprender y mejorar!</b>
          </p>
        </div>
        <div className="w-full flex justify-end absolute right-2 bottom-5 md:relative md:bottom-0 md:right-0">
          <Link
            href={Routes["sobre mi"]}
            className="-rotate-[33deg] size-20 group-hover:scale-105 group-hover:-rotate-45 transition duration-300 ease-in-out opacity-50 group-hover:opacity-100">
            <Image src="/abrir.webp" alt="Ver servicios" width={1200} height={800} />
          </Link>
        </div>
      </div>
    </SpotlightCard>
  );
};
