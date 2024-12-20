import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { GithubIcon, LinkedinIcon, LinkIcon } from "lucide-react";
import { ProjectsCards } from "@/components/ProjectsCards";

export default function HomePage() {
  return (<>
    <header className="flex items-center justify-center min-h-screen bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,1)),url('/img/bg.webp')] bg-top bg-no-repeat px-8">
      <div className="flex justify-center items-center text-center flex-col gap-4">
        <picture>
          <img src="/img/me.jpg" alt="A picture of me :)" className="rounded-full size-44 border-4 shadow-lg" />
        </picture>
        <h1 className="md:text-6xl text-5xl tracking-widest font-serif">
          LeHuy Hoang
        </h1>
        <p className="text-lg">
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
      </div>
    </header>
    <main>
      <section id="projects" className="min-h-screen grid mx-auto text-center py-4" style={{
        gridTemplateRows: "auto 1fr"
      }}>
        <h1 className="font-serif text-5xl py-12">
          Projects
        </h1>
        <ProjectsCards />
      </section>
    </main>
  </>);
}
