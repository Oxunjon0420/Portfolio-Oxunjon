"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
import { FaEnvelope, FaGithub, FaPhone } from "react-icons/fa6";

const CONTACT_ITEMS = [
  {
    name: "Email",
    content: config.email,
    href: `mailto:${config.email}`,
    icon: <FaEnvelope size={20} />,
  },
  {
    name: "GitHub",
    content: "github.com/Oxunjon0420",
    href: config.social.github,
    icon: <FaGithub size={20} />,
  },
  {
    name: "Telefon",
    content: config.phone,
    href: `tel:${config.phone}`,
    icon: <FaPhone size={20} />,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen max-w-7xl mx-auto ">
      <Link href={"#contact"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          BOG&apos;LANISH
        </h2>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999] gap-6 px-4 mt-10 md:mt-20">
        <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl">
          <CardHeader>
            <CardTitle className="text-3xl">Aloqa ma&apos;lumotlari</CardTitle>
            <CardDescription>
              Istalgan savol yoki loyiha bo&apos;yicha murojaat qiling.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-4">
              {CONTACT_ITEMS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.name === "GitHub" ? "_blank" : undefined}
                    rel={item.name === "GitHub" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white/50 dark:bg-zinc-900/50 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-200 group"
                  >
                    <div className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-100 transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                        {item.name}
                      </span>
                      <span className="text-sm text-zinc-700 dark:text-zinc-200 font-medium">
                        {item.content}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};
export default ContactSection;
