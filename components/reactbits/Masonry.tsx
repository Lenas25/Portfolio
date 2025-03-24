"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import ver from "@/assets/abrir.webp";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface MasonryItem {
  id: string | number;
  title: string;
  category: string;
  height: number;
  image: string;
  technology: string[];
  description: string;
  link: string;
}

interface GridItem extends MasonryItem {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface MasonryProps {
  data: MasonryItem[];
}

function Masonry({ data }: MasonryProps) {
  const [columns, setColumns] = useState<number>(2);

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia("(min-width: 1500px)").matches) {
        setColumns(3);
      } else if (window.matchMedia("(min-width: 1000px)").matches) {
        setColumns(2);
      } else if (window.matchMedia("(min-width: 600px)").matches) {
        setColumns(2);
      } else {
        setColumns(1); // Mobile devices
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [heights, gridItems] = useMemo<[number[], GridItem[]]>(() => {
    const heights = new Array(columns).fill(0);
    const gridItems = data.map((child) => {
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      heights[column] += child.height / 2;
      const y = heights[column] - child.height / 2;
      return {
        ...child,
        x,
        y,
        width: width / columns,
        height: child.height / 2,
      };
    });
    return [heights, gridItems];
  }, [columns, data, width]);

  return (
    <div
      ref={ref}
      className="relative w-full h-full"
      style={{ height: Math.max(...heights) }}>
      <AnimatePresence>
        {gridItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ x: item.x, y: item.y, width: item.width, height: item.height, opacity: 0 }}
            animate={{ x: item.x, y: item.y, width: item.width, height: item.height, opacity: 1 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="absolute p-[15px] [will-change:transform,width,height,opacity] rounded-lg flex flex-col justify-between group"
          >
            <div
              className="flex-initial relative w-full h-full overflow-hidden uppercase text-[10px] leading-[10px] rounded-xl shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] group-hover:scale-110 transition duration-300 ease"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="flex justify-between items-center mt-4 flex-1">
              <div>
                <span className="text-gray text-md">{item.category}</span>
                <h4 className="text-xl md:text-3xl">{item.title}</h4>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.link}
                className="-rotate-[33deg] size-16 md:size-28 group-hover:scale-105 group-hover:rotate-45 transition duration-300 ease-in-out opacity-50 group-hover:opacity-100"
              >
                <Image
                  src={ver}
                  alt="Estrella en un circulo con link para ver mas proyectos"
                  width={1200}
                  height={800}
                  className="max-w-[100px]"
                />
              </a>
            </div>
            <div className="flex gap-2 flex-wrap mb-5">
              {item.technology.map((tech, index) => (
                <span
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={index}
                  className="bg-purpleLight font-semibold text-black p-2 rounded-xl hover:scale-110 transition duration-300 ease hover:bg-purple"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Masonry;
