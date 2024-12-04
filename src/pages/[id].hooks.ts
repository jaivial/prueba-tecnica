import { trpc } from "@/utils/trpc";
import { useState } from "react";

const useHandleLike = (videoLikes: number) => {
const [likes, setLikes] = useState<number>(videoLikes);
  const incrementLike = trpc.likeVideo.useMutation();

  const handleLike = async (id: number) => {
    try {
      const response = await incrementLike.mutateAsync({ id });
      console.log(`New likes count: ${response.likes}`);
      setLikes(response.likes);
    } catch (error) {
      console.error("Error incrementing likes:", error);
      return null;
    }
  };

  return { handleLike, likes };
};

export default useHandleLike;