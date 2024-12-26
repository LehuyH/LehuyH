export function BadgeLink({
    Icon,
    content,
    href
}: {
    Icon: React.ElementType,
    content: string,
    href?: string
}) {
    return (
        <a href={href} target={(href?.startsWith('http')) ? '_blank' : '_self'} className={`${href ? 'hover:bg-zinc-200 ' : ''}inline-block transition-colors no-underline rounded bg-zinc-100`}>
            <span className="flex justify-center items-center px-1 py-0.5 text-sm gap-2">
                <Icon className="size-4" /> {content}
            </span>
        </a>
    )
}