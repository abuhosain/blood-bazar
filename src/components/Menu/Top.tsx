import Link from "next/link";
import { FaSearch, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const social_media_links = [
  { icon: <FaFacebook />, name: "Facebook", link: "" },
  { icon: <FaYoutube />, name: "Youtube", link: "" },
  { icon: <FaInstagram />, name: "Instagram", link: "" },
];

export default function Top() {
  return (
    <div className="max-w-screen-2xl px-4 2xl:px-0 py-5 2xl:py-8 mx-auto flex justify-between">
      <Link
        href={"/"}
        className="text-3xl hover:text-[#ff6969] transition-all duration-300"
      >
        <FaSearch />
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
