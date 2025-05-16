export function BadgeLink({
  Icon,
  content,
  href,
}: {
  Icon: React.ElementType;
  content: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : "_self"}
      className={`${href ? "hover:bg-zinc-200" : ""} inline-block rounded bg-zinc-100 no-underline transition-colors`}
    >
      <span
        className={`${href ? "underline" : ""} flex items-center justify-center gap-2 px-1 py-0.5 text-sm`}
      >
        <Icon className="size-4" /> {content}
      </span>
    </a>
  );
}
