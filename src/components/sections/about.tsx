"use client";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 md:px-16 py-24">
      <BoxReveal width="100%">
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl mb-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20"
          )}
        >
          MEN HAQIMDA
        </h2>
      </BoxReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Chap tomon */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        >
          <p className="text-zinc-300 leading-relaxed text-base mb-6">
            Men Python backend dasturchiman. Asosan web ilovalar va Telegram
            botlar yaratish bilan shug&apos;ullanaman.
          </p>
          <p className="text-zinc-300 leading-relaxed text-base mb-6">
            Zamonaviy texnologiyalar yordamida tezkor, xavfsiz va foydalanuvchi
            uchun qulay tizimlar ishlab chiqishga e&apos;tibor beraman.
          </p>
          <p className="text-zinc-300 leading-relaxed text-base">
            Backend arxitekturasi, API lar va real loyihalar ustida ishlashni
            yaxshi ko&apos;raman. Doimiy ravishda yangi bilimlarni o&apos;rganib,
            o&apos;z ustimda ishlayman.
          </p>
        </motion.div>

        {/* O'ng tomon */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Maqsadim
            </h3>
            <p className="text-zinc-300 leading-relaxed text-base mb-8">
              Kuchli dasturchi bo&apos;lib, real loyihalar orqali katta tajriba
              orttirish va professional darajaga chiqish.
            </p>
          </div>

          {/* Stack pills */}
          <div className="flex flex-wrap gap-3">
            {["Python", "Django", "FastAPI", "PostgreSQL", "Docker", "REST API", "Telegram Bot"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 rounded-full text-sm border border-white/20 text-zinc-300 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;