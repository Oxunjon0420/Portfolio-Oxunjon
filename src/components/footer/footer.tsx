import React from "react";
import Link from "next/link";
import { footer } from "./config";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";
import { FaTelegram, FaInstagram, FaPhone } from "react-icons/fa6";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-50 flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row sm:justify-between md:px-6">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © {year} {config.author}. All rights reserved.
      </p>

      <div className="relative z-50 flex items-center gap-2 pointer-events-auto">
        <SocialMediaButtons />

        <a
          href="https://t.me/Oxunjon_4"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-50 p-2 hover:opacity-70 transition-opacity cursor-pointer pointer-events-auto"
        >
          <FaTelegram size={24} className="text-white" />
        </a>

        <a
          href="https://instagram.com/sh.oxunjon"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-50 p-2 hover:opacity-70 transition-opacity cursor-pointer pointer-events-auto"
        >
          <FaInstagram size={24} className="text-white" />
        </a>

        <a
          href="tel:+998974561318"
          className="relative z-50 p-2 hover:opacity-70 transition-opacity cursor-pointer pointer-events-auto"
        >
          <FaPhone size={22} className="text-white" />
        </a>
      </div>

      <nav className="relative z-50 flex gap-4 sm:gap-6">
        {footer.map((link, index) => {
          const { title, href } = link;
          return (
            <Link
              className="text-xs underline-offset-4 hover:underline"
              href={href}
              key={`l_${index}`}
            >
              <Button variant={"link"}>{title}</Button>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;