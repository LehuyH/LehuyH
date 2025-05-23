"use client";

import { useState } from "react";
import { motion } from "motion/react";

interface HackathonInfo {
  img: string;
  name: string;
  date: Date;
  description?: string;
  link?: string;
}
const hackathons: HackathonInfo[] = [
  {
    name: "UC Berkeley AI Hackathon",
    img: "/img/hackathons/ucb.svg",
    date: new Date("Jun 10, 2024"),
    description: `After a break from hackathons, I teamed up to compete in the UC Berkeley AI Hackathon and created GameForge. GameForge allows users to prototype large-scale video game worlds using only text. It generates locations, characters, and items through natural language, with AI filling in gaps. The project features open-ended DND-style gameplay and a memory system to keep actions within the game’s rules.`,
    link: "https://devpost.com/software/gameforge",
  },
  {
    name: "Expo Hacks II",
    img: "/img/hackathons/ye.png",
    date: new Date("Aug 17, 2019"),
    description: `This was an in-person event, as well as one of my first all-day hackathons. There were several themes to choose from, but we went with medical. We created a patient-doctor portal to foster relationships and communication. The judges were unusually thorough.  Questions about the security of patient data and COPPA compliance through us off 😅.`,
    link: "https://devpost.com/software/medical-ly",
  },
  {
    name: "hths.hacks() 2020",
    img: "/img/hackathons/hths.png",
    date: new Date("May 16, 2020"),
    description: `This event took place during the covid-era, and we wanted to address a problem we were having at school at the time. During the pandemic, our team discovered Jackbox Games and wanted to see if the same gameplay style could be applied to online studying.`,
    link: "https://devpost.com/software/studyspaces-9nufc1",
  },
  {
    name: "Def Hacks Virtual 2020",
    img: "/img/hackathons/def.png",
    date: new Date("Jun 20, 2020"),
    description: `This was yet another virtual hackathon with a broad theme. We wanted to deepen our understanding of NuxtJS as well as JWT token-based authentication at the time. Mindtrack, our project, was a goal-setting platform built with these technologies.`,
    link: "https://devpost.com/software/mindtrack",
  },
  {
    name: "DeltaX Hacks",
    img: "/img/hackathons/deltax.png",
    date: new Date("Sep 26, 2020"),
    description: `We revisited an old idea in this online hackathon: competitive volunteering. We created a github-style platform to help organizations and volunteers find each other. This time, we paid close attention to detail in our user interface, and it showed!`,
    link: "https://devpost.com/software/voluntier-8osag2",
  },
  {
    name: "ThetaHacks",
    img: "/img/hackathons/theta.png",
    date: new Date("Jan 14 2021"),
    description: `We wanted to return to the theme of education for this online hackathon. With our project, we addressed student project management and accountability. This was one of my first ventures into TailwindCSS in terms of UI design (which was mostly delegated to me). It has since become one of my favorite design tools.`,
    link: "https://devpost.com/software/craftbench",
  },
  {
    name: "TritonHacks 2021",
    img: "/img/hackathons/tri.png",
    date: new Date("Jun 17 2021"),
    link: "https://devpost.com/software/cardforge",
    description: `Pokemon cards were something that most of our team remembered fondly. We wanted to make a one-of-a-kind game in which players could make up their own cards and use them. This virtual hackathon had a game category, so it was a natural fit. We learned amazing skills like NLP and realtime websockets. Check it out! The deployed version should still be playable!`,
  },
  {
    name: "Kajam 2021",
    img: "/img/hackathons/kajam.png",
    date: new Date("Oct 18 2021"),
    link: "https://replit.com/@LehuyH/Disasternaut?v=1",
    description: `I've always wanted to make a full-fledged game, but existing Javascript engines never got my attention. Learning another language just to make games seemed like overkill to me as well. Replit released a beginner-friendly game engine called Kaboom, which made game development extremely simple for me. Our team's submission to Kajam was one of my first attempts at a web game!`,
  },
  {
    name: "Blueprint (2021/2022)",
    img: "/img/hackathons/bp.png",
    date: new Date("Feb 14 2022"),
    link: "https://github.com/LehuyH/",
    description: `So far, we've been to Blueprint twice. We created consumer/environmental awareness solutions as well as an automated study feedback engine. Both projects can be found on Github.`,
  },
  {
    name: "Replit Code Jam",
    img: "/img/hackathons/replit.png",
    date: new Date("Mar 31 2020"),
    link: "https://replit.com/talk/announcements/At-Home-Students-Code-Jam/32045",
    description:
      "This was our very first online hackathon during the pandemic. It's fitting that the theme was related to Covid-19. I was excited to see that our project had topped the charts! The competition was fierce because some were extremely detailed and used cutting-edge technology such as machine learning.",
  },
  {
    name: "Replit Music Jam",
    img: "/img/hackathons/replit-music.png",
    date: new Date("July 01 2019"),
    link: "https://replit.com/talk/challenge/Influxion-A-Rhythmic-Platformer/16847",
    description:
      "There's something satisfying about seeing things sync to a song's beat. Geometry Dash came close, but we wanted to make a platformer that could truly sync to the beat of a song. The project's end result was excellent. This is one of our most charming and personal projects yet, thanks to a plethora of custom art!",
  },
  {
    name: "Replit Game Jam",
    date: new Date("Mar 24 2019"),
    img: "/img/hackathons/replit-game.png",
    link: "https://replit.com/talk/share/CoinAGES-or-100-ethical-and-legal-company-management-game/13105",
    description:
      "This online game jam had a great theme: money. We created a clicker game about the coin flipping industry's boom. The end result iwas extremely charming, with great satirical humor and custom art. We were blown away by the positive feedback we received!",
  },
].sort((a, b) => {
  return b.date.getTime() - a.date.getTime();
});

export function HackathonsCards() {
  const [activeHackathon, setActiveHackathon] = useState<HackathonInfo | null>(
    null,
  );

  return (
    <>
      <p className="px-8 pb-6 pt-2">
        So far, I&apos;ve participated in {hackathons.length}+ hackathons with
        my friends!
      </p>
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 px-8 md:flex-row">
        <section
          className={`${activeHackathon ? "" : "grid"} mx-auto w-full grid-cols-2 gap-6 md:grid-cols-4`}
        >
          {hackathons
            .filter((h) => !activeHackathon || h.name === activeHackathon?.name)
            .map((hackathon) => (
              <motion.button
                layout
                disabled={activeHackathon !== null}
                key={hackathon.name}
                onClick={() => setActiveHackathon(hackathon)}
                className={`${activeHackathon ? "" : "hover:bg-sky-200"} motion-preset-blur-up-md max-w-[50vw] rounded p-4 transition-colors`}
              >
                <picture className="flex items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src={hackathon.img}
                    alt={hackathon.name}
                    className="w-full rounded-lg"
                  />
                </picture>
              </motion.button>
            ))}
        </section>
        {activeHackathon && (
          <article className="space-y-4">
            <aside className="flex items-center justify-center gap-4">
              <button
                aria-label="Back"
                onClick={() => setActiveHackathon(null)}
                className="font-serif text-sky-600 hover:underline"
              >
                ←
              </button>
              <h1 className="font-serif text-3xl font-light tracking-wider">
                {activeHackathon.name}
              </h1>
            </aside>
            <p className="text-left text-lg leading-relaxed">
              {activeHackathon.description}
            </p>
            <a
              href={activeHackathon.link}
              target="_blank"
              className="block font-serif text-sky-600 hover:underline"
            >
              View Project
            </a>
          </article>
        )}
      </div>
      {!activeHackathon && (
        <p className="pt-12 text-center text-lg">
          Click on a hackathon to learn more ☝️
        </p>
      )}
    </>
  );
}
