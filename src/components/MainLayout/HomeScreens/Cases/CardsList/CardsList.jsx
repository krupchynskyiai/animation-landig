import { Box } from "components/Box";
import { home } from "pageConfig";
import * as SC from "./CardsList.styled";

const cards = home.cases.cardsList;

export const CardsList = () => {
  return (
    <SC.CardsListContainer>
      <SC.List>
        {cards.map((card, index) => (
          <SC.ListItem key={index}>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "32px",
              }}
            >
              {card.title}
              {card.icon}
            </Box>
            <SC.ListItemText>{card.text}</SC.ListItemText>
          </SC.ListItem>
        ))}
      </SC.List>
    </SC.CardsListContainer>
  );
};
