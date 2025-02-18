import Link from "next/link";
import font from "@/utils/fonts";
import Button from "@/components/common/Button";
import "./banner.css";

export default function Banner() {
  return (
    <div
      className={`banner h-[730px] flex items-center ${font.karla.className}`}
    >
      <div className="container mx-auto">
        <div className="p-4 2xl:p-0">
          <span className="text-2xl md:text-2xl font-semibold text-white">
            Lets Donate
          </span>
          <h1
            className={`${font.acme.className} text-6xl md:text-7xl text-[#ff6969] lg:w-1/2 capitalize my-7`}
          >
            A Drop for You, A Life for someone else
          </h1>
          <h2 className="text-2xl md:text-3xl text-white">
            All types of blood are needed to help patients.
          </h2>

          <div className="mt-10 flex gap-5 items-center">
            <Link href={"/"}>
              <Button text="Donate Now" btn_primary={true} styles="" />
            </Link>
            <Link href={"/"}>
              <Button text="Sign Up" btn_primary={false} styles="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
