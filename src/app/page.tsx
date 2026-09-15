import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDownIcon, LinkIcon } from "lucide-react";
import { ProjectsCards } from "@/components/Projects/ProjectsCards";
import { SectionAbout } from "@/components/Section/SectionAbout";
import { HackathonsCards } from "@/components/Hackathons/HackathonsCards";
export default function HomePage() {
  return (
    <>
      <header className="flex min-h-screen items-center justify-center bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,1)),url('/img/bg.webp')] bg-cover bg-top bg-no-repeat px-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <picture>
            <img
              src="/img/me.webp"
              alt="Lehuy Hoang"
              className="size-44 rounded-full border-4 shadow-lg"
            />
          </picture>
          <h1 className="motion-preset-shrink font-serif text-5xl tracking-widest md:text-6xl">
            LeHuy Hoang
          </h1>
          <p className="motion-preset-slide-right text-lg motion-delay-700">
            I build full stack web applications for fun ❤️
          </p>
          <aside className="flex gap-4">
            <Link
              href="#projects"
              className="rounded-xl bg-sky-500 px-12 py-2 font-serif text-white transition-colors hover:bg-sky-400"
            >
              Projects
            </Link>
            <Link
              target="_blank"
              href="/Lehuy_Hoang_Resume.pdf"
              className="rounded-xl bg-slate-400 px-12 py-2 font-serif text-white transition-all hover:brightness-110">
              Resume
            </Link>

          </aside>
          <aside className="pt-6 text-center">
            <a
              href="#about"
              className="inline-block animate-bounce text-gray-700"
            >
              <ChevronDownIcon />
            </a>
          </aside>
        </div>
      </header>
      <main>
        <SectionAbout />
        <section
          id="projects"
          className="mx-auto grid py-4 text-center md:min-h-screen"
          style={{
            gridTemplateRows: "auto 1fr",
          }}
        >
          <h1 className="py-6 font-serif text-5xl md:py-12">Projects</h1>
          <ProjectsCards />
        </section>
        <section id="hackathons" className="py-12 text-center">
          <h1 className="pt-6 font-serif text-5xl md:pt-12">Hackathons</h1>

          <HackathonsCards />
        </section>
      </main>
    </>
  );
}
