import TopNav from "@/components/TopNav";
import HeroSection from "@/components/HeroSection";
import ContentRow from "@/components/ContentRow";
import FeatureBanner from "@/components/FeatureBanner";
import Footer from "@/components/Footer";

import thumb1 from "@/assets/thumb-1.jpg";
import thumb2 from "@/assets/thumb-2.jpg";
import thumb3 from "@/assets/thumb-3.jpg";
import thumb4 from "@/assets/thumb-4.jpg";
import thumb5 from "@/assets/thumb-5.jpg";
import thumb6 from "@/assets/thumb-6.jpg";

const series = [
  { thumbnail: thumb1, title: "Neon Dreams" },
  { thumbnail: thumb2, title: "Digital Pulse" },
  { thumbnail: thumb3, title: "Golden Hour" },
  { thumbnail: thumb4, title: "Electric Fury" },
  { thumbnail: thumb5, title: "Frequency" },
  { thumbnail: thumb6, title: "Shadows" },
  { thumbnail: thumb3, title: "Sunrise" },
  { thumbnail: thumb1, title: "Neon II" },
];

const movies = [
  { thumbnail: thumb4, title: "Volt Reloaded" },
  { thumbnail: thumb6, title: "Dark Matter" },
  { thumbnail: thumb2, title: "Nova Rising" },
  { thumbnail: thumb5, title: "Waveform" },
  { thumbnail: thumb1, title: "Neon Dreams" },
  { thumbnail: thumb3, title: "Golden Hour" },
  { thumbnail: thumb4, title: "Electric Fury" },
  { thumbnail: thumb6, title: "Shadows" },
];

const documentaries = [
  { thumbnail: thumb3, title: "Making of Golden Hour" },
  { thumbnail: thumb1, title: "Zephyr: Studio Sessions" },
  { thumbnail: thumb6, title: "KAGE — The Journey" },
  { thumbnail: thumb2, title: "NOVA: Origin Story" },
  { thumbnail: thumb5, title: "Waveform Process" },
  { thumbnail: thumb4, title: "Building Electric Fury" },
  { thumbnail: thumb3, title: "Behind Sunrise" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <HeroSection />

      <div className="relative z-10 -mt-16 pb-4">
        <ContentRow title="Series" viewAllLabel="ALL SERIES" items={series} />

        <FeatureBanner
          image={thumb4}
          title="ELECTRIC FURY"
          subtitle="New Series Now Streaming"
          description="Volt's explosive journey from underground raves to the world's biggest stages."
          align="right"
        />

        <ContentRow title="Movies" viewAllLabel="ALL MOVIES" items={movies} />

        <FeatureBanner
          image={thumb6}
          title="SHADOWS"
          subtitle="Now Streaming"
          description="KAGE explores the darkness between fame and anonymity in this gripping documentary."
          align="right"
        />

        <ContentRow title="Documentaries" viewAllLabel="ALL DOCUMENTARIES" items={documentaries} />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
