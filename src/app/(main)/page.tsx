import About from "@/components/Home/About/About";
import Banner from "@/components/Home/Banner/Banner";

export default function Home() {
  return (
    <div className="space-y-[150px]">
      <Banner />
      <About />
    </div>
  );
}
