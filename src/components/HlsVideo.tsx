import { useEffect, useRef } from "react";
import Hls from "hls.js";

const SRC = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

const HlsVideo = ({ className = "" }: { className?: string }) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(SRC);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = SRC;
    }
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      loop
      muted
      playsInline
      className={`absolute inset-0 w-full h-full object-cover z-0 ${className}`}
    />
  );
};

export default HlsVideo;
