import { FooterType1, Inicio } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LenasDev | Full Stack Developer",
  description:
    "This is a personal website of Lena, a full stack developer and a software engineering student. She is passionate about web development and design. She is currently learning about web development and design.",
  keywords: [
    "web development",
    "design",
    "full stack",
    "developer",
    "software engineering",
    "student",
    "web development and design",
    "servicios",
    "hacer paginas web",
    "paginas web para empresas",
    "paginas web para negocios",
    "paginas web para emprendedores",
    "sistemas web",
    "ERP",
    "CRM",
  ],
};

export default function Home() {
  return (
    <div className="overflow-x-hidden h-full">
      <Inicio />
      <FooterType1 />
    </div>
  );
}
