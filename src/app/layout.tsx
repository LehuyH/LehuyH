import "@/styles/globals.css";

import { type Metadata } from "next";
import localFont from "next/font/local";

const Gambarino = localFont(
  {
    src: '../styles/Gambarino-Regular.woff2',
    variable: '--font-gambarino',
  }
)

export const metadata: Metadata = {
  title: "Lehuy Hoang",
  description: "Fullstack Web Developer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${Gambarino.variable}`}>
      <body>{children}</body>
    </html>
  );
}
