import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDownIcon, LinkIcon } from "lucide-react";
import { ProjectsCards } from "@/components/Projects/ProjectsCards";
import { SectionAbout } from "@/components/Section/SectionAbout";
import { HackathonsCards } from "@/components/Hackathons/HackathonsCards";
export default function HomePage() {
  return (<>
    <header className="flex items-center justify-center min-h-screen bg-cover bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,1)),url('/img/bg.webp')] bg-top bg-no-repeat px-8">
      <div className="flex justify-center items-center text-center flex-col gap-4">
        <picture>
          <img src="/img/me.jpg" alt="A picture of me :)" className="rounded-full size-44 border-4 shadow-lg" />
        </picture>
        <h1 className="md:text-6xl text-5xl tracking-widest font-serif motion-preset-shrink">
          LeHuy Hoang
        </h1>
        <p className="text-lg motion-preset-slide-right motion-delay-700 ">
          I build full stack web applications for fun ❤️
        </p>
        <aside className="flex gap-4">
          <Link href="#projects" className="bg-sky-500 hover:bg-sky-400 transition-colors px-12 py-2 rounded-xl text-white font-serif">
            Projects
          </Link>
          <Popover>
            <PopoverContent className="flex flex-col gap-2">
              <p>
                <Link className="text-sky-600 hover:border-sky-400 border-b-2 border-transparent inline-block" target="_blank" href="/general/Lehuy_Hoang_Resume.pdf">
                  <LinkIcon className="size-4 inline-block align-middle" /> General Resume
                </Link>
              </p>
              <p>
                <Link className="text-sky-600 hover:border-sky-400 border-b-2 border-transparent items-center gap-1" target="_blank" href="/Lehuy_Hoang_Resume.pdf">
                  <LinkIcon className="size-4 inline-block align-middle" /> Web Developer Resume
                </Link>
              </p>
            </PopoverContent>
            <PopoverTrigger className="bg-slate-400 hover:brightness-110 transition-all px-12 py-2 rounded-xl text-white font-serif">
              Resume
            </PopoverTrigger>
          </Popover>
        </aside>
        <aside className="text-center pt-6">
          <a href="#about" className="animate-bounce inline-block text-gray-700">
            <ChevronDownIcon/>
          </a>
        </aside>
      </div>
    </header>
    <main>
      <SectionAbout/>
      <section id="projects" className="min-h-screen grid mx-auto text-center py-4" style={{
        gridTemplateRows: "auto 1fr"
      }}>
        <h1 className="font-serif text-5xl md:py-12 py-6">
          Projects
        </h1>
        <ProjectsCards />
      </section>
      <section id="hackathons" className="text-center py-12">
        <h1 className="font-serif text-5xl md:pt-12 pt-6">
          Hackathons
        </h1>
        
        <HackathonsCards />
      </section>
    </main>
  </>);
}
