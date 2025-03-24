import { FooterType2, Proyectos } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LenasDev | Proyectos",
  description: "This is a personal website of Lena, a full stack developer and a software engineering student. She is passionate about web development and design. She is currently learning about web development and design.",
  keywords: ["web development", "design", "full stack", "developer", "software engineering", "student", "web development and design", "servicios", "hacer paginas web", "paginas web para empresas", "paginas web para negocios", "paginas web para emprendedores", "sistemas web", "ERP", "CRM"],
};



export default function Projects() {
  return (
    <div>
      <Proyectos />
      <FooterType2 />
    </div>
  );
}
