"use client";

import { useRef } from "react";
import { ContentAbout } from "../Content/ContentAbout";
import { PaintableBG } from "../PaintableBG";

export function SectionAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-screen w-full"
    >
      <ContentAbout />
      <PaintableBG
        containerRef={containerRef}
        className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full"
      />
    </section>
  );
}
