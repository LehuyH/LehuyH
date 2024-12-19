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
                    name: "StudyKit",
                    description: "A web and mobile application helping 56,000+ students worldwide build healthy study habits.",
                    link: "https://studykit.app",
                    component: StudyKitCard
                },
                {
                    name: "VoidOne",
                    description: "The easiest way to deploy web applications to the cloud.",
                    link: "https://voidone.dev",
                    component: VoidOneCard
                },
                {
                    name: "Transfer Helper",
                    description: "Helping fellow community college students plan their courses in seconds!",
                    link: "https://lehuy.transfer.dev",
                    component: TransferHelperCard
                }
            ]

        return (
            <div className="relative w-full flex gap-24 snap-x no-scrollbar snap-mandatory overflow-x-auto rounded-lg overflow-y-hidden px-8 md:px-0">
                {
                    projectsMeta.map((project, index) => {
                        return <project.component href={project.link} target="_blank" key={index} className="md:w-[80vw] w-full group hover:scale-105 transition-transform relative rounded-lg shrink-0 snap-center flex items-center justify-center`">
                            {/* Content */}
                            <div className="md:bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.75),rgba(0,0,0,1))] bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.75),rgba(0,0,0,1))] absolute top-0 left-0 w-full h-full rounded-lg md:group-hover:opacity-70 group-hover:opacity-80 opacity-0 transition-opacity z-30 pointer-events-none" />
                            <aside className="absolute bottom-12 opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 left-1/2 -translate-x-1/2 z-30 text-white transition-all space-y-4">
                                <h1 className="text-6xl font-serif">{project.name}</h1>
                                <p className="text-lg max-w-md mx-auto">
                                    {project.description}
                                </p>
                            </aside>
                        </project.component>
                    })
                }
            </div>
        )
    }

    function StudyKitCard({
        className,
        children,
        href,
        target
    }: {
        className?: string,
        children?: React.ReactNode,
        href: string,
        target: string
    }) {
        return <a href={href} target={target} className={`${className} block bg-amber-200 select-none`}>
            {/* Background */}
            <picture className="absolute left-0 -bottom-12 rotate-12 z-10">
                <img src="/img/projects/studykit/kit-full.svg" alt="StudyKit" className="w-full rounded-lg size-80" />
            </picture>
            <picture className="absolute left-1/2 -translate-x-1/2 w-10/12">
                <img src="/img/projects/studykit/studykit-desktop.webp" alt="StudyKit Desktop Screenshot" className="w-full rounded" />
            </picture>
            {children}
        </a>
    }

    function VoidOneCard({
        className,
        children,
        href,
        target
    }: {
        className?: string,
        children?: React.ReactNode,
        href: string,
        target: string
    }) {
        return <a href={href} target={target} className={`${className} block bg-neutral-100 select-none`}>
            {/* Background */}
            <picture className="absolute left-1/2 -translate-x-1/2 w-10/12">
                <img src="/img/projects/voidone/voidone-desktop.png" alt="VoidOne Desktop Screenshot" className="w-full rounded" />
            </picture>
            {children}
        </a>
    }

    function TransferHelperCard({
        className,
        children,
        href,
        target
    }: {
        className?: string,
        children?: React.ReactNode,
        href: string,
        target: string
    }) {
        return <a href={href} target={target} className={`${className} block bg-slate-800 select-none`}>
            {/* Background */}
            <picture className="absolute left-1/2 -translate-x-1/2 w-10/12">
                <img src="/img/projects/transfer-helper/transfer-helper-desktop.png" alt="TransferHelper Desktop Screenshot" className="w-full rounded" />
            </picture>
            {children}
        </a>
    }