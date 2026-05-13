import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pyun - Versus Overlay",
  description:
    "Instant & lightweight Versus Progress Bar for Streamers. Free, standalone, and 100% local desktop software for real-time interactions.",
  icons: {
    icon: [
      { url: "/icons/pyun.png" },
      { url: "/icons/pyun.ico", type: "image/x-icon" },
    ],
    shortcut: "/icons/pyun.png",
    apple: "/icons/pyun.png",
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
