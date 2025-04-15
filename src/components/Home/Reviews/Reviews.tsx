"use client";

import font from "@/utils/fonts";
import ReviewCard from "./ReviewCard";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Reviews() {
  return (
    <div className="container xl:max-w-6xl mx-auto px-4 xl:px-0">
      <div className="text-center mb-8">
        <h2 className="text-xl">Awesome Words From Members</h2>
        <div className="flex justify-center mt-2 mb-10">
          <div className="w-24 h-2 bg-[#ff6363] rounded-lg ml-1"></div>
        </div>
        <h3 className={`${font.acme.className} text-5xl`}>
          JOIN WITH US AND SAVE LIFE
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-1 flex items-center overflow-hidden">
          <Swiper pagination>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex-1">
          <Image
            className="w-full"
            src={"/review.png"}
            width={400}
            height={400}
            alt="review section picture"
          />
        </div>
      </div>
    </div>
  );
}
