import districts from "@/utils/districts";
import React, { useEffect, useState } from "react";

export default function Form() {
  const [district, setDistrict] = useState("SELECT");
  const [thanas, setThanas] = useState<string[] | undefined>([]);

  //find selected district
  const handle_district_select = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value == "SELECT") {
      setDistrict("null");
      return;
    }
    setDistrict(e.target.value);
  };

  //set thanas based on selected district
  const handle_district_thanas = (selected_district: string) => {
    const thanas = districts.find(
      (dis) => dis.name == selected_district
    )?.thanas;

    setThanas(thanas);
  };

  useEffect(() => {
    handle_district_thanas(district);
  }, [district]);

  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-4">
      {/* name form */}
      <div>
        <h3 className="font-semibold uppercase">Full Name</h3>
        <input
          type="text"
          className="py-2 px-3 border-2 rounded-lg mt-2 w-full"
          placeholder="Enter name here"
        />
      </div>

      {/* Email form */}
      <div>
        <h3 className="font-semibold uppercase">Enter Email</h3>
        <input
          type="email"
          className="py-2 px-3 border-2 rounded-lg mt-2 w-full"
          placeholder="Enter email here"
        />
      </div>
      {/* Zila and Upazila */}
      <div className="flex justify-between gap-4">
        <div className="w-full">
          <h3 className="font-semibold uppercase">District</h3>
          <select
            onChange={handle_district_select}
            defaultValue={"SELECT"}
            className="py-2 w-full rounded-lg mt-[10px] border-2"
          >
            <option>SELECT</option>
            {districts.map((dis) => (
              <option key={dis.name} className="uppercase">
                {dis.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <h3 className="font-semibold uppercase">Upazila</h3>
          <select className="py-2 w-full rounded-lg mt-[10px] border-2">
            <option>SELECT</option>
            {thanas?.map((thana) => (
              <option key={thana}>{thana}</option>
            ))}
          </select>
        </div>
      </div>
      {/* Address form */}
      <div>
        <h3 className="font-semibold uppercase">Address</h3>
        <input
          type="text"
          className="py-2 px-3 border-2 rounded-lg mt-2 w-full"
          placeholder="Enter address here"
        />
      </div>
    </div>
  );
}
