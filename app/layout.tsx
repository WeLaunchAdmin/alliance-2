import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "Alliance Building Services",
  description:
    "Commercial janitorial and building services since 1992. Class A standards, local leadership, and 80 million square feet under service in Houston and New York.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={interTight.variable}>
      <body className={interTight.className}>{children}</body>
    </html>
  );
}
