import * as SC from "./Cases.styled";
import { CardsList } from "./Title/CardsList/CardsList";
import { Title } from "./Title/Title";

const Cases = () => {
  return (
    <SC.CasesSection>
      <SC.CasesContainer>
        <Title />
        <CardsList />
      </SC.CasesContainer>
    </SC.CasesSection>
  );
};

export default Cases;
