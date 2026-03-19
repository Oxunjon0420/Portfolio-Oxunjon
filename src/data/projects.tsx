import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {/* 🌐 Visit Website Button — Green + External Arrow */}
      <Link rel="noopener" target="_blank" href={live} className="flex gap-2">
        <Button
          size="sm"
          className="group bg-green-600 hover:bg-green-700 text-white flex items-center">
          Ko&apos;rish
          <ArrowUpRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Button>
      </Link>

      {/* 🐙 GitHub Button — Dark + Icon + Arrow */}
      {repo && (
        <Link rel="noopener" target="_blank" href={repo} className="flex gap-2">
          <Button
            size="sm"
            className="group bg-gray-800 hover:bg-gray-900 text-white flex items-center">
            <FaGithub className="mr-2 w-5 h-5" />
            Manba kodi
            <ArrowUpRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </Link>
      )}
    </div>
  );
};


export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "tarjimon-sayt",
    category: "Web Ilova",
    title: "Tarjimon Sayt",
    src: "/assets/projects-screenshots/tarjimon.png",
    screenshots: ["/assets/projects-screenshots/tarjimon.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://oxunjon.alwaysdata.net/",
    github: "https://github.com/Oxunjon0420/Tarjimon-sayt",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-lg text-center mb-4">
            Ko&apos;p tilli tarjima web ilovasi
          </TypographyP>
          <TypographyP className="font-mono">
            Matnlarni bir nechta tillarga tarjima qiluvchi web ilova. Foydalanuvchi
            matn kiritadi va bir necha soniya ichida tarjimani oladi. Tez, aniq va
            qulay interfeys orqali ishlaydi.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Asosiy imkoniyatlar</TypographyH3>
          <p className="font-mono mb-2">
            Bir nechta tilni qo&apos;llab-quvvatlaydi, real vaqt tarjimasi,
            tarjima tarixi va foydalanuvchi hisobini boshqarish.
          </p>
          <TypographyH3 className="my-4 mt-8">Texnologiyalar</TypographyH3>
          <p className="font-mono mb-2">
            Backend: Python, Django, REST API. Ma&apos;lumotlar bazasi: PostgreSQL.
            Deploy: Docker konteynerlarda ishga tushirilgan.
          </p>
        </div>
      );
    },
  },
  {
    id: "finance-bot",
    category: "Telegram Bot",
    title: "Finance Bot",
    src: "/assets/projects-screenshots/bot.webp",
    screenshots: ["/assets/projects-screenshots/bot.webp"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://t.me/finance_0420_bot",
    github: "https://github.com/Oxunjon0420/Moliyachi-bot",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-lg text-center mb-4">
            Moliyaviy hisobni boshqarish Telegram boti
          </TypographyP>
          <TypographyP className="font-mono">
            Foydalanuvchilarning daromad va xarajatlarini kuzatib boruvchi Telegram
            bot. Har bir tranzaksiyani kategoriyalar bo&apos;yicha saqlaydi va oylik
            hisobotlarni avtomatik tarzda tayyorlaydi.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Asosiy imkoniyatlar</TypographyH3>
          <p className="font-mono mb-2">
            Daromad va xarajat qo&apos;shish, kategoriyalar bo&apos;yicha
            tasniflash, oylik va haftalik statistika, grafik ko&apos;rinishida
            hisobotlar.
          </p>
          <TypographyH3 className="my-4 mt-8">Texnologiyalar</TypographyH3>
          <p className="font-mono mb-2">
            Python, python-telegram-bot kutubxonasi, SQLAlchemy ORM,
            PostgreSQL ma&apos;lumotlar bazasi.
          </p>
        </div>
      );
    },
  },
  {
    id: "job-tracker",
    category: "Web Ilova",
    title: "Job Tracker",
    src: "/assets/projects-screenshots/job.png",
    screenshots: ["/assets/projects-screenshots/job.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://github.com/Oxunjon0420",
    github: "https://github.com/Oxunjon0420",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-lg text-center mb-4">
            Ish qidirishni boshqarish tizimi
          </TypographyP>
          <TypographyP className="font-mono">
            Ish qidirishni boshqarish uchun yaratilgan web ilova — job application
            tracking system. Har bir murojaat bosqichi, holati va natijalari
            aniq kuzatib boriladi.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Asosiy imkoniyatlar</TypographyH3>
          <p className="font-mono mb-2">
            Murojaatlar ro&apos;yxatini yuritish, holat yangilash (yuborildi,
            ko&apos;rib chiqildi, intervyu, rad etildi), eslatmalar va
            izohlar qo&apos;shish, statistika paneli.
          </p>
          <TypographyH3 className="my-4 mt-8">Texnologiyalar</TypographyH3>
          <p className="font-mono mb-2">
            Backend: Python, FastAPI, SQLAlchemy. Ma&apos;lumotlar bazasi:
            PostgreSQL. Konteynerizatsiya: Docker Compose.
          </p>
        </div>
      );
    },
  },
];
export default projects;
