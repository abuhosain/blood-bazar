import font from "@/utils/fonts";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#181818] py-14">
      <div className="container mx-auto px-4 xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-10">
        <div className="lg:col-span-2">
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 bg-[#FF6969] rounded-lg"></div>
            <span className={`${font.acme.className} text-3xl text-white`}>
              Blood Bazar
            </span>
          </div>
          <p className={`text-white ${font.karla.className} text-xl mt-6 mb-3`}>
            We believe in the power of community and the life-saving impact of
            blood donation. Our mission is to ensure a steady supply of safe and
            accessible blood for patients in need
          </p>
          <p className="text-white">+8801732247599</p>
        </div>
        <div>
          <h4 className={`${font.acme.className} text-[#FF6969] text-3xl`}>
            Information
          </h4>
          <ul className={`${font.karla.className} text-white mt-6 space-y-3`}>
            <li className="text-xl hover:text-[#FF6969] transition-all duration-300">
              <Link href={"/about"} className="block">
                about us
              </Link>
            </li>
            <li className="text-xl hover:text-[#FF6969] transition-all duration-300">
              <Link href={"/"} className="block">
                donate blood
              </Link>
            </li>
            <li className="text-xl hover:text-[#FF6969] transition-all duration-300">
              <Link href={"/"} className="block">
                join us
              </Link>
            </li>
            <li className="text-xl hover:text-[#FF6969] transition-all duration-300">
              <Link href={"/"} className="block">
                our missions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className={`${font.acme.className} text-[#FF6969] text-3xl`}>
            Navigation
          </h4>
          <ul className={`${font.karla.className} text-white mt-6 space-y-3`}>
            <li className="text-xl hover:text-[#FF6969] transition-all duration-300">
              <Link href={"/"} className="block">
                donation process
              </Link>
            </li>
            <li className="text-xl hover:text-[#FF6969] transition-all duration-300">
              <Link href={"/"} className="block">
                eligibility
              </Link>
            </li>
            <li className="text-xl hover:text-[#FF6969] transition-all duration-300">
              <Link href={"/"} className="block">
                testimonials
              </Link>
            </li>
            <li className="text-xl hover:text-[#FF6969] transition-all duration-300">
              <Link href={"/"} className="block">
                contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className={`${font.acme.className} text-[#FF6969] text-3xl`}>
            Locations
          </h4>
          <ul className={`${font.karla.className} text-white mt-6 space-y-3`}>
            <li className="text-xl">Bogura Sadar, Bogura</li>
            <li className="text-xl">Sherpur, Bogura</li>
            <li className="text-xl">Shariakandi, Bogura</li>
          </ul>
        </div>
      </div>
      <div
        className={`${font.acme.className} text-xl text-white text-center mt-10`}
      >
        @all right reserved by bloodbazar.com 2025
      </div>
    </div>
  );
}
