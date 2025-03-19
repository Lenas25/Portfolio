import { Aditional, ConoceServicios, Experiencia, FooterType2, Resumen } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LenasDev | Sobre Mí",
  description: "This is a personal website of Lena, a full stack developer and a software engineering student. She is passionate about web development and design. She is currently learning about web development and design.",
};



export default function About() {
  return (
    <div>
      <main className="p-5 md:p-20 space-y-16 xl:space-y-24">
        <Resumen />
        <Experiencia />
        <Aditional />
        <ConoceServicios />
      </main>
      <FooterType2 />
    </div>
  );
}
