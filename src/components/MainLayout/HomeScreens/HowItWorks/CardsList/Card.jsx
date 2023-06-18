import React, { useState } from "react";
import * as SC from "./CardsList.styled";
import { Box } from "components/Box";

export const Card = ({ card }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { title, content, icon, border, background } = card;

  return (
    <SC.ListItem
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderRadius: `${border}`,
        background: `${isHovered ? background : "transparent"}`,
      }}
    >
      {isHovered ? (
        <SC.CardText>{content}</SC.CardText>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{ gap: "16px" }}
        >
          {icon}
          <SC.CardTitle>{title}</SC.CardTitle>
        </Box>
      )}
    </SC.ListItem>
  );
};
