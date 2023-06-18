import * as SC from "./CardsList.styled";
import { home } from "pageConfig";
import { Card } from "./Card";

const cards = home.howItWorks.cardsList;

export const CardsList = () => {
  return (
    <SC.List>
      {cards.map((card, index) => (
        <Card card={card} key={index} />
      ))}
    </SC.List>
  );
};
