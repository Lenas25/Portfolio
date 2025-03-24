"use client";

import { useState } from "react";
import { skills } from "@/data/aboutme";

export const Skills = () => {
  const [activeItem, setActiveItem] = useState(2);

  const handleActiveItem = (id: number) => {
    setActiveItem(id);
  }

  return (
    <div className="my-10 max-w-[900px] mx-auto">
      <ul className="content-center flex gap-5 justify-center flex-wrap mb-10">
        <li className={`text-2xl hover:scale-110 transition duration-300 ${activeItem === 1 && "text-purpleLight scale-110"}`}>
          <button type="button" onClick={()=>{handleActiveItem(1)}}>
          BackEnd
          </button>
        </li>
        <li className={`text-2xl hover:scale-110 transition duration-300 ${activeItem === 2 && "text-purpleLight scale-110"}`}>
          <button type="button" onClick={()=>{handleActiveItem(2)}}>
          FrontEnd
          </button>
        </li>
        <li className={`text-2xl hover:scale-110 transition duration-300 ${activeItem === 3 && "text-purpleLight scale-110"}`}>
          <button type="button" onClick={()=>{handleActiveItem(3)}}>
          Aditional
          </button>
        </li>
      </ul>
      {
        skills.filter((skill) => skill.id === activeItem).map((skill) => (
          <div key={skill.id} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {skill.techStack.map((tech) => (
              <div key={tech.title} className="flex flex-col justify-center gap-5 items-center p-5 rounded-md bg-white/5 hover:scale-105 transition duration-300 ease-in-out relative overflow-hidden group">
                <span className="text-5xl size-10 z-10 relative">{tech.icon}</span>
                <span className="text-xl font-semibold z-10 relative">{tech.title}</span>
                <div className="absolute bg-gradient-to-br from-[#01080f] to-[#37284d] scale-0 z-0 blur-lg rounded-full transition duration-300 ease-in-out size-[90%] group-hover:scale-100" />
              </div>
            ))}
          </div>
        ))
      }
    </div>
  )
}
