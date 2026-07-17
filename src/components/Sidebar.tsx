import { Home, TrendingUp, Radio, Music, Heart, Clock, ThumbsUp, Flame, Library, ChevronRight } from "lucide-react";

interface SidebarProps {
  expanded: boolean;
}

const mainItems = [
  { icon: Home, label: "Home" },
  { icon: Flame, label: "Trending" },
  { icon: Radio, label: "Live" },
  { icon: Music, label: "Music" },
];

const libraryItems = [
  { icon: Clock, label: "History" },
  { icon: Heart, label: "Liked" },
  { icon: ThumbsUp, label: "Your videos" },
  { icon: Library, label: "Playlists" },
];

const subscriptions = [
  { name: "Zephyr", initial: "Z" },
  { name: "NOVA", initial: "N" },
  { name: "Solana", initial: "S" },
  { name: "Volt", initial: "V" },
  { name: "KAGE", initial: "K" },
];

const Sidebar = ({ expanded }: SidebarProps) => {
  return (
    <aside
      className={`fixed left-0 top-14 h-[calc(100vh-3.5rem)] z-40 bg-background transition-all duration-200 overflow-y-auto overflow-x-hidden scrollbar-hide ${
        expanded ? "w-56" : "w-[72px]"
      }`}
    >
      {/* Main nav */}
      <div className={`${expanded ? "px-3 py-2" : "px-1 py-2"}`}>
        {mainItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center w-full rounded-lg transition-colors text-foreground hover:bg-secondary ${
              expanded
                ? "gap-5 px-3 py-2.5"
                : "flex-col gap-0.5 px-1 py-3 text-center"
            } ${item.label === "Home" ? "bg-secondary" : ""}`}
          >
            <item.icon size={20} className="flex-shrink-0" />
            <span className={`font-body whitespace-nowrap ${
              expanded ? "text-sm" : "text-[10px]"
            }`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* Expanded-only sections */}
      {expanded && (
        <>
          <div className="border-t border-border mx-3 my-2" />

          {/* Library */}
          <div className="px-3 py-1">
            <div className="flex items-center justify-between px-3 mb-1">
              <span className="text-foreground font-body text-sm font-medium">Library</span>
              <ChevronRight size={16} className="text-muted-foreground" />
            </div>
            {libraryItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-5 px-3 py-2 w-full rounded-lg text-foreground hover:bg-secondary transition-colors"
              >
                <item.icon size={20} className="flex-shrink-0" />
                <span className="text-sm font-body">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="border-t border-border mx-3 my-2" />

          {/* Subscriptions */}
          <div className="px-3 py-1">
            <h3 className="px-3 mb-1 text-foreground font-body text-sm font-medium">Subscriptions</h3>
            {subscriptions.map((sub) => (
              <button
                key={sub.name}
                className="flex items-center gap-5 px-3 py-2 w-full rounded-lg text-foreground hover:bg-secondary transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-body font-semibold text-foreground">{sub.initial}</span>
                </div>
                <span className="text-sm font-body">{sub.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
