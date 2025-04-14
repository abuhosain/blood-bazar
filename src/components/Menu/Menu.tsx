"use client";

import font from "@/utils/fonts";
import { FaBars, FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Donate Blood", link: "/donate" },
  { name: "Our Missions", link: "/missions" },
  { name: "Contact Us", link: "/contact" },
];

export default function Menu() {
  const [show, setShow] = useState(false);
  const path = usePathname();

  const mobile_menu_handler = () => {
    setShow(!show);
  };

  useEffect(() => {
    setShow(false);
  }, []);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 2xl:px-0 py-4 2xl:py-6 flex justify-between items-center relative">
        <div className="flex gap-2 items-center">
          <div className="w-10 h-10 bg-[#FF6969] rounded-lg"></div>
          <span className={`${font.acme.className} text-3xl`}>Blood Bazar</span>
        </div>

        <ul className="hidden gap-5 lg:flex lg:items-center">
          {links.map((page) => (
            <li
              key={page.link}
              className={`${font.karla.className} ${
                path === page.link ? "text-[#ff6969]" : ""
              } text-xl hover:text-[#ff6969] transition-all duration-300 uppercase`}
            >
              <Link href={`${page.link}`}>{page.name}</Link>
            </li>
          ))}

          <li>
            <Link
              href={"/search"}
              className="text-xl hover:text-[#ff6969] transition-all duration-300 flex items-center gap-3"
            >
              <FaSearch />
              <div className="w-[100px] h-8 bg-[#F3F3F3] rounded-lg flex items-center lg:pl-4">
                <span className="text-xl">Search</span>
              </div>
            </Link>
          </li>
        </ul>

        <div className="lg:hidden">
          <button onClick={mobile_menu_handler} className="text-2xl">
            <FaBars />
          </button>
          <div
            className={`fixed top-0 right-0 w-2/3 md:w-1/3 min-h-screen bg-[#ff9494] ${
              show ? "" : "hidden"
            } lg:hidden`}
          >
            <button onClick={mobile_menu_handler} className="text-2xl m-4">
              <ImCross />
            </button>
            <ul>
              {links.map((page) => (
                <li
                  key={page.link}
                  className={`${font.karla.className} ${
                    path === page.link ? "bg-black" : ""
                  } text-xl transition-all duration-300 uppercase text-white p-4 hover:bg-black`}
                >
                  <Link href={`${page.link}`}>{page.name}</Link>
                </li>
              ))}

              <li
                className={`${font.karla.className} ${
                  path === "/search" ? "bg-black" : ""
                } text-xl transition-all duration-300 uppercase text-white p-4 hover:bg-black`}
              >
                <Link
                  href={"/search"}
                  className="text-xl hover:text-[#ff6969] transition-all duration-300 flex items-center gap-3"
                >
                  <FaSearch />
                  <div className="w-[100px] h-8 bg-transparent rounded-lg flex items-center">
                    <span className="text-xl">Search</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
