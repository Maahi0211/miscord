"use client";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import LinearGradient from "@/components/magicui/linear-gradient";
import RetroGrid from "@/components/magicui/retro-grid";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedListDemo from "./animatedlist-demo/page";
import GlobePage from "./globe-section/page";

export default function IndexPage() {
  return (
    <section className="container mx-auto mt-20 grid items-center justify-center gap-6 pb-8 pt-6 md:py-10">

      {/* Hero Section */}
      <div className="retro-theme relative flex max-w-[980px] flex-col items-center gap-6">

        {/* Shiny Text with Arrow for Introduction */}
        <div
          className={cn(
            "group z-10 rounded-full border border-gray-200 bg-gray-200 text-sm transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
          )}
        >
          <AnimatedShinyText className="z-10 inline-flex items-center justify-center px-4 py-1 text-neutral-600 transition ease-out hover:text-black hover:duration-300 hover:dark:text-black">
            <span>🎧 {" "}Introducing Miscord</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>

        {/* Main Heading */}
        <h1 className="font-pixel text-accent-foreground z-10 text-center text-3xl font-bold leading-tight tracking-wider sm:text-3xl md:text-4xl lg:text-5xl">
          A Next-Gen Communication Platform for Teams
        </h1>

        {/* Description Text */}
        <p className="text-accent-foreground z-10 max-w-[700px] text-center text-lg sm:text-xl">
          Share your moments with your friends, either in a group or one-on-one.
        </p>
      </div>

      {/* Retro Grid */}
      <RetroGrid className="absolute inset-0 z-0 max-w-[1000]" />
      {/* Call to Action Links */}
      <div className="flex justify-center gap-4">
        <Link
          href="#get-started"
          className={buttonVariants()}
        >
          Get Started
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
      <div className="flex justify-center gap-4">
        <GlobePage />
        <AnimatedListDemo />
      </div>
    </section>
  );
}
