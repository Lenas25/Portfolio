import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaWordpress,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaAws,
} from "react-icons/fa";
import { FaWebflow } from "react-icons/fa6";
import { LuFigma } from "react-icons/lu";
import {
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiAdobeillustrator,
  SiFramer,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  SiPostman,
  SiJira,
  SiNotion,
  SiAnsible,
  SiGooglecloud,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export const skills = [
  {
    id:1,
    title: "Front End",
    techStack: [
      { title: "HTML", icon: <FaHtml5 /> },
      { title: "CSS", icon: <FaCss3Alt /> },
      { title: "Bootstrap", icon: <FaBootstrap /> },
      { title: "Next JS", icon: <RiNextjsFill /> },
      { title: "Tailwind", icon: <RiTailwindCssFill /> },
      { title: "WebFlow", icon: <FaWebflow /> },
      { title: "Wordpress", icon: <FaWordpress /> },
      { title: "Framer", icon: <SiFramer /> },
      { title: "Figma", icon: <LuFigma /> },
      { title: "Illustrator", icon: <SiAdobeillustrator /> },
    ],
  },
  {
    id:2,
    title: "Back End",
    techStack: [
      { title: "Node.js", icon: <FaNodeJs /> },
      { title: "MongoDB", icon: <SiMongodb /> },
      { title: "Firebase", icon: <SiFirebase /> },
      { title: "MySQL", icon: <SiMysql /> },
      { title: "PostgreSQL", icon: <SiPostgresql /> },
      { title: "Docker", icon: <FaDocker /> },
      { title: "Spring Boot", icon: <SiSpringboot /> },
      { title: "Postman", icon: <SiPostman /> },
    ],
  },
  {
    id:3,
    title: "Aditional",
    techStack: [
      { title: "GitHub", icon: <FaGithub /> },
      { title: "Jira", icon: <SiJira /> },
      { title: "Notion", icon: <SiNotion /> },
      { title: "Azure", icon: <VscAzure /> },
      { title: "Google Cloud", icon: <SiGooglecloud /> },
      { title: "AWS", icon: <FaAws /> },
      { title: "Ansible", icon: <SiAnsible /> },
    ],
  },
];

export const certificates = [
  {
    id: 1,
    title: "Spring Boot",
  },
  {
    id: 2,
    title: "Desarrollo Full Stack",
  },
  {
    id: 3,
    title: "Excel Avanzado",
  },
  {
    id: 4,
    title: "Redes y Enrutamiento",
  },
  {
    id: 5,
    title: "Fundamentos de Scrum",
  },
];

export const softskills = [
  {
    id: 1,
    title: "Comunicación Efectiva",
  },
  {
    id: 2,
    title: "Trabajo en Equipo",
  },
  {
    id: 3,
    title: "Creatividad",
  },
  {
    id: 4,
    title: "Flexibilidad",
  },
  {
    id: 5,
    title: "Resolución de Problemas",
  },
  {
    id: 6,
    title: "Gestión del Tiempo",
  },
  {
    id: 7,
    title: "Liderazgo",
  },
  {
    id:8,
    title: "Pensamiento Crítico",
  }
]