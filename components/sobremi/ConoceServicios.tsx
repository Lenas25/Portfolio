// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import Routes from "@/constants/routes";
// import SpotlightCard from "../reactbits/SpotlightCard";

// export const StarComponent = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 1080 1080"
//       className="size-full text-white">
//       <title>Y2k Icon</title>
//       <path
//         className="cls-1"
//         d="M629.06,702.55c-117.81,0-140.72,22.91-140.72,140.72,0-117.81-22.91-140.72-140.72-140.72,86.36,0,121.73-12.31,134.45-65.29,4.64-19.29,6.27-366.25,6.27-397.7,0,30.92,1.58,377.59,6,396.74C506.91,690.09,542.18,702.55,629.06,702.55Z"
//         fill="currentColor"
//       />
//       <path
//         className="cls-1"
//         d="M732.38,539.1c-76.94,0-91.9,15-91.9,91.9,0-76.94-15-91.9-91.9-91.9,56.4,0,79.49-8,87.8-42.64,3-12.6,4.1-239.19,4.1-259.73,0,20.19,1,246.59,3.94,259.1C652.6,531,675.64,539.1,732.38,539.1Z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// };

// export const ConoceServicios = () => {
//   return (
//     <SpotlightCard className="custom-spotlight-card bg-gradient-to-tl from-[#37284d] from-[29.18%] to-[#000000a1] to-[118.51%] rounded-xl p-5 md:p-10 relative overflow-hidden group max-w-[800px] mx-auto" spotlightColor="rgba(255, 218, 250, 0.2)">
//       <div className="absolute -top-28 -left-20 size-72 group-hover:translate-y-2 transition duration-300 ease-in-out z-10">
//         <StarComponent />
//       </div>
//       <div className="flex flex-wrap items-center justify-center mt-28 md:flex-nowrap z-10">
//         <h4 className="text-white/55 text-4xl font-medium text-center md:text-left md:flex md:flex-col md:gap-5 md:text-5xl md:w-full">
//           Visualiza Nuestros{" "}
//           <span className="text-white uppercase font-bold">Servicios.</span>
//         </h4>
//         <div className="w-full flex justify-end md:w-fit">
//           <Link
//             href={Routes.servicios}
//             className="-rotate-[33deg] size-16 md:size-28 group-hover:scale-105 group-hover:-rotate-45 transition duration-300 ease-in-out opacity-50 group-hover:opacity-100">
//             <Image src="/abrir.webp" alt="Ver servicios" width={1200} height={800} />
//           </Link>
//         </div>
//       </div>
//     </SpotlightCard>
//   );
// };
