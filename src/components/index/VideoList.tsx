// src/components/index/VideoList.tsx
import { VideoType } from "@/data/video";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CirclePlay } from "lucide-react";
import { useRouter } from "next/router";
import { ThumbsUp, Eye } from "lucide-react";

// SRP: UI component: responsible for just displaying final HTML.
const VideoList: React.FC<{ videos: VideoType }> = ({ videos }) => {
  const router = useRouter();

  const cardStyle = {
    transition: "all 500ms ease-in-out !important",
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-6 animate-fadeIn">
      <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold py-8 text-center transition-all ease-in-out duration-500">Selecciona un vídeo de la lista para reproducirlo.</h2>
      <div className="flex flex-row justify-center items-center gap-12 flex-wrap">
        {videos?.map((video) => (
          <Card key={video.id} className="w-[350px] h-[500px] flex flex-col justify-between md:hover:bg-slate-200 md:hover:cursor-pointer md:hover:w-[390px] md:hover:h-[550px] group" style={cardStyle} onClick={() => router.push(`/${video.id}`)}>
            <CardHeader>
              <CardTitle className="text-2xl">{video.titulo}</CardTitle>
              <CardDescription>{video.subtitulo}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-56 rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${video.coverPhoto})` }}></div>
            </CardContent>
            <CardFooter className="flex flex-col justify-center items-center gap-2">
              <div className="flex flex-row justify-center items-center gap-8">
                <div className="flex flex-row justify-center items-center gap-3">
                  <ThumbsUp size={20} />
                  <p>{video.likes}</p>
                </div>
                <div className="flex flex-row justify-center items-center gap-3">
                  <Eye size={20} />
                  <p>{video.views}</p>
                </div>
              </div>
              <Button className="mx-auto md:group-hover:text-lg md:group-hover:p-5 transition-all ease-in-out duration-500" variant="default" onClick={() => router.push(`/${video.id}`)}>
                <CirclePlay />
                Reproducir
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
