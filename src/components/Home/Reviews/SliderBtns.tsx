"use client";

import { useSwiper } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function SliderBtns() {
  const slider = useSwiper();

  return (
    <div className="flex items-center gap-5">
      <button
        onClick={() => slider.slidePrev()}
        className="p-3 hover:text-[#FF6969] transition-colors"
      >
        <FaArrowLeft className="text-xl" />
      </button>
      <button
        onClick={() => slider.slideNext()}
        className="p-3 hover:text-[#FF6969] transition-colors"
      >
        <FaArrowRight className="text-xl" />
      </button>
    </div>
  );
}
