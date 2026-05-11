import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pyun Project",
  description:
    "Instant & lightweight Versus Progress Bar for Streamers. Free, standalone, and 100% local desktop software for real-time interactions.",
  icons: {
    icon: "/assets/logo.png",
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
