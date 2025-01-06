import "@/styles/globals.css";

import type { Viewport, Metadata } from "next";
import localFont from "next/font/local";

const Gambarino = localFont(
  {
    src: '../styles/Gambarino-Regular.woff2',
    variable: '--font-gambarino',
  }
)
export const metadata: Metadata = {
  title: "Lehuy Hoang",
  description: "Lehuy Hoang's Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph:{
    title: "Lehuy Hoang",
    description: "Lehuy Hoang's Portfolio",
    url: "https://lehuy.dev",
    type: "website",
    images: [
      "https://lehuy.dev/og.jpg"
    ],
  },
  twitter:{
    card: "summary_large_image"
  }
};

export const viewport: Viewport = {
  themeColor: "#0EA5E9",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${Gambarino.variable} styled-scrollbar`}>
      <body>
        {children}
        <footer className="pt-48 pb-8 flex justify-end items-center flex-col text-center">
          <p className="text-sm">
            <a className="text-sky-600 hover:underline font-serif" href="https://github.com/LehuyH/LehuyH" target="_blank" rel="noreferrer">
              Built With ❤️ by Lehuy
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
