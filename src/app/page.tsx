import { FooterType1, Inicio } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LenasDev | Inicio",
  description: "This is a personal website of Lena, a full stack developer and a software engineering student. She is passionate about web development and design. She is currently learning about web development and design.",
};

export default function Home() {
  return (
    <div className="overflow-x-hidden h-full">
      <Inicio />
      <FooterType1 />
    </div>
  );
}
