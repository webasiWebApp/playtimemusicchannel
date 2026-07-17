import { useState, useEffect } from "react";
import heroImg from "@/assets/hero-featured.jpg";
import thumb1 from "@/assets/thumb-1.jpg";
import thumb2 from "@/assets/thumb-2.jpg";
import thumb3 from "@/assets/thumb-3.jpg";

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

const slides: HeroSlide[] = [
  {
    image: heroImg,
    title: "NEON DREAMS",
    subtitle: "All Episodes Now Streaming",
    description: "A rising artist navigates the underground music scene, battling rival crews and personal demons.",
    tags: ["SERIES", "DRAMA", "TV-MA"],
  },
  {
    image: thumb1,
    title: "ZEPHYR LIVE",
    subtitle: "New Season Premiering",
    description: "Experience the raw energy of Zephyr's world tour captured in stunning cinematic detail.",
    tags: ["LIVE", "CONCERT", "TV-14"],
  },
  {
    image: thumb2,
    title: "DIGITAL PULSE",
    subtitle: "Now Streaming",
    description: "NOVA's groundbreaking documentary explores the intersection of technology and music.",
    tags: ["DOCUMENTARY", "MUSIC", "TV-PG"],
  },
  {
    image: thumb3,
    title: "GOLDEN HOUR",
    subtitle: "Exclusive Premiere",
    description: "Solana's intimate acoustic sessions reveal the stories behind her chart-topping hits.",
    tags: ["MUSIC", "ACOUSTIC", "TV-G"],
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[90vh] min-h-[550px] overflow-hidden">
      {/* Background image */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Content — left aligned like Paramount+ */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 lg:px-10 pb-24 max-w-2xl">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.05] mb-3 tracking-tight">
          {slide.title}
        </h1>
        <p className="font-body text-foreground font-semibold text-base sm:text-lg mb-2">
          {slide.subtitle}
        </p>
        <p className="font-body text-foreground/70 text-sm sm:text-base mb-4 max-w-lg">
          {slide.description}
        </p>

        {/* Tags */}
        <div className="flex items-center gap-2 mb-6">
          {slide.tags.map((tag, i) => (
            <span key={tag} className="flex items-center gap-2">
              <span className="font-body text-foreground/60 text-xs font-medium tracking-wider">{tag}</span>
              {i < slide.tags.length - 1 && <span className="text-foreground/30">|</span>}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button className="bg-primary hover:bg-accent text-primary-foreground px-10 py-3.5 text-sm font-body font-bold tracking-wider transition-colors w-fit">
          LEARN MORE ON PLAYTIME+
        </button>
      </div>

      {/* Dot indicators — bottom right */}
      <div className="absolute bottom-8 right-10 z-10 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? "bg-foreground scale-110" : "bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
