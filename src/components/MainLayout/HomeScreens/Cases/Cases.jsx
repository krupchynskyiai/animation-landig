import * as SC from "./Cases.styled";
import { CardsList } from "./CardsList/CardsList";
import { Title } from "./Title/Title";

const Cases = () => {
  return (
    <SC.CasesSection id="cases">
      <SC.CasesContainer>
        <Title />
        <CardsList />
      </SC.CasesContainer>
    </SC.CasesSection>
  );
};

export default Cases;
