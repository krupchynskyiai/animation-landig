import { CardsList } from "./CardsList/CardsList";
import * as SC from "./HowItWorks.styled";

const HowItWorks = () => {
  return (
    <SC.HowItWorksSection id="how-it-works">
      <SC.HowItWorksContainer>
        <CardsList />
      </SC.HowItWorksContainer>
    </SC.HowItWorksSection>
  );
};

export default HowItWorks;
