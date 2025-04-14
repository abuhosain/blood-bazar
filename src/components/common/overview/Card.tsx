import font from "@/utils/fonts";
import Image from "next/image";
import React from "react";

export default function Card({
  image,
  total,
  title,
}: {
  image: string;
  total: number;
  title: string;
}) {
  return (
    <div className="rounded-lg px-6 flex flex-col justify-center items-center gap-4">
      <Image
        className="w-[50px] h-[50px]"
        src={image}
        width={500}
        height={500}
        alt={title}
      />
      <h1
        className={`text-[#FF6969] text-3xl md:text-4xl ${font.acme.className} font-bold`}
      >
        {total}+
      </h1>
      <h2 className={`text-2xl ${font.karla.className}`}>{title}</h2>
    </div>
  );
}
