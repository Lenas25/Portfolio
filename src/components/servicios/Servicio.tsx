"use client";

import { useState } from "react";
import { ServicioInfo } from "./ServicioInfo";
import { PiDevices } from "react-icons/pi";
import Image from "next/image";
import serviceImage from "@/../public/servicioimagen.webp";
import { motion } from "framer-motion";

const serviciosInformation = [
  {
    id: 1,
    name: "Aplicaciones Web",
    info: `
    <div>🚀 <strong>Impulsa tu negocio</strong> con una plataforma web robusta y escalable.</div>
    <div>🔹 <strong>Desarrollo a medida</strong>: Creamos soluciones adaptadas a tus necesidades con <strong>Node.js, Python (Django/Flask) o Java (Spring Boot)</strong>.</div>
    <div>💳 <strong>Integraciones avanzadas</strong>: Sistemas de pago, autenticación de usuarios y dashboards interactivos.</div>
    <div>🔒 <strong>Seguridad de nivel empresarial</strong>: Protegemos tu aplicación contra amenazas y optimizamos su rendimiento para una experiencia fluida.</div>
    `,
  },
  {
    id: 2,
    name: "Aplicaciones Móviles",
    info: `
    <div>📱 <strong>Lleva tu idea al siguiente nivel</strong> con una app móvil innovadora.</div>
    <div> ✅ <strong>Apps nativas y multiplataforma</strong> (Android/iOS) con <strong>Flutter y React Native</strong> para maximizar alcance y rendimiento.</div>
    <div>🎨 <strong>Diseño centrado en el usuario (UX/UI)</strong>: Interfaces intuitivas y atractivas que garantizan una experiencia excepcional.</div>
    <div>🔗 <strong>Conectividad total</strong>: Integración con APIs, bases de datos en la nube y sincronización en tiempo real.</div>
    <div>🚀 <strong>Publicación en Google Play y App Store</strong> sin complicaciones.</div>
    `,
  },
  {
    id: 3,
    name: "Páginas Web",
    info: `<div>🌎 <strong>Tu presencia online con un sitio web impactante</strong>.</div>
    <div>💡 <strong>Diseño moderno y responsivo</strong>: Adaptado a todos los dispositivos para atraer más clientes.</div>
    <div>⚡ <strong>Velocidad y optimización SEO</strong>: Posicionamos tu negocio en los primeros resultados de búsqueda.</div>
    <div>🛠️ <strong>Tecnologías de vanguardia</strong>: Desarrollo con <strong>HTML, CSS, JavaScript, React y Vue.js</strong>.</div>
    <div>🔌 <strong>Integraciones personalizadas</strong>: Conexión con bases de datos, CRM, sistemas de pago y más.</div>
    `,
  },
];

export const Servicio = () => {
  const [show, setShow] = useState<number | null>(null);

  const handleShow = (id: number) => {
    if (show === id) {
      setShow(null);
    } else {
      setShow(id);
    }
  };

  return (
    <main className="flex flex-col gap-10 md:gap-20 justify-center w-full py-10 px-5 md:py-20 md:px-10 lg:px-20">
      <div className="container mx-auto text-center text-4xl font-bold uppercase md:text-left md:space-y-5 md:text-6xl">
        <h1>Servicios</h1>{" "}
        <span className="flex gap-2 items-center justify-center flex-wrap md:justify-start">
          <PiDevices className="text-4xl lg:text-7xl text-purple" />
          <div className="h-[2px] w-[10%] bg-white" /> Que Brindo
        </span>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center gap-20 md:justify-center">
        <motion.div
          animate={{ rotate: 5 }}
          whileHover={{ rotate: 3 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            repeatType: "reverse",
            type: "spring",
          }}
          className="flex max-h-[300px] md:max-h-[500px] relative">
          <Image
            src={serviceImage}
            alt="Una laptop y un celular con codigo de programacion en sus pantallas."
            className="object-cover object-center"
            width={500}
            height={500}
          />
          <div className="absolute w-full h-[2px] bg-white -bottom-5 -left-5" />
          <div className="absolute w-[2px] h-full bg-white -left-5 -bottom-5" />
        </motion.div>
        <div className="space-y-7 w-full md:w-1/2">
          {serviciosInformation.map((servicio) => (
            <ServicioInfo
              key={servicio.id}
              {...servicio}
              handleShow={handleShow}
              show={show}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
