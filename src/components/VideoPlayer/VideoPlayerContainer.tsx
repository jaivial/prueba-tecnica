// src/components/VideoPlayer/VideoPlayerContainer.tsx
import { VideoType } from "@/data/video";
import { ThumbsUp, Eye } from "lucide-react";
import ReactPlayer from "react-player";

// SRP: UI component: responsible for just displaying final HTML.
const VideoPlayerContainer: React.FC<{ views: number; likes: number; video: VideoType; onClick: (id: number) => void }> = ({ video, onClick, likes, views }) => {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col gap-7 animate-fadeIn">
      <video src={video.url} controls autoPlay className="w-full h-auto mt-4 mx-auto rounded-3xl border-[15px] border-gray-100" />

      <div className="bg-gray-100 rounded-3xl max-w-[1280px] flex flex-col justify-center items-center gap-8 p-12">
        <div className="w-full flex flex-row justify-start items-center gap-12">
          <div className="flex flex-row items-center justify-start gap-7">
            <Eye size={28} />
            <p className="text-slate-950 text-2xl font-sans">{views}</p>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <div className="rounded-full h-12 w-12 md:hover:bg-slate-400 md:hover:cursor-pointer md:hover:text-slate-100 flex justify-center items-center" onClick={() => onClick(video.id)}>
              <ThumbsUp />
            </div>
            <p className="text-slate-950 text-2xl font-sans">{likes}</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-slate-950 text-2xl font-sans font-bold">Descripción</h2>
          <div className="bg-gray-300 bg-opacity-70 rounded-xl p-4">
            <p className="text-slate-950 font-sans text-base font-medium">{video.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerContainer;
