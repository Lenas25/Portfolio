import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redhat = Red_Hat_Display({
  variable: "--font-redhat",
  subsets: ["latin"],
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${redhat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
