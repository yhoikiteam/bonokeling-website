import Navbar from "@/components/Navbar";
import HeroSection from "@/components/page/HeroSection";
import EventHighlightSection from "@/components/page/2Section";
import EventCard from "@/components/page/3Section";
import VideoCard from "@/components/page/4Section";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="pt-24">
        <HeroSection />
        <EventHighlightSection/>
        <EventCard/>
        <VideoCard/>
      </main>
    </div>
  );
}
