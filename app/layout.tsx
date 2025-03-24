

import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components";

const redhat = Red_Hat_Display({
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${redhat.className}`}>
        <Sidebar/>
        {children}
      </body>
    </html>
  );
}
