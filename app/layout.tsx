import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Visionary Studios Media",
  description: "Professional Video Editing Service for Growing YouTubers.",
  keywords: "Video, Editing, Editor, YouTube, TikTok",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta property="og:image" content="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/logos/visionary-transparent-logo.png"></link>
        <link rel="manifest" href="/site.webmanifest" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"
          rel="stylesheet"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"
          defer
        />
      </head>
      <body className={inter.className}>
        <div className="dark">
          <Header />
          <main>{children}</main>
        </div>
      </body>
      <GoogleAnalytics gaId="G-C21M0RHDE1" />
    </html>
  );
}
