import { trpc } from "@/utils/trpc";
import { useState } from "react";

const useHandleLike = (videoLikes: number | undefined | null) => {
  // Asegurar que likes sea un número, con valor predeterminado de 0
  const initialLikes = typeof videoLikes === 'number' ? videoLikes : 0;
  const [likes, setLikes] = useState<number>(initialLikes);
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