import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "MTD Thrive Redirector",
  description: "Redirects for thrive.mtd.org",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
