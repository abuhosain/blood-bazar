import type { Metadata } from "next";
import Menu from "@/components/common/Menu/Menu";
import Footer from "@/components/common/Footer/Footer";

export const metadata: Metadata = {
  title: "Blood Bazar | Home Page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="bg-[#F3F3F3]">
        <Menu />
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
