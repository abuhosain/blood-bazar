import font from "@/utils/fonts";
import Button from "@/components/common/Button";
import Link from "next/link";
import "./about.css";

export default function About() {
  return (
    <div
      className={`${font.karla.className} about-bg h-[600px] flex items-center`}
    >
      <div className="container px-4 md:px-0 mx-auto flex justify-end">
        <div className="text-left md:w-[46%]">
          <span className="text-xl text-[#ff6363] font-semibold">
            Make an Impact
          </span>

          <div>
            <h2
              className={`${font.acme.className} text-6xl mt-3 text-white md:text-black`}
            >
              Who We Are
            </h2>
            <div className="w-24 h-2 bg-[#ff6363] rounded-lg ml-1"></div>
          </div>

          <div className="my-10 text-white md:text-black">
            <p className="text-xl font-bold">
              We are a dedicated nonprofit blood donation center committed to
              saving lives and strengthening communities
            </p>
            <p className="mt-3">
              We believe in the power of community and the life-saving impact of
              blood donation. Our mission is to ensure a steady supply of safe
              and accessible blood for patients in need. We are dedicated to
              raising awareness about the importance of blood donation and
              providing support to donors throughout their journey.
            </p>
          </div>

          <Link href={"/"}>
            <Button
              text="Learn More"
              btn_primary={true}
              styles="uppercase text-white border border-[#ff6363] hover:text-black hover:border-black hover:bg-transparent"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
