"use client";

import { useRef } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";

export function ProjectsCards() {
  const projectsMeta: {
    name: string;
    description: string;
    link: string;
    component: React.FC<{
      className?: string;
      children?: React.ReactNode;
      href: string;
      target: string;
    }>;
  }[] = [
    {
      name: "🦊 StudyKit",
      description:
        "A web and mobile application helping 60,000+ students worldwide build healthy study habits.",
      link: "https://studykit.app",
      component: StudyKitCard,
    },
    {
      name: "🌐 VoidOne",
      description: "The easiest way to deploy web applications to the cloud.",
      link: "https://voidone.dev",
      component: VoidOneCard,
    },
    {
      name: "🐇 Transfer Helper",
      description:
        "Helping fellow community college students plan their courses in seconds!",
      link: "https://transfer.lehuy.dev",
      component: TransferHelperCard,
    },
    {
      name: "🐐 GoatUI",
      description: "C++ library for creating declarative and reactive UIs.",
      link: "https://github.com/LehuyH/GoatUI",
      component: GoatUICard,
    },
    {
      name: "🚀 Supabase Java",
      description: "The missing Java client for Supabase/Postgres",
      link: "https://github.com/LehuyH/supabase-java",
      component: SupabaseJavaCard,
    },
    {
      name: "⚔️ Civilization Royale",
      description: "A realtime multiplayer capture the flag game!",
      link: "https://royale.lehuy.dev/",
      component: CivRoyaleCard,
    },
    {
      name: "☄️ Disasternaut",
      description:
        "Colonize planets, survive disasters! (Developed in 1 week for Kajam21)",
      link: "https://disasternaut.lehuy.dev/",
      component: DisasternautCard,
    },
    {
      name: "🎴 Cardforge",
      description: "An online card battler where the players make the cards!",
      link: "https://cardforge.lehuy.dev/",
      component: CardforgeCard,
    },
    {
      name: "🪙 Coinages",
      description:
        "A incremental clicker game where you build a coin-flipping company from the ground up!",
      link: "https://coinages.netlify.app/",
      component: CoinagesCard,
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    containerRef.current?.scrollBy(dir === "left" ? -100 : 100, 0);
  };

  return (
    <section className="relative flex h-full w-full flex-col-reverse items-center justify-center gap-4 overflow-x-hidden px-8">
      <aside className="flex w-full justify-evenly md:absolute md:block">
        <button
          onClick={() => scroll("left")}
          aria-label="Previous Project"
          className="left-8 z-30 inline-block text-blue-300 transition-colors hover:text-blue-200 md:absolute"
        >
          <ChevronLeftIcon className="size-12" />
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Next Project"
          className="right-8 z-30 inline-block text-blue-300 transition-colors hover:text-blue-200 md:absolute"
        >
          <ChevronRightIcon className="size-12" />
        </button>
      </aside>
      <div
        ref={containerRef}
        className="no-scrollbar relative flex h-full w-full max-w-5xl snap-x snap-mandatory gap-24 overflow-y-hidden overflow-x-visible rounded-lg"
      >
        {projectsMeta.map((project, index) => {
          return (
            <project.component
              href={project.link}
              target="_blank"
              key={index}
              className="md:p-0` group relative flex w-full shrink-0 snap-center items-center justify-center rounded-lg px-6 transition-transform hover:scale-105"
            >
              {/* Content */}
              <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-full rounded-lg bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.75),rgba(0,0,0,1))] opacity-0 transition-opacity group-hover:opacity-80 md:bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.75),rgba(0,0,0,1))] md:group-hover:opacity-70" />
              <aside className="absolute bottom-12 left-1/2 z-30 -translate-x-1/2 translate-y-12 space-y-4 text-center text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <h1 className="font-serif text-4xl md:text-6xl">
                  {project.name}
                </h1>
                <p className="mx-auto max-w-md md:text-lg">
                  {project.description}
                </p>
              </aside>
            </project.component>
          );
        })}
      </div>
    </section>
  );
}

interface CardProps {
  className?: string;
  children?: React.ReactNode;
  href: string;
  target: string;
}

function StudyKitCard({ className, children, href, target }: CardProps) {
  return (
    <a
      href={href}
      target={target}
      className={`${className} block select-none bg-amber-200 p-4 md:p-0`}
    >
      {/* Desktop */}
      <picture className="absolute -bottom-12 left-0 z-10 hidden rotate-12 md:inline-block">
        <img
          src="/img/projects/studykit/kit-full.svg"
          alt="StudyKit"
          className="size-80 w-full rounded-lg"
        />
      </picture>
      <picture className="absolute left-1/2 hidden w-10/12 -translate-x-1/2 md:inline-block">
        <img
          src="/img/projects/studykit/studykit-desktop.webp"
          alt="StudyKit Desktop Screenshot"
          className="w-full rounded"
        />
      </picture>

      {/* Mobile */}
      <picture className="rounded border-4 md:hidden">
        <img
          src="/img/projects/studykit/studykit-mobile.webp"
          alt="StudyKit Mobile Screenshot"
          className="w-full rounded"
        />
      </picture>
      {children}
    </a>
  );
}

function VoidOneCard({ className, children, href, target }: CardProps) {
  return (
    <a
      href={href}
      target={target}
      className={`${className} block select-none bg-neutral-100 p-4 md:p-0`}
    >
      {/* Background */}
      <picture className="absolute left-1/2 hidden w-10/12 -translate-x-1/2 md:inline-block">
        <img
          src="/img/projects/voidone/voidone-desktop.webp"
          alt="VoidOne Desktop Screenshot"
          className="w-full rounded"
        />
      </picture>

      {/* Mobile */}
      <picture className="rounded border-4 md:hidden">
        <img
          src="/img/projects/voidone/voidone-mobile.webp"
          alt="VoidOne Mobile Screenshot"
          className="w-full rounded"
        />
      </picture>

      {children}
    </a>
  );
}

function TransferHelperCard({ className, children, href, target }: CardProps) {
  return (
    <a
      href={href}
      target={target}
      className={`${className} block select-none bg-slate-800 p-4 md:p-0`}
    >
      {/* Background */}
      <picture className="absolute left-1/2 hidden w-10/12 -translate-x-1/2 md:inline-block">
        <img
          src="/img/projects/transfer-helper/transfer-helper-desktop.webp"
          alt="Transfer Helper Desktop Screenshot"
          className="w-full rounded"
        />
      </picture>

      {/* Mobile */}
      <picture className="rounded border-4 border-gray-700 md:hidden">
        <img
          src="/img/projects/transfer-helper/transfer-helper-mobile.webp"
          alt="Transfer Helper Mobile Screenshot"
          className="w-full rounded"
        />
      </picture>

      {children}
    </a>
  );
}

function GoatUICard({ className, children, href, target }: CardProps) {
  return (
    <a
      href={href}
      target={target}
      className={`${className} block overflow-hidden bg-[#F3AD61]`}
    >
      {/* Background */}
      <picture className="absolute left-4 top-4 inline-block w-[150%] md:left-1/2 md:w-4/5 md:-translate-x-1/2">
        <img
          src="/img/projects/goatui/goatui-desktop.webp"
          alt="GoatUI Desktop Screenshot"
          className="w-full rounded"
        />
      </picture>

      {/* Code Demo */}
      <picture className="absolute bottom-0 left-0 z-10 w-[150%] rotate-3 shadow-lg md:-bottom-12 md:left-1/2 md:w-3/4 md:-translate-x-1/2">
        <img
          src="/img/projects/goatui/goatui-code.svg"
          alt="GoatUI Code Demo"
          className="w-full rounded"
        />
      </picture>
      {children}
    </a>
  );
}

function SupabaseJavaCard({ className, children, href, target }: CardProps) {
  return (
    <a
      href={href}
      target={target}
      className={`${className} block select-none overflow-hidden bg-[#0e1117] p-4 md:p-0`}
    >
      {/* Background */}
      <picture className="absolute left-0 inline-block w-[150%] rotate-6 md:left-1/2 md:w-10/12 md:-translate-x-1/2 md:rotate-0">
        <img
          src="/img/projects/supabase-java/supabase-java-code.svg"
          alt="Supabase Java Code Demo"
          className="w-full rounded"
        />
      </picture>
      {children}
    </a>
  );
}

function CivRoyaleCard({ className, children, href, target }: CardProps) {
  return (
    <a
      href={href}
      target={target}
      className={`${className} block select-none bg-[#3979A8] p-4 md:p-0`}
    >
      {/* Background */}
      <picture className="absolute left-1/2 hidden w-10/12 -translate-x-1/2 md:inline-block">
        <img
          src="/img/projects/civ-royale/civ-royale-desktop.webp"
          alt="Civilization Royale Gameplay"
          className="w-full rounded"
        />
      </picture>

      {/* Mobile */}
      <picture className="rounded border-4 md:hidden">
        <img
          src="/img/projects/civ-royale/civ-royale-mobile.webp"
          alt="Civilization Royale Gameplay"
          className="w-full rounded"
        />
      </picture>

      {children}
    </a>
  );
}

function DisasternautCard({ className, children, href, target }: CardProps) {
  return (
    <a
      href={href}
      target={target}
      className={`${className} block select-none overflow-hidden bg-[#1B233B] p-4 md:p-0`}
    >
      {/* Background */}
      <picture className="absolute left-0 w-[150%] md:left-2/3 md:w-9/12 md:-translate-x-1/2 md:rotate-6">
        <img
          src="/img/projects/disasternaut/disasternaut-desktop.webp"
          alt="Disasternaut Gameplay"
          className="w-full rounded"
        />
      </picture>
      <picture className="absolute -bottom-12 left-0 z-10 w-[60%] md:w-auto">
        <img
          src="/img/projects/disasternaut/disasternaut-cover.webp"
          alt="Cover Art"
          className="w-full origin-bottom scale-125 -scale-x-125 rounded-lg drop-shadow-md"
        />
      </picture>
      {children}
    </a>
  );
}

function CardforgeCard({ className, children, href, target }: CardProps) {
  return (
    <a
      href={href}
      target={target}
      className={`${className} block select-none overflow-hidden bg-[#E8CD60] p-4 md:p-0`}
    >
      {/* Background */}
      <picture className="absolute top-12 inline-block w-[150%] rotate-12 md:left-1/2 md:top-auto md:w-10/12 md:-translate-x-1/2 md:rotate-0">
        <img
          src="/img/projects/cardforge/cardforge-desktop.webp"
          alt="Cardforge Desktop Screenshot"
          className="w-full rounded"
        />
      </picture>

      {/* Mobile */}
      <picture className="rounded border-4 md:hidden">
        <img
          src="/img/projects/cardforge/cardforge-mobile.webp"
          alt="Cardforge Mobile Screenshot"
          className="w-full rounded"
        />
      </picture>
      {children}
    </a>
  );
}

function CoinagesCard({ className, children, href, target }: CardProps) {
  return (
    <a
      href={href}
      target={target}
      className={`${className} block select-none overflow-hidden bg-[#3774C0] p-4 md:p-0`}
    >
      {/* Background */}
      <picture className="absolute left-1/2 hidden w-10/12 -translate-x-1/2 md:inline-block">
        <img
          src="/img/projects/coinages/coinages-desktop.webp"
          alt="Coinages Desktop Screenshot"
          className="w-full rounded"
        />
      </picture>

      {/* Mobile */}
      <picture className="rounded border-4 md:hidden">
        <img
          src="/img/projects/coinages/coinages-mobile.webp"
          alt="Coinages Mobile Screenshot"
          className="w-full rounded"
        />
      </picture>

      {children}
    </a>
  );
}
