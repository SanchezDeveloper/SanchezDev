import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Sanchez Dev | Sites e Sistemas",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--cor-light-purple)] text-[var(--cor-text-bg-light)]">
        <Header />
        {children}
      </body>
    </html>
  );
}
