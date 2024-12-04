import { appRouter } from '../server/routers/_app';
import { video } from '../data/video';


// Mock context for testing
const createContext = () => ({}); // Adjust if you have a context function

// Create a direct TRPC caller
const caller = appRouter.createCaller(createContext());

describe('appRouter', () => {
  describe('getVideos', () => {
    it('should return all videos', async () => {
      const videos = await caller.getVideos();
      expect(videos).toEqual(video); // Compare with the mock data
    });
  });

  describe('getVideoById', () => {
    it('should return the correct video by id', async () => {
      const videoId = 1; // Example ID
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
      const previousLikes = video.find((v) => v.id === videoId)?.likes || 0;

      const result = await caller.likeVideo({ id: videoId });

      expect(result.likes).toBe(previousLikes + 1);
    });

    it('should throw an error when video is not found', async () => {
      const videoId = 999; // Non-existent ID
      await expect(caller.likeVideo({ id: videoId })).rejects.toThrow('Video not found');
    });
  });

  describe('viewVideo', () => {
    it('should increment the view counter by 1', async () => {
      const videoId = 1;
      const previousViews = video.find((v) => v.id === videoId)?.views || 0;

      const result = await caller.viewVideo({ id: videoId });

      expect(result.views).toBe(previousViews + 1);
    });

    it('should throw an error when video is not found', async () => {
      const videoId = 999; // Non-existent ID
      await expect(caller.viewVideo({ id: videoId })).rejects.toThrow('Video not found');
    });
  });
});
