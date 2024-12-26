"use client";

import { useRef } from "react";
import { ContentAbout } from "../Content/ContentAbout";
import { PaintableBG } from "../PaintableBG";

export function SectionAbout() {
    const containerRef = useRef<HTMLDivElement>(null)
    return (<section ref={containerRef} id="about" className="w-full min-h-screen relative">
        <ContentAbout />
        <PaintableBG containerRef={containerRef} className="absolute left-0 top-0 z-0 w-screen h-full pointer-events-none" />
    </section>)
}