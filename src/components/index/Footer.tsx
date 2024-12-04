// src/components/index/Footer.tsx
import { Mail, Instagram, Linkedin, SquareArrowOutUpRight } from "lucide-react";
const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-row justify-between items-center mt-24 p-4 pb-10 h-auto">
      <div className="flex justify-center items-center flex-col w-1/3">
        <p className="text-white font-sans text-base text-start">Developed by Jaime Villanueva Alcon ©</p>
      </div>
      <div className="flex flex-row flex-wrap w-1/3 gap-6">
        <div className="flex flex-col gap-4 justify-center items-start max-w-1/2">
          <div className="text-white flex flex-row gap-4 items-center justify-start">
            <Mail />
            <a href="mailto:jaimevillalcon@hotmail.com" className="text-white text-base font-sans hover:underline">
              jaimevillalcon@hotmail.com
            </a>
          </div>
          <div className="text-white flex flex-row gap-4 items-center justify-start">
            <Instagram />
            <a href="https://www.instagram.com/jaimedigitalstudio" className="text-white text-base font-sans hover:underline">
              @jaimedigitalstudio
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-start max-w-1/2">
          <div className="text-white flex flex-row gap-4 items-center justify-start">
            <SquareArrowOutUpRight />
            <a href="https://jaimedigitalstudio.com/" className="text-white text-base font-sans hover:underline">
              jaimedigitalstudio.com
            </a>
          </div>
          <div className="text-white flex flex-row gap-4 items-center justify-start">
            <Linkedin />
            <a href="https://www.linkedin.com/in/jaime-villanueva-alcon-12a9341a2/" className="text-white text-base font-sans hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
