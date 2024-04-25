import {
  DarkOverlay,
  LogoContent,
  LogoWrapper,
  NameImg,
} from "../../styles/Home.modules";
import textImg from "../../assets/text-rotate.png";
import nameImg from "../../assets/CWJ.png";

function Logo() {
  return (
    <LogoWrapper>
      <LogoContent>
        <img src={textImg} alt="textImg" className="item" />
      </LogoContent>
      <DarkOverlay />
      <NameImg src={nameImg} alt="textImg" />
    </LogoWrapper>
  );
}

export default Logo;
