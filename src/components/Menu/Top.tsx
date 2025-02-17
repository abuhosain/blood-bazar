import Link from "next/link";
import { FaSearch, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const social_media_links = [
  { icon: <FaFacebook />, name: "Facebook", link: "" },
  { icon: <FaYoutube />, name: "Youtube", link: "" },
  { icon: <FaInstagram />, name: "Instagram", link: "" },
];

export default function Top() {
  return (
    <div className="container px-4 2xl:px-0 py-5 2xl:py-8 mx-auto flex justify-between">
      <Link
        href={"/"}
        className="text-3xl hover:text-[#ff6969] transition-all duration-300 flex items-center gap-3"
      >
        <FaSearch />
        <div className="w-[160px] md:w-[200px] h-8 bg-[#F3F3F3] rounded-lg flex items-center pl-4">
          <span className="text-xl">Search</span>
        </div>
      </Link>

      <ul className="flex gap-5">
        {social_media_links.map((page) => (
          <li key={`social_media_${page.name}`} className="text-3xl">
            <Link href={"/"}>{page.icon}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
