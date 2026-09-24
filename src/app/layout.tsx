import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Dimitrios Katsaounis",
  description: "Dimitrios Katsaouni's website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full bg-white text-black">
      <body className="font-mono">{children}</body>
    </html>
  );
}
