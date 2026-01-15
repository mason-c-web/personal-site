import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clare Mason",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/images/icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
