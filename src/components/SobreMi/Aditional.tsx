"use client";

import { useState } from "react";
import { LuBoxes } from "react-icons/lu";
import { PiMedalMilitary } from "react-icons/pi";
import { Certificates } from "./Certificates";
import { Skills } from "./Skills";

export const Aditional = () => {
  const [activeItem, setActiveItem] = useState(1);

  const items = [
    {
      id: 1,
      title: "Certificados",
      icon: <PiMedalMilitary className="text-3xl" />
    },
    {
      id: 2,
      title: "Tech Stack",
      icon: <LuBoxes className="text-3xl" />
    },
  ];

  const changeActiveItem = (id: number) => {
    setActiveItem(id);
  }

  return (
    <section>
      <div className="border border-gray bg-gradient-to-br from-[#01080F] to-[#37284d] gap-5 rounded-xl flex flex-col p-5 md:flex-row md:max-w-[800px] md:mx-auto">
        {items.map((item) => (
          <button type="button"
            key={item.id}
            onClick={() => changeActiveItem(item.id)}
            className={`px-4 rounded-xl w-full flex flex-col gap-2 justify-center sm:text-xl items-center backdrop-blur-sm font-semibold text-white transition duration-300 group hover:-translate-y-1 md:text-2xl py-5 focus:bg-white/30  ${
              activeItem === item.id
                ? "bg-white/10"
                : "hover:bg-white/5"
            }`}>
              <span className="flex justify-center transition duration-300 ease-in-out group-hover:rotate-6">{item.icon}</span>  
            {item.title}
          </button>
        ))}
      </div>
      {
          activeItem === 1 ? (
            <Certificates />
          ) : (
            <div>
             <Skills />
            </div>
          )
        }
    </section>
  );
};
