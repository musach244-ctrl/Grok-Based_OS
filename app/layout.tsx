import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Musa OS | AI Builder",
  description: "The personal operating system of Musa Chaudhary.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
