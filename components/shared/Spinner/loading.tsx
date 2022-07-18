import Lottie from "lottie-react";
import lightAnimation from "./light.loader.json";
import buttonLoader from "./button.loader.json";

interface IProps {
  isWhite?: boolean;
  size?: number;
}

const Loading = (props: IProps) => {
  const {size, isWhite} = props;
  const defaultOptions = {
    autoplay: true,
    animationData: isWhite ? buttonLoader : lightAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie animationData={defaultOptions.animationData} loop width={size} height={size}/>;
};

export default Loading;