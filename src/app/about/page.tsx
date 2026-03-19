"use client";
import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaPhone,
  FaPython,
  FaDocker,
  FaGit,
} from "react-icons/fa6";
import { SiDjango, SiFastapi, SiPostgresql, SiSqlalchemy } from "react-icons/si";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "oxunjon0405@gmail.com",
    href: "mailto:oxunjon0405@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Telefon",
    content: "+998974561318",
    href: "tel:+998974561318",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Oxunjon0420",
    content: "/Oxunjon0420",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "Python",
    content: "Backend dasturlashning eng kuchli tili",
    icon: <FaPython size={"50px"} color={"#3776aa"} />,
    color: "#3776aa",
  },
  {
    name: "Django",
    content: "Python uchun mashhur web framework",
    icon: <SiDjango size={"50px"} color={"#092e20"} />,
    color: "#092e20",
  },
  {
    name: "FastAPI",
    content: "Tezkor zamonaviy API framework",
    icon: <SiFastapi size={"50px"} color={"#009688"} />,
    color: "#009688",
  },
  {
    name: "PostgreSQL",
    content: "Kuchli relatsion ma'lumotlar bazasi",
    icon: <SiPostgresql size={"50px"} color={"#336791"} />,
    color: "#336791",
  },
  {
    name: "SQLAlchemy",
    content: "Python ORM va SQL toolkit",
    icon: <SiSqlalchemy size={"50px"} color={"#d71f00"} />,
    color: "#d71f00",
  },
  {
    name: "Docker",
    content: "Konteynerizatsiya platformasi",
    icon: <FaDocker size={"50px"} color={"#2496ed"} />,
    color: "#2496ed",
  },
  {
    name: "Git",
    content: "Versiyalarni boshqarish tizimi",
    icon: <FaGit size={"50px"} color={"#f05032"} />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "Kod omborlari va hamkorlik",
    icon: <FaGithub size={"50px"} color={"#fff"} />,
    color: "#000000",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square bg-zinc-800"
                  alt="Oxunjon Shixnazarov"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Oxunjon Shixnazarov</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Python Backend Dasturchi
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md"
                      href={link.href}
                      target={link.name === "GitHub" ? "_blank" : undefined}
                      rel={link.name === "GitHub" ? "noopener noreferrer" : undefined}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">{link.content}</div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10">Men haqimda</h1>
            <p className="mb-6 text-roboto leading-relaxed">
              Oxunjon Shixnazarov — Python backend dasturchi bo&apos;lib, web ilovalar va
              Telegram botlar yaratishga ixtisoslashgan. U zamonaviy texnologiyalar
              yordamida tezkor, xavfsiz va foydalanuvchi uchun qulay tizimlar ishlab
              chiqadi.
            </p>
            <p className="mb-6 leading-relaxed">
              Asosiy e&apos;tiborini backend arxitekturasi, API lar va real loyihalar
              ustida ishlashga qaratadi. Doimiy ravishda o&apos;z ustida ishlaydi va yangi
              texnologiyalarni o&apos;rganib boradi.
            </p>
            <p className="mb-10 leading-relaxed">
              Maqsadi — kuchli dasturchi sifatida real loyihalar orqali tajriba
              orttirish va professional darajaga chiqish.
            </p>

            <h1 className="text-3xl mb-10">Foydalanadigan texnologiyalar</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="Backend texnologiyalar"
                >
                  {TOOLS.map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
