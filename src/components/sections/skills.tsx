import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const SKILLS = [
  { name: "Python", color: "#3776aa" },
  { name: "FastAPI", color: "#009688" },
  { name: "Django", color: "#44b78b" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Docker", color: "#2496ed" },
  { name: "Git", color: "#f1502f" },
  { name: "REST API", color: "#ff6b35" },
  { name: "Telegram Bot", color: "#0088cc" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full h-screen md:h-[150dvh]">
      <div className="top-[70px] sticky mb-96">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
              )}
            >
              KO&apos;NIKMALAR
            </h2>
          </BoxReveal>
        </Link>

        {/* Skill tugmalar */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 px-6 max-w-3xl mx-auto">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              viewport={{ once: true }}
            >
              <span
                className="px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 cursor-default"
                style={{
                  borderColor: skill.color + "60",
                  color: skill.color,
                  backgroundColor: skill.color + "15",
                }}
              >
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;