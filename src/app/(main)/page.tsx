import Overview from "@/components/common/overview/Overview";
import About from "@/components/Home/About/About";
import Banner from "@/components/Home/Banner/Banner";
import Missions from "@/components/Home/Missions/Missions";
import Reviews from "@/components/Home/Reviews/Reviews";

export default function Home() {
  return (
    <div className="space-y-[150px]">
      <Banner />
      <div className="container mx-auto">
        <Overview />
      </div>
      <About />
      <Missions />
      <Reviews />
      <div></div>
    </div>
  );
}
