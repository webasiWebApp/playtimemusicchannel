import VideoCard from "./VideoCard";

import thumb1 from "@/assets/thumb-1.jpg";
import thumb2 from "@/assets/thumb-2.jpg";
import thumb3 from "@/assets/thumb-3.jpg";
import thumb4 from "@/assets/thumb-4.jpg";
import thumb5 from "@/assets/thumb-5.jpg";
import thumb6 from "@/assets/thumb-6.jpg";

const videos = [
  { thumbnail: thumb1, title: "Neon Dreams - Official Music Video", artist: "Zephyr", views: "2.4M", duration: "4:12", timeAgo: "3 days ago" },
  { thumbnail: thumb2, title: "Digital Pulse (Live Performance)", artist: "NOVA", views: "1.8M", duration: "3:45", isLive: true, timeAgo: "Streaming now" },
  { thumbnail: thumb3, title: "Golden Hour - Behind The Scenes", artist: "Solana", views: "3.1M", duration: "5:02", timeAgo: "1 week ago" },
  { thumbnail: thumb4, title: "Electric Fury - Extended Cut", artist: "Volt", views: "980K", duration: "4:38", timeAgo: "5 days ago" },
  { thumbnail: thumb5, title: "Frequency ft. Zephyr (Remix)", artist: "Waveform", views: "1.2M", duration: "3:21", timeAgo: "2 weeks ago" },
  { thumbnail: thumb6, title: "Shadows - Director's Commentary", artist: "KAGE", views: "2.7M", duration: "4:55", timeAgo: "4 days ago" },
  { thumbnail: thumb3, title: "Golden Hour Acoustic Session", artist: "Solana", views: "890K", duration: "6:12", timeAgo: "1 day ago" },
  { thumbnail: thumb1, title: "Neon Dreams - Lyric Video", artist: "Zephyr", views: "1.5M", duration: "4:10", timeAgo: "6 days ago" },
];

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-6">
      {videos.map((video, i) => (
        <VideoCard key={i} {...video} />
      ))}
    </div>
  );
};

export default VideoGrid;
