import * as SC from "./Hero.styled";
import { HomeScreen } from "./HomeScreen/HomeScreen";
import { ProblemScreen } from "./ProblemScreen/ProblemScreen";

const Hero = () => {
  return (
    <SC.Hero id="home">
      <HomeScreen />
      <ProblemScreen />
    </SC.Hero>
  );
};

export default Hero;
