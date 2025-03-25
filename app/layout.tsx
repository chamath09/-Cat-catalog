import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cat Catalog",
  description: "A web application to explore cat breeds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
