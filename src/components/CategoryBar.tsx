import { useState } from "react";

const categories = ["All", "Music", "Live", "Hip-Hop", "Electronic", "R&B", "Rock", "Pop", "Latin", "Afrobeats", "Jazz", "Indie", "Playlists", "New to you"];

const CategoryBar = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="sticky top-14 z-30 bg-background/95 backdrop-blur-md border-b border-border px-6 py-2">
      <div className="flex items-center gap-2.5 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-3 py-1.5 rounded-lg text-sm font-body font-medium whitespace-nowrap transition-all duration-150 ${
              active === cat
                ? "bg-foreground text-background"
                : "bg-secondary text-foreground hover:bg-muted"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
