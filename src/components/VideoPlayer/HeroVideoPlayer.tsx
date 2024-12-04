// src/components/VideoPlayer/HeroSection.tsx

// SRP: UI component: responsible for just displaying final HTML.
const HeroVideoPlayer: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="max-w-[1280px] mx-auto flex justify-center animate-fadeIn">
      <h2 className="text-5xl text-white text-center font-sans font-semibold">{title}</h2>
    </div>
  );
};

export default HeroVideoPlayer;
