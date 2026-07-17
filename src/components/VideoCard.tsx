import { useState } from "react";
import { Clock, MoreVertical } from "lucide-react";

interface VideoCardProps {
  thumbnail: string;
  title: string;
  artist: string;
  views: string;
  duration: string;
  isLive?: boolean;
  avatar?: string;
  timeAgo?: string;
}

const VideoCard = ({ thumbnail, title, artist, views, duration, isLive, timeAgo = "2 days ago" }: VideoCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-card">
        <img
          src={thumbnail}
          alt={`${title} by ${artist}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Duration / Live badge */}
        <div className="absolute bottom-2 right-2">
          {isLive ? (
            <span className="flex items-center gap-1 bg-primary px-2 py-0.5 rounded text-xs font-body font-semibold text-primary-foreground uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground live-pulse" />
              Live
            </span>
          ) : (
            <span className="bg-background/80 px-1.5 py-0.5 rounded text-xs font-body text-foreground font-medium">
              {duration}
            </span>
          )}
        </div>

        {/* Hover preview bar */}
        {hovered && !isLive && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
            <div className="h-full bg-primary" style={{ width: "35%" }} />
          </div>
        )}

        {/* Watch later on hover */}
        {hovered && (
          <div className="absolute top-2 right-2 flex flex-col gap-1">
            <button className="bg-background/80 p-1 rounded text-foreground hover:bg-background transition-colors">
              <Clock size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Info row: avatar + text */}
      <div className="flex gap-3">
        {/* Channel avatar */}
        <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-foreground font-display text-xs font-bold">
            {artist.charAt(0).toUpperCase()}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-body font-medium text-foreground text-sm leading-snug line-clamp-2">
              {title}
            </h3>
            <button className="text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5">
              <MoreVertical size={16} />
            </button>
          </div>
          <p className="text-muted-foreground text-xs font-body mt-1 hover:text-foreground transition-colors">
            {artist}
          </p>
          <p className="text-muted-foreground text-xs font-body">
            {views} views · {timeAgo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
