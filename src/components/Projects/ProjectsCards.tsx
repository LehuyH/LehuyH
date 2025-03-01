"use client";

import { useRef } from "react"
import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";

export function ProjectsCards() {
    const projectsMeta: {
        name: string,
        description: string,
        link: string,
        component: React.FC<{
            className?: string,
            children?: React.ReactNode,
            href: string,
            target: string
        }>
    }[] = [
            {
                name: "🦊 StudyKit",
                description: "A web and mobile application helping 60,000+ students worldwide build healthy study habits.",
                link: "https://studykit.app",
                component: StudyKitCard
            },
            {
                name: "🌐 VoidOne",
                description: "The easiest way to deploy web applications to the cloud.",
                link: "https://voidone.dev",
                component: VoidOneCard
            },
            {
                name: "🐇 Transfer Helper",
                description: "Helping fellow community college students plan their courses in seconds!",
                link: "https://transfer.lehuy.dev",
                component: TransferHelperCard
            },
            {
                name: "🐐 GoatUI",
                description: "C++ library for creating declarative and reactive UIs.",
                link: "https://github.com/LehuyH/GoatUI",
                component: GoatUICard
            },{
                name: "🚀 Supabase Java",
                description: "The missing Java client for Supabase/Postgres",
                link: "https://github.com/LehuyH/supabase-java",
                component: SupabaseJavaCard
            },{
                name: "⚔️ Civilization Royale",
                description: "A realtime multiplayer capture the flag game!",
                link: "https://royale.lehuy.dev/",
                component: CivRoyaleCard
            },{
                name: "☄️ Disasternaut",
                description: "Colonize planets, survive disasters! (Developed in 1 week for Kajam21)",
                link: "https://disasternaut.lehuy.dev/",
                component: DisasternautCard
            },{
                name: "🎴 Cardforge",
                description:"An online card battler where the players make the cards!",
                link: "https://cardforge.lehuy.dev/",
                component: CardforgeCard
            },{
                name: "🪙 Coinages",
                description: "A incremental clicker game where you build a coin-flipping company from the ground up!",
                link: "https://coinages.netlify.app/",
                component: CoinagesCard
            }
        ]

    const containerRef = useRef<HTMLDivElement>(null)

    const scroll = (dir: 'left' | 'right') => {
        containerRef.current?.scrollBy((dir === 'left') ? -100 : 100, 0)
    }

    return (
        <section className="h-full w-full relative overflow-x-hidden flex-col-reverse gap-4 flex items-center justify-center px-8">
            <aside className="flex md:block justify-evenly w-full md:absolute">
                <button onClick={() => scroll('left')} aria-label="Previous Project" className="md:absolute inline-block left-8 text-blue-300 transition-colors hover:text-blue-200 z-30">
                    <ChevronLeftIcon className="size-12" />
                </button>
                <button onClick={() => scroll('right')} aria-label="Next Project" className="md:absolute inline-block right-8 text-blue-300 transition-colors hover:text-blue-200 z-30">
                    <ChevronRightIcon className="size-12" />
                </button>
            </aside>
            <div ref={containerRef} className="relative max-w-5xl h-full w-full flex gap-24 snap-x no-scrollbar snap-mandatory overflow-x-visible rounded-lg overflow-y-hidden">
                {
                    projectsMeta.map((project, index) => {
                        return <project.component href={project.link} target="_blank" key={index} className="w-full group hover:scale-105 transition-transform relative rounded-lg shrink-0 snap-center flex items-center justify-center px-6 md:p-0`">
                            {/* Content */}
                            <div className="md:bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.75),rgba(0,0,0,1))] bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.75),rgba(0,0,0,1))] absolute top-0 left-0 w-full h-full rounded-lg md:group-hover:opacity-70 group-hover:opacity-80 opacity-0 transition-opacity z-30 pointer-events-none" />
                            <aside className="absolute bottom-12 text-center opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 left-1/2 -translate-x-1/2 z-30 text-white transition-all space-y-4">
                                <h1 className="md:text-6xl text-4xl font-serif">{project.name}</h1>
                                <p className="md:text-lg max-w-md mx-auto">
                                    {project.description}
                                </p>
                            </aside>
                        </project.component>
                    })
                }

            </div>
        </section>
    )
}

interface CardProps {
    className?: string,
    children?: React.ReactNode,
    href: string,
    target: string
}

function StudyKitCard({
    className,
    children,
    href,
    target
}:CardProps) {
    return <a href={href} target={target} className={`${className} block bg-amber-200 select-none p-4 md:p-0`}>
        {/* Desktop */}
        <picture className="md:inline-block absolute hidden left-0 -bottom-12 rotate-12 z-10">
            <img src="/img/projects/studykit/kit-full.svg" alt="StudyKit" className="w-full rounded-lg size-80" />
        </picture>
        <picture className="md:inline-block absolute hidden left-1/2 -translate-x-1/2 w-10/12">
            <img src="/img/projects/studykit/studykit-desktop.webp" alt="StudyKit Desktop Screenshot" className="w-full rounded" />
        </picture>

        {/* Mobile */}
        <picture className="md:hidden rounded border-4">
            <img src="/img/projects/studykit/studykit-mobile.webp" alt="StudyKit Mobile Screenshot" className="w-full rounded" />
        </picture>
        {children}
    </a>
}

function VoidOneCard({
    className,
    children,
    href,
    target
}:CardProps) {
    return <a href={href} target={target} className={`${className} block bg-neutral-100 select-none md:p-0 p-4`}>
        {/* Background */}
        <picture className="absolute left-1/2 md:inline-block hidden -translate-x-1/2 w-10/12">
            <img src="/img/projects/voidone/voidone-desktop.webp" alt="VoidOne Desktop Screenshot" className="w-full rounded" />
        </picture>

        {/* Mobile */}
        <picture className="md:hidden rounded border-4">
            <img src="/img/projects/voidone/voidone-mobile.webp" alt="VoidOne Mobile Screenshot" className="w-full rounded" />
        </picture>

        {children}
    </a>
}

function TransferHelperCard({
    className,
    children,
    href,
    target
}:CardProps) {
    return <a href={href} target={target} className={`${className} block bg-slate-800 select-none md:p-0 p-4`}>
        {/* Background */}
        <picture className="absolute left-1/2 md:inline-block hidden -translate-x-1/2 w-10/12">
            <img src="/img/projects/transfer-helper/transfer-helper-desktop.webp" alt="Transfer Helper Desktop Screenshot" className="w-full rounded" />
        </picture>

        {/* Mobile */}
        <picture className="md:hidden rounded border-4 border-gray-700">
            <img src="/img/projects/transfer-helper/transfer-helper-mobile.webp" alt="Transfer Helper Mobile Screenshot" className="w-full rounded" />
        </picture>

        {children}
    </a>
}

function GoatUICard({
    className,
    children,
    href,
    target
}:CardProps){
    return <a href={href} target={target} className={`${className} block bg-[#F3AD61] overflow-hidden`}>
         {/* Background */}
         <picture className="absolute md:left-1/2 inline-block md:-translate-x-1/2 md:w-4/5 top-4 w-[150%] left-4">
            <img src="/img/projects/goatui/goatui-desktop.webp" alt="GoatUI Desktop Screenshot" className="w-full rounded" />
        </picture>

        {/* Code Demo */}
        <picture className="absolute md:left-1/2 md:-translate-x-1/2 md:-bottom-12 md:w-3/4 w-[150%] bottom-0 left-0 shadow-lg  rotate-3 z-10">
            <img src="/img/projects/goatui/goatui-code.svg" alt="GoatUI Code Demo" className="w-full rounded" />
        </picture>
        {children}
    </a>
}

function SupabaseJavaCard({
    className,
    children,
    href,
    target
}:CardProps) {
    return <a href={href} target={target} className={`${className} block bg-[#0e1117] select-none md:p-0 p-4 overflow-hidden`}>
        {/* Background */}
        <picture className="absolute md:left-1/2 inline-block md:-translate-x-1/2 md:w-10/12 w-[150%] left-0 md:rotate-0 rotate-6">
            <img src="/img/projects/supabase-java/supabase-java-code.svg" alt="Supabase Java Code Demo" className="w-full rounded" />
        </picture>
        {children}
    </a>
}

function CivRoyaleCard({
    className,
    children,
    href,
    target
}:CardProps) {
    return <a href={href} target={target} className={`${className} block bg-[#3979A8] select-none md:p-0 p-4`}>
        {/* Background */}
        <picture className="absolute left-1/2 md:inline-block hidden -translate-x-1/2 w-10/12">
            <img src="/img/projects/civ-royale/civ-royale-desktop.webp" alt="Civilization Royale Gameplay" className="w-full rounded" />
        </picture>

        {/* Mobile */}
        <picture className="md:hidden rounded border-4">
            <img src="/img/projects/civ-royale/civ-royale-mobile.webp" alt="Civilization Royale Gameplay" className="w-full rounded" />
        </picture>

        {children}
    </a>
}

function DisasternautCard({
    className,
    children,
    href,
    target
}:CardProps) {
    return <a href={href} target={target} className={`${className} block bg-[#1B233B] select-none md:p-0 p-4 overflow-hidden`}>
        {/* Background */}
        <picture className="absolute md:left-2/3 md:rotate-6 md:-translate-x-1/2 md:w-9/12 w-[150%] left-0">
            <img src="/img/projects/disasternaut/disasternaut-desktop.webp" alt="Disasternaut Gameplay" className="w-full rounded" />
        </picture>
        <picture className="absolute left-0 -bottom-12 z-10 md:w-auto w-[60%]">
            <img src="/img/projects/disasternaut/disasternaut-cover.webp" alt="Cover Art" className="w-full rounded-lg scale-125 drop-shadow-md origin-bottom -scale-x-125" />
        </picture>
        {children}
    </a>
}

function CardforgeCard({
    className,
    children,
    href,
    target
}:CardProps) {
    return <a href={href} target={target} className={`${className} block bg-[#E8CD60] select-none md:p-0 p-4 overflow-hidden`}>
         {/* Background */}
         <picture className="absolute md:left-1/2 inline-block md:-translate-x-1/2 md:w-10/12 w-[150%] rotate-12 md:rotate-0 top-12 md:top-auto">
            <img src="/img/projects/cardforge/cardforge-desktop.webp" alt="Cardforge Desktop Screenshot" className="w-full rounded" />
        </picture>

        {/* Mobile */}
        <picture className="md:hidden rounded border-4">
            <img src="/img/projects/cardforge/cardforge-mobile.webp" alt="Cardforge Mobile Screenshot" className="w-full rounded" />
        </picture>
        {children}
    </a>
}
        
        
function CoinagesCard({
    className,
    children,
    href,
    target
}:CardProps) {
    return <a href={href} target={target} className={`${className} block bg-[#3774C0] select-none md:p-0 p-4 overflow-hidden`}>
        {/* Background */}
        <picture className="absolute left-1/2 md:inline-block hidden -translate-x-1/2 w-10/12">
            <img src="/img/projects/coinages/coinages-desktop.webp" alt="Coinages Desktop Screenshot" className="w-full rounded" />
        </picture>

        {/* Mobile */}
        <picture className="md:hidden rounded border-4">
            <img src="/img/projects/coinages/coinages-mobile.webp" alt="Coinages Mobile Screenshot" className="w-full rounded" />
        </picture>

        {children}
    </a>
}