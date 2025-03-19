
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redhat = Red_Hat_Display({
  variable: "--font-redhat",
  subsets: ["latin"],
});

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
