import type { Metadata } from "next";
import "./globals.css";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/pyun" : "";

export const metadata: Metadata = {
  title: "Pyun - Versus Overlay",
  description:
    "Instant & lightweight Versus Progress Bar for Streamers. Free, standalone, and 100% local desktop software for real-time interactions.",
  icons: {
    icon: [
      { url: `${basePath}/icons/pyun.png` },
      { url: `${basePath}/icons/pyun.ico`, type: "image/x-icon" },
    ],
    shortcut: `${basePath}/icons/pyun.png`,
    apple: `${basePath}/icons/pyun.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
