import { Suspense } from "react";
import { list } from "@vercel/blob";
import Hero from "./Hero";

export default function Video() {
  return (
    <Suspense fallback={<p>Loading video...</p>}>
      <VideoComponent fileName="drone-mountain-c1Se7uME7LAFrIfdxdTMIGGN9GfBMa.mp4" />
    </Suspense>
  );
}

async function VideoComponent({ fileName }: { fileName: string }) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  });

  const { url } = blobs[0];

  return (
    <main>
      <div className="relative">
        <video
          preload="auto"
          aria-label="Video player"
          loop
          // autoPlay
          muted
          className="w-full h-screen object-cover -z-10"
        >
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-1/4 left-4 md:left-8 lg:left-12">
          <Hero />
        </div>
      </div>
    </main>
  );
}
