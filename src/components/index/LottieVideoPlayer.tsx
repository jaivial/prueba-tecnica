import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// SRP: UI component: responsible for just displaying final HTML.
const LottieVideoPlayer: React.FC = () => {
  return <DotLottieReact src="https://lottie.host/0fc50638-a136-4d15-ac15-3eb0ac911fc2/i1ywqvYu3y.lottie" loop autoplay />;
};

export default LottieVideoPlayer;
