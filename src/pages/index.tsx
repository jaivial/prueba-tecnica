import { trpc } from "../utils/trpc";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server/routers/_app";
import { VideoType } from "@/data/video";
import HeroSection from "../components/index/HeroSection";
import VideoList from "../components/index/VideoList";
import Footer from "@/components/index/Footer";

import "../styles/globals.css";

// SRP: Page component: responsible of context providers, ssr, and feature components.
export default function IndexPage({ videos }: { videos: VideoType }) {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 w-full min-h-dvh overflow-x-hidden p-10">
      <HeroSection />
      {/* Pass videos as props to the child component */}
      <VideoList videos={videos} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const trpcClient = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: process.env.NEXT_PUBLIC_TRPC_API_URL || "http://localhost:3000/api/trpc",
      }),
    ],
  });

  let videos: VideoType | null = null;

  try {
    videos = await trpcClient.getVideos.query();
  } catch (error) {
    console.error("Error fetching videos:", error);
  }

  return {
    props: {
      videos,
    },
  };
}
