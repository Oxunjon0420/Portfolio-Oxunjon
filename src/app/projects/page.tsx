"use client";
import React from "react";
import Link from "next/link";
import projects from "@/data/projects";

function Page() {
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[150px] text-zinc-300 min-h-screen pt-24 pb-16">
      <h1 className="text-4xl mb-2">Loyihalar</h1>
      <p className="text-zinc-500 text-sm mb-12">Backend va Telegram bot loyihalari</p>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <li
            key={project.id}
            className="border-[.5px] rounded-xl border-zinc-600 overflow-hidden hover:border-zinc-400 transition-all duration-300 group"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <div className="h-[160px] bg-zinc-900 flex items-center justify-center">
              <span className="text-5xl">
                {project.category === "Telegram Bot" ? "🤖" : "🌐"}
              </span>
            </div>
            <div className="p-5">
              <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full mb-3">
                {project.category}
              </div>
              <h2 className="text-xl font-medium mb-2 group-hover:text-white transition-colors">
                {project.title}
              </h2>
              <div className="mt-4 flex gap-3">
                <a
                  href={project.github || project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-500 transition-all"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-12 text-center">
        <Link href="/" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
          ← Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
}

export default Page;
