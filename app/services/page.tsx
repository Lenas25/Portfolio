import { FooterType2, Servicio } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LenasDev | Servicios",
  description: "This is a personal website of Lena, a full stack developer and a software engineering student. She is passionate about web development and design. She is currently learning about web development and design.",
  keywords: ["web development", "design", "full stack", "developer", "software engineering", "student", "web development and design", "servicios", "hacer paginas web", "paginas web para empresas", "paginas web para negocios", "paginas web para emprendedores", "sistemas web", "ERP", "CRM"],
};


export default function Services() {
  return (
    <div>
      <Servicio />
      <FooterType2 />
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="absolute top-0 -z-10 h-full w-full bg-black">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-purpleText opacity-50 blur-[80px]" />
          <div className="absolute bottom-auto left-0 right-auto top-0 h-[500px] w-[500px] translate-x-[30%] translate-y-[50%] rounded-full bg-purpleText opacity-50 blur-[80px]" />
        </div>
      </div>
    </div>
  );
}