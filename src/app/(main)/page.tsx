import About from "@/components/Home/About/About";
import Banner from "@/components/Home/Banner/Banner";
import Missions from "@/components/Home/Missions/Missions";

export default function Home() {
  return (
    <div className="space-y-[150px]">
      <Banner />
      <About />
      <Missions />
    </div>
  );
}
