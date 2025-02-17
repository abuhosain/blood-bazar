import type { Metadata } from "next";
import "./globals.css";
import Top from "@/components/Menu/Top";

export const metadata: Metadata = {
  title: "Blood Bazar",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-xl mx-auto">
          <Top />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
