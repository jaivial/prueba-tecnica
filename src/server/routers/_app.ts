import { z } from 'zod';
import { procedure, router } from '../trpc';
import { video } from '@/data/video';

export const appRouter = router({
    getVideos: procedure.query(() => {
        // Devolvemos los datos de nuestra 'base de datos', no usamos async ya que es una BD local
        return video;
      }),
      getVideoById: procedure.input(z.object({ id: z.number() }))
      .query(( { input }) => {
        const matchingVideo = video.find((v) => v.id === input.id);
        if (!matchingVideo) {
          throw new Error("Video not found");
        }
        return matchingVideo;
      }),

      // Mutations
      // Increment like counter by id
      likeVideo: procedure
      .input(z.object({ id: z.number() }))
      .mutation(({ input }) => {
         const matchingVideo = video.find((v) => v.id === input.id);
         if (!matchingVideo) {
          throw new Error("video not found");
         }
         matchingVideo.likes += 1;
         return { success: true, likes: matchingVideo.likes };
      }),
      // Increment view counter by id every time the page is visited
      viewVideo: procedure
      .input(z.object({ id: z.number() }))
      .mutation(({ input }) => {
         const matchingVideo = video.find((v) => v.id === input.id);
         if (!matchingVideo) {
          throw new Error("video not found");
         }
         matchingVideo.views += 1;
         return { success: true, views: matchingVideo.views };
      }),
});
// export type definition of API
export type AppRouter = typeof appRouter;