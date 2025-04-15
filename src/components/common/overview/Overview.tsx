"use client";

import useIncreamentor from "@/utils/increamentor";
import { useState, useEffect } from "react";
import Card from "./Card";

const overview = [
  {
    img: "/overview/overview1.png",
    total: 400,
    title: "Success Smile",
  },
  {
    img: "/overview/overview2.png",
    total: 594,
    title: "Happy Donors",
  },
  {
    img: "/overview/overview3.png",
    total: 652,
    title: "Happy Recipient",
  },
  {
    img: "/overview/overview4.png",
    total: 119,
    title: "Blood Blanks",
  },
];

export default function Overview() {
  const [total1, setTotal1] = useState<number>(0);
  const [total2, setTotal2] = useState<number>(0);
  const [total3, setTotal3] = useState<number>(0);
  const [total4, setTotal4] = useState<number>(0);
  const [scrollValue, setScrollValue] = useState<number>(0);
  const [isCount, setIsCount] = useState<boolean>(false);

  useIncreamentor(isCount, total1, setTotal1, overview[0].total);
  useIncreamentor(isCount, total2, setTotal2, overview[1].total);
  useIncreamentor(isCount, total3, setTotal3, overview[2].total);
  useIncreamentor(isCount, total4, setTotal4, overview[3].total);

  useEffect(() => {
    if (scrollValue > 500) {
      setIsCount(true);
    }
    window.addEventListener("scroll", () => {
      setScrollValue(window.scrollY);
    });
  }, [scrollValue]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
      <Card image={overview[0].img} total={total1} title={overview[0].title} />
      <Card image={overview[1].img} total={total2} title={overview[1].title} />
      <Card image={overview[2].img} total={total3} title={overview[2].title} />
      <Card image={overview[3].img} total={total4} title={overview[3].title} />
    </div>
  );
}
