import { GetServerSideProps } from "next";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@/server/routers/_app";
import { VideoType } from "@/data/video";
import HeroVideoPlayer from "@/components/VideoPlayer/HeroVideoPlayer";
import BreadCrumb from "@/components/VideoPlayer/BreadCrumb";
import VideoPlayerContainer from "@/components/VideoPlayer/VideoPlayerContainer";
import Footer from "@/components/index/Footer";
import useHandleLike from "./[id].hooks";

type VideoPageProps = {
  video: VideoType | null; // Expect a single video
  views: { success: boolean; views: number };
};

// SRP: Page component: responsible of context providers, ssr, and feature components.
export default function VideoPlayer({ video, views }: VideoPageProps) {
  const { handleLike, likes } = useHandleLike(video ? Number(video.likes) : 0);

  // Si no hay video, esto solo debería ocurrir por un momento antes de la redirección
  if (!video) {
    return (
      <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 w-full h-screen flex justify-center items-center">
        <div className="text-white text-xl">Redireccionando a la página principal...</div>
      </div>
    );
  }

  // Asegurar que tenemos un objeto views válido
  const viewCount = views?.views || 0;

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 w-full h-[calc] overflow-x-hidden relative p-10">
      <HeroVideoPlayer title={video.titulo} />
      <BreadCrumb title={video.titulo} />
      <VideoPlayerContainer video={video} onClick={handleLike} likes={likes} views={viewCount} />
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Create tRPC Client
  const trpcClient = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: process.env.NEXT_PUBLIC_TRPC_API_URL || "http://localhost:3000/api/trpc",
      }),
    ],
  });

  const { id } = context.params!;

  // Validar que el ID existe y es un número válido
  if (!id || isNaN(parseInt(id as string, 10))) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const videoId = parseInt(id as string, 10);

  type viewsType = {
    success: boolean;
    views: number;
  };

  let video: VideoType | null = null;
  let views: viewsType | null = null;

  try {
    video = await trpcClient.getVideoById.query({ id: videoId });
    views = await trpcClient.viewVideo.mutate({ id: videoId });
  } catch (error) {
    console.error("Error fetching video:", error);
    // Si ocurre un error (por ejemplo, video no encontrado), redirigir a la página principal
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      video, // Return a single video
      views,
    },
  };
};
