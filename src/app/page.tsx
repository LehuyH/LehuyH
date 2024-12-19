import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <header className="flex items-center justify-center min-h-screen bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,1)),url('/img/bg.webp')] bg-top bg-no-repeat">
        <div className="flex justify-center items-center text-center flex-col gap-4">
          <picture>
            <img src="/img/me.jpg" alt="A picture of me :)" className="rounded-full w-44 h-44 border-4 shadow-lg" />
          </picture>
          <h1 className="text-6xl tracking-widest font-serif">
            LeHuy Hoang
          </h1>
          <p className="text-xl">
            I build full stack web applications for fun ❤️
          </p>
          <aside className="flex gap-4">
            <Link href="/about" className="bg-sky-500 hover:bg-sky-400 transition-colors px-12 py-2 rounded-xl text-white font-serif">
              Resume 
            </Link>
            <Link href="/projects">
              Next
            </Link>
          </aside>
        </div>
      </header>
    </main>
  );
}
