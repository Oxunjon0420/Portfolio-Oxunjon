import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub } from "react-icons/si";
import { config } from "@/data/config";
import { FileText } from "lucide-react";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <section id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pt-0 sm:pb-32 md:pl-8 lg:pl-12 xl:pl-16 md:pt-32 lg:pt-40 xl:pt-48"
          )}
        >
          {!isLoading && (
            <>
              <div className="">
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Salom, men
                    <br className="md:hidden" />
                  </p>
                </BlurIn>
                <BlurIn delay={1}>

                      <h1
                        className={cn(
                          "font-thin text-5xl text-transparent text-slate-800 ml-1 text-left",
                          "cursor-default text-edge-outline font-display sm:text-6xl md:text-7xl"
                        )}
                      >
                        OXUNJON
                      </h1>

                </BlurIn>
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start md:mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Backend Developer | Bot Developer
                  </p>
                </BlurIn>
                <BlurIn delay={1.4}>
                  <p
                    className={cn(
                      "md:self-start mt-2 font-thin text-sm text-slate-400 dark:text-zinc-500 ml-3",
                      "cursor-default font-display whitespace-nowrap"
                    )}
                  >
                    Web saytlar va Telegram botlar yarataman
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 md:ml-2 flex flex-col gap-3">
                <div className="md:self-start flex gap-3">
                  <Link href={"#projects"}>
                    <BoxReveal delay={1.8} width="100%">
                      <Button className="flex items-center gap-2 w-full">
                        <p>Loyihalarim</p>
                      </Button>
                    </BoxReveal>
                  </Link>
                   <Link href={"/Sh Oxunjon Resume.pdf"} target="_blank">
                      <BoxReveal delay={1.6} width="100%">
                        <Button className="flex items-center gap-2 w-full">
                          <FileText size={20} />
                          <p>Rezyume</p>
                        </Button>
                      </BoxReveal>
                    </Link>

                    <Link href={"#contact"}>
                      <BoxReveal delay={2} width="100%">
                        <Button
                          variant={"outline"}
                          className="block w-full overflow-hidden bg-white text-black hover:bg-zinc-100"
                        >
                          Bog&apos;lanish
                        </Button>
                      </BoxReveal>
                    </Link>

                    <Link
                      href={config.social.github}
                      target="_blank"
                    >
                      <BoxReveal delay={2.2} width="100%">
                        <Button variant={"outline"} className="bg-white text-black hover:bg-zinc-100">
                          <SiGithub size={24} />
                        </Button>
                      </BoxReveal>
                    </Link>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;
