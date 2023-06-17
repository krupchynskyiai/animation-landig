import { Box } from "components/Box";
import * as SC from "./CardsList.styled";

const cards = [
  {
    title: (
      <SC.ListItemTitle>
        <SC.Span>{"Engaging"}</SC.Span>
        {" Task Lists"}
      </SC.ListItemTitle>
    ),
    text: "Spark creativity and connection with your audience by creating custom task lists. Let your followers contribute their ideas and requests, while you receive both financial support and fresh content inspiration. It's a win-win situation where everyone gets what they want.",
    icon: <SC.DiamondSvg />,
  },
  {
    title: (
      <SC.ListItemTitle>
        {"Live "}
        <SC.Span>{"Interactions"}</SC.Span>
      </SC.ListItemTitle>
    ),
    text: "Enhance your live stream with tailored task lists for your viewers. Engage and entertain your audience by fulfilling tasks in real-time during your stream. It's a fantastic way to communicate effectively and make the most of your live sessions while keeping your viewers happy.",
    icon: <SC.SunSvg />,
  },
  {
    title: (
      <SC.ListItemTitle>
        <SC.Span>{"Creative"}</SC.Span>
        {" Polls"}
      </SC.ListItemTitle>
    ),
    text: "Customize your task list, lock new task creation, and create polls for fan-driven content. Engage with your audience on a deeper level, letting them support and express their content preferences through donations. It's an interactive and friendly way to involve your fans and keep them excited.",
    icon: <SC.StarSvg />,
  },
];

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
