// src/components/index/IndexContainer.tsx
import LottieVideoPlayer from "./LottieVideoPlayer";

// SRP: UI component: responsible for just displaying final HTML.
const HeroSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center p-12 animate-fadeIn">
      <div className="h-auto w-[300px] md:w-[500px] lg:-ml-[100px] transition-all ease-in-out duration-500">
        <LottieVideoPlayer />
      </div>
      <h2 className="bg-gradient-to-br from-gray-200 to-gray-500 text-transparent bg-clip-text text-5xl font-bold font-sans text-center lg:-ml-[100px] md:text-8xl sm:text-6xl transition-all ease-in-out duration-700">Video Player</h2>
    </div>
  );
};

export default HeroSection;
