import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ContentItem {
  thumbnail: string;
  title: string;
  subtitle?: string;
  badge?: string;
  isLive?: boolean;
}

interface ContentRowProps {
  title: string;
  viewAllLabel?: string;
  items: ContentItem[];
}

const ContentRow = ({ title, viewAllLabel = "ALL " + title.toUpperCase(), items }: ContentRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="mb-12">
      {/* Header */}
      <div className="flex items-center justify-between px-6 lg:px-10 mb-4">
        <h2 className="font-display text-foreground text-lg sm:text-xl font-bold">{title}</h2>
        <button className="text-primary hover:text-accent text-sm font-body font-bold tracking-wide transition-colors">
          {viewAllLabel}
        </button>
      </div>

      {/* Scrollable row */}
      <div className="relative group">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-0 bottom-0 z-20 w-14 bg-gradient-to-r from-background/90 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={28} className="text-foreground" />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-0 bottom-0 z-20 w-14 bg-gradient-to-l from-background/90 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={28} className="text-foreground" />
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-2 overflow-x-auto scrollbar-hide px-6 lg:px-10"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 cursor-pointer group/card w-[160px] sm:w-[180px]"
            >
              <div className="relative overflow-hidden aspect-[2/3] bg-card">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105"
                  loading="lazy"
                />
                {/* Hover border highlight */}
                <div className="absolute inset-0 border-2 border-transparent group-hover/card:border-foreground/30 transition-colors duration-200" />

                {/* Bottom gradient with title overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="font-display text-foreground text-sm font-bold leading-tight line-clamp-2">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentRow;
