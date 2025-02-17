import Link from "next/link";
import { FaSearch, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const social_media_links = [
  { icon: <FaFacebook />, name: "Facebook", link: "" },
  { icon: <FaYoutube />, name: "Youtube", link: "" },
  { icon: <FaInstagram />, name: "Instagram", link: "" },
];

export default function Top() {
  return (
    <div className="py-8 flex justify-between">
      <Link
        href={"/"}
        className="text-3xl hover:text-[#ff6969] transition-all duration-300"
      >
        <FaSearch />
      </Link>

      <ul className="flex gap-5">
        {social_media_links.map((link) => (
          <li key={`social_media_${link.name}`} className="text-3xl">
            <Link href={"/"}>{link.icon}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
