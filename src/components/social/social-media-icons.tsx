"use client";

import React from "react";
import { SiGithub } from "react-icons/si";
import { config } from "@/data/config";

const SocialMediaButtons = () => {
  return (
    <div className="z-10 flex gap-2">
      <a
        href={config.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 hover:opacity-70 transition-opacity"
      >
        <SiGithub size={24} className="text-slate-900 dark:text-white" />
      </a>
    </div>
  );
};

export default SocialMediaButtons;
