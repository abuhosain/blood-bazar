import font from "@/utils/fonts";
import Image from "next/image";
import img from "../../../../public/volunteer.png";
import "./aboutpage.css";
import Overview from "@/components/common/overview/Overview";
import About from "@/components/common/About/About";

const volunteers = [
  { image: img, name: "John Abraham", title: "Manager" },
  { image: img, name: "John Abraham", title: "Manager" },
  { image: img, name: "John Abraham", title: "Manager" },
  { image: img, name: "John Abraham", title: "Manager" },
  { image: img, name: "John Abraham", title: "Manager" },
  { image: img, name: "John Abraham", title: "Manager" },
];

export default function page() {
  return (
    <div className="space-y-[80px] lg:space-y-[140px]">
      <div className="about-page-bg w-full h-[300px] flex justify-center items-center">
        <h1 className={`${font.acme.className} text-[#FF6969] text-5xl`}>
          About Us
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-4 xl:px-0">
        <div className="text-center">
          <h3 className={`${font.acme.className} text-4xl`}>Our Volunteers</h3>
          <div className="flex justify-center mt-2 mb-8">
            <div className="w-24 h-2 bg-[#ff6363] rounded-lg ml-1"></div>
          </div>
          <p className={`${font.karla.className} text-xl`}>
            Volunteers who gave their time and talent to fulfill our mission
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-5">
          {volunteers.map((vol, index) => (
            <div
              key={index + "volunteersCard"}
              className="bg-[#d9d9d97e] rounded-lg p-5"
            >
              <Image
                className="w-full rounded-lg"
                src={vol.image}
                width={200}
                height={200}
                alt={vol.name}
              />

              <div className="text-center space-y-3 pt-5">
                <h3 className={`${font.acme.className} text-3xl font-bold`}>
                  {vol.name}
                </h3>
                <h4 className={`${font.karla.className} text-xl`}>
                  {vol.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#ff636370] py-20">
        <div className="max-w-5xl mx-auto px-4 xl:px-0">
          <Overview />
        </div>
      </div>

      <About />

      <div></div>
    </div>
  );
}
