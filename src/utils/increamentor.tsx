"use client";

import { useEffect } from "react";
const useIncrementor = (
  countState: boolean,
  count: number,
  countFunc: React.Dispatch<React.SetStateAction<number>>,
  countTo: number
) => {
  useEffect(() => {
    if (!countState || count >= countTo) {
      return;
    }

    const interval = setInterval(() => {
      countFunc((prevTotal) => prevTotal + 2);
    }, 10);

    return () => clearInterval(interval);
  }, [countState, count, countFunc, countTo]);
};

export default useIncrementor;
