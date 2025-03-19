import { ContactoCard } from "..";
import { Datos } from "./Datos";
import { Presentacion } from "./Presentacion";
import { Projects } from "./Projects";
import { RandomText } from "./RandomText";
import { Servicios } from "./Servicios";


export const Inicio = () => {
  return (
    <main className="grid auto-rows-min md:grid-cols-4 lg:grid-cols-6 gap-4 p-5 md:py-20 md:px-10 xl:px-30">
      <Presentacion />
      <Datos />
      <ContactoCard />
      <Servicios />
      <Projects />
      <RandomText />
    </main>
  );
};
