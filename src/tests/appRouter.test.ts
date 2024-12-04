import { appRouter } from '../server/routers/_app';
import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import { video } from '../data/video';

const t = initTRPC.create();

const createTestContext = () => {
  // Your test context, e.g., mock the database if needed
  return {};
};

const caller = appRouter.createCaller(createTestContext());

describe('appRouter', () => {
  describe('getVideos', () => {
    it('should return all videos', async () => {
      const videos = await caller.getVideos();
      expect(videos).toEqual(video);
    });
  });

  describe('getVideoById', () => {
    it('should return the correct video by id', async () => {
      const videoId = 1; // Example ID, adjust as needed
      const result = await caller.getVideoById({ id: videoId });
      expect(result.id).toBe(videoId);
    });

    it('should throw an error when video is not found', async () => {
      const videoId = 999; // Non-existent ID
      await expect(caller.getVideoById({ id: videoId })).rejects.toThrow('Video not found');
    });
  });

  describe('likeVideo', () => {
    it('should increment the like counter by 1', async () => {
      const videoId = 1;
      const result = await caller.likeVideo({ id: videoId });
      const updatedVideo = video.find((v) => v.id === videoId);
      expect(result.likes).toBe(updatedVideo?.likes);
    });

    it('should throw an error when video is not found', async () => {
      const videoId = 999; // Non-existent ID
      await expect(caller.likeVideo({ id: videoId })).rejects.toThrow('video not found');
    });
  });

  describe('viewVideo', () => {
    it('should increment the view counter by 1', async () => {
      const videoId = 1;
      const result = await caller.viewVideo({ id: videoId });
      const updatedVideo = video.find((v) => v.id === videoId);
      expect(result.views).toBe(updatedVideo?.views);
    });

    it('should throw an error when video is not found', async () => {
      const videoId = 999; // Non-existent ID
      await expect(caller.viewVideo({ id: videoId })).rejects.toThrow('video not found');
    });
  });
});
