import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CaseQuest 2026 — Small Parcels, Full Checks",
  description:
    "Keep every parcel declared, grade the seller instead of the parcel, and move the paperwork from the seller to a cluster export desk — an interactive brief for DPIIT and the 2026 Inter-Ministerial Committee on E-Commerce Exports, Team IdeaForge, CaseQuest 2026.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink">
        {children}
      </body>
    </html>
  );
}
