import { certificates } from "@/data/aboutme";
import Image from "next/image";
import { MdOpenInNew } from "react-icons/md";

export const Certificates = () => {
  return (
    <div className="my-10 max-w-[1200px] mx-auto">
      <div className="my-10 grid auto-rows-[300px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="flex flex-col items-center gap-2 h-full relative rounded-md overflow-hidden group w-full bg-gradient-to-br from-[#01080f] to-[#37284d] p-2 transition duration-300 ease-in-out hover:-translate-y-2">
            <div className="w-full h-full relative group-hover:bg-black transition duration-300 ease-in-out">
              <Image
                src={`/certificates/Certificado${certificate.id}.webp`}
                alt={certificate.title}
                className="size-full rounded-md object-cover bg-black"
                width={2000}
                height={2000}
              />
            </div>
            <h3 className="content-center h-full text-2xl font-extrabold uppercase text-white absolute translate-y-80 group-hover:translate-y-0 transition duration-300 ease-in-out inset-0 group-hover:bg-black/40 backdrop-blur-[1px] text-center">
              {certificate.title}
            </h3>
          </div>
        ))}
      </div>
      <a
        href="https://www.linkedin.com/in/elena-suarez-paredes/"
        target="_blank"
        rel="noopener noreferrer" className="text-center text-white bg-gradient-to-br from-[#01080f] to-[#37284d]  px-6 py-3 rounded-md text-2xl font-semibold group flex gap-3 flex-wrap items-center justify-center w-fit transition duration-300 ease-in-out">
        Ver Más <MdOpenInNew className="group-hover:rotate-45 transition ease-in-out duration-300 text-3xl"/>
      </a>
    </div>
  );
};
