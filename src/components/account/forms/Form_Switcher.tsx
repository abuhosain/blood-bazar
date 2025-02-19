"use client";

import font from "@/utils/fonts";
import { useState } from "react";
import { FaArrowsRotate } from "react-icons/fa6";
import Donor_Register from "./Donor_Register";
import Blood_Bank_Register from "./Blood_Bank_Register";
import Link from "next/link";

export default function Form_Switcher() {
  const [form, setForm] = useState(true);

  const handle_switch_register_form = () => {
    setForm(!form);
  };

  return (
    <div className="w-[1024px] bg-white rounded-lg p-4">
      <div className="flex justify-between mb-5">
        <div>
          <h1 className={`${font.acme.className} text-2xl md:text-4xl`}>
            Register as a {form ? "Donor" : "Blood Bank"}
          </h1>
          <div className="w-24 h-2 bg-[#ff6363] rounded-lg ml-1 mt-1"></div>
        </div>
        <button onClick={handle_switch_register_form}>
          <FaArrowsRotate className="text-3xl" />
        </button>
      </div>

      {form ? <Donor_Register /> : <Blood_Bank_Register />}

      <div className="flex justify-between items-center mt-5">
        <p>Already have an account?</p>
        <Link href={"/account/sign-in"} className="text-[#ff6969]">
          Sign In
        </Link>
      </div>
    </div>
  );
}
