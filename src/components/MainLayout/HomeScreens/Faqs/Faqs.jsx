import { CardsList } from "./CardsList/CardsList";
import { GetStartedBtn } from "./GetStartedBtn/GetStartedBtn";
import * as SC from "./Faqs.styled";

const Faqs = () => {
  return (
    <SC.FaqsSection id="faqs">
      <SC.FaqsContainer>
        <CardsList />
        <GetStartedBtn />
      </SC.FaqsContainer>
    </SC.FaqsSection>
  );
};

export default Faqs;
