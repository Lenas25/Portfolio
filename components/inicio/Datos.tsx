// import CountUp from "../reactbits/CountUp";
// import SpotlightCard from "../reactbits/SpotlightCard";

// const data = [
//   {
//     plus: false,
//     title: 1,
//     subtitle: "año",
//     subtitle2: "de experiencia",
//   },
//   {
//     plus: true,
//     title: 15,
//     subtitle: "proyectos",
//   },
//   {
//     plus: true,
//     title: 5,
//     subtitle: "clientes",
//     subtitle2: "satisfechos",
//   },
// ];

// export const Datos = () => {
//   return (
//     <SpotlightCard
//       className="custom-spotlight-card row-start-5 md:row-start-4 md:row-span-1 md:col-span-4 lg:col-span-3 lg:row-span-1 md:col-start-1 lg:row-start-2 lg:col-start-4 bg-gradient-to-tl from-[#d4c6f870] from-[29.18%] to-[#ffffffa1] to-[118.51%] rounded-3xl p-8 flex justify-center items-center"
//       spotlightColor="rgba(255, 218, 250, 0.2)">
//       <div className="flex gap-3 flex-col justify-center md:flex-row w-full xl:gap-5 z-10">
//         {data.map((item, index) => (
//           <div
//             // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
//             key={index}
//             className="bg-purple/20 p-3 rounded-lg text-center md:p-5 flex justify-center items-center flex-col gap-3 md:w-1/2">
//             <h4 className="text-black font-extrabold text-3xl md:text-5xl">
//               {item.plus && "+"}
//               <CountUp
//                 from={0}
//                 to={item.title}
//                 separator=","
//                 direction="up"
//                 duration={1}
//                 className="count-up-text"
//               />
//             </h4>
//             <div>
//               <p className="text-black/60 font-bold text-xl">{item.subtitle}</p>
//               {item.subtitle2 && (
//                 <p className="text-black/60 font-bold text-xl">
//                   {item.subtitle2}
//                 </p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </SpotlightCard>
//   );
// };
