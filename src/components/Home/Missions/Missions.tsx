import Button from "@/components/common/Button";
import font from "@/utils/fonts";
import Image from "next/image";

const missions = [
  {
    img: "/mission-pics/missions.png",
    title: "Donate Blood",
    description:
      "The most direct way to make a difference is by donating blood. Every donation has the potential to save lives.",
  },
  {
    img: "/mission-pics/missions.png",
    title: "Donate Blood",
    description:
      "The most direct way to make a difference is by donating blood. Every donation has the potential to save lives.",
  },
  {
    img: "/mission-pics/missions.png",
    title: "Donate Blood",
    description:
      "The most direct way to make a difference is by donating blood. Every donation has the potential to save lives.",
  },
];

export default function Missions() {
  return (
    <div className="bg-[#ff696968] py-24">
      <div className={font.karla.className}>
        <div className="container mx-auto px-4 xl:px-0">
          <h2 className={`${font.acme.className} text-5xl text-center`}>
            Your Support Is Invalueable
          </h2>
          <div className="flex justify-center mt-2 mb-10">
            <div className="w-24 h-2 bg-[#ff6363] rounded-lg ml-1"></div>
          </div>
          <p className="text-center text-xl font-semibold">
            There are many ways you can contribute to our mission of saving
            lives through blood donation
          </p>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 xl:gap-10">
            {missions.map((mission, index) => (
              <div
                key={mission.title + index}
                className="bg-white p-5 rounded-lg w-full"
              >
                <Image
                  className="w-full"
                  src={mission.img}
                  width={300}
                  height={250}
                  alt={mission.title}
                />

                <h3 className="text-3xl xl:text-4xl font-semibold mt-4">
                  {mission.title}
                </h3>
                <p className="text-xl text-justify my-4">
                  {mission.description}
                </p>
                <div className="flex justify-end">
                  <Button
                    btn_primary={false}
                    text="Learn More"
                    styles="text-black border border-black hover:bg-[#ff6969] hover:border-[#ff6969] hover:text-white"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
