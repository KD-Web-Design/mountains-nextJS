import { Suspense } from "react";
import { list } from "@vercel/blob";

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
    <video
      preload="auto"
      aria-label="Video player"
      loop
      muted
      autoPlay
      controls
    >
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
