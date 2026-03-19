import React from "react";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaPhone } from "react-icons/fa6";

function Page() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md w-full">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-zinc-200">
          Bog&apos;lanish
        </h2>
        <p className="mb-10 text-center text-zinc-400 text-sm">
          Istalgan savol yoki loyiha bo&apos;yicha murojaat qiling
        </p>
        <div className="flex flex-col gap-4">
          <a
            href="mailto:oxunjon0405@gmail.com"
            className="flex items-center gap-4 px-6 py-4 rounded-xl border border-zinc-700 bg-zinc-900/60 hover:border-zinc-500 transition-all duration-200 group"
          >
            <FaEnvelope size={22} className="text-zinc-400 group-hover:text-white transition-colors" />
            <div className="flex flex-col">
              <span className="text-xs text-zinc-500 uppercase tracking-wider">Email</span>
              <span className="text-zinc-200 font-medium">oxunjon0405@gmail.com</span>
            </div>
          </a>
          <a
            href="https://github.com/Oxunjon0420"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-4 rounded-xl border border-zinc-700 bg-zinc-900/60 hover:border-zinc-500 transition-all duration-200 group"
          >
            <FaGithub size={22} className="text-zinc-400 group-hover:text-white transition-colors" />
            <div className="flex flex-col">
              <span className="text-xs text-zinc-500 uppercase tracking-wider">GitHub</span>
              <span className="text-zinc-200 font-medium">github.com/Oxunjon0420</span>
            </div>
          </a>
          <a
            href="tel:+998974561318"
            className="flex items-center gap-4 px-6 py-4 rounded-xl border border-zinc-700 bg-zinc-900/60 hover:border-zinc-500 transition-all duration-200 group"
          >
            <FaPhone size={22} className="text-zinc-400 group-hover:text-white transition-colors" />
            <div className="flex flex-col">
              <span className="text-xs text-zinc-500 uppercase tracking-wider">Telefon</span>
              <span className="text-zinc-200 font-medium">+998 97 456 13 18</span>
            </div>
          </a>
        </div>
        <div className="mt-10 text-center">
          <Link href="/" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
            ← Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Page;
