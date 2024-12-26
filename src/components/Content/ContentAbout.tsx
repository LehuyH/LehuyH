import { BirdIcon, ComputerIcon, GithubIcon, LinkedinIcon, SparkleIcon } from "lucide-react";
import { BadgeLink } from "../BadgeLink";
import { IconCPP, IconFox, IconGo, IconHTML, IconJava, IconNodeJS, IconPostgres, IconPython, IconReact, IconTS, IconVue } from "../Icons";

export function ContentAbout() {
    return (
        <div className="px-8 md:px-0 py-12 mx-auto prose z-10 relative">
            <header className="text-center">
                <h1 className="font-serif text-5xl !font-normal !tracking-normal">
                    About
                </h1>
            </header>
            <article className="text-lg">
                <p>Hello! I&apos;m Lehuy, a full stack web developer from The San Francisco Bay Area.</p>
                <p>
                    Currently, I&apos;m studying Computer Science at <BadgeLink Icon={BirdIcon} content="Las Positas College" href="https://laspositascollege.edu" /> while working part-time as a CS instructor
                    at <BadgeLink Icon={ComputerIcon} content="Hackingtons" href="https://www.hackingtons.com" />.
                </p>
                <p>
                    I love building things that make a difference! I&apos;m currently developing <BadgeLink Icon={IconFox} content="StudyKit" href="https://studykit.app"/> used by 60,000+ students across 100+ countries, helping make learning more accessible and engaging.
                </p>
                <p>
                    My core skills include <BadgeLink Icon={IconTS} content="Typescript/Javascript"/>, <BadgeLink Icon={IconHTML} content="HTML/CSS"/>, <BadgeLink Icon={IconPython} content="Python"/>, <BadgeLink Icon={IconGo} content="Go"/>, <BadgeLink Icon={IconJava} content="Java"/>, and <BadgeLink Icon={IconCPP} content="C++"/>, and I&apos;m always looking for new challenges to push myself to learn more.
                </p>
                <p>
                    Some of my favorite frameworks and tools to use are <BadgeLink Icon={IconVue} content="Vue/Nuxt"/>, <BadgeLink Icon={IconReact} content="React/Next"/>, <BadgeLink Icon={IconNodeJS} content="NodeJS/Deno/Bun"/>, and <BadgeLink Icon={IconPostgres} content="PostgreSQL"/>. You can see these in action under <BadgeLink Icon={SparkleIcon} content="My Projects" href="#projects"/>.
                </p>
                <p>
                    Outside of coding, I enjoy running and making music with my brother :)
                </p>
                <p>
                    You can find me on <BadgeLink Icon={GithubIcon} content="GitHub" href="https://github.com/LehuyH"/> or <BadgeLink Icon={LinkedinIcon} content="LinkedIn" href="https://www.linkedin.com/in/lehuyh"/>!
                </p>
            </article>
        </div>
    )
}