import type { Metadata } from "next";
import { Contacto, FooterType2 } from "@/components";

export const metadata: Metadata = {
  title: "LenasDev | Contacto",
  description:
    "This is a personal website of Lena, a full stack developer and a software engineering student. She is passionate about web development and design. She is currently learning about web development and design.",
};


export default function Contact() {
  return (
    <div>
      <Contacto />
      <FooterType2 isConect={true} />
    </div>
  );
}
