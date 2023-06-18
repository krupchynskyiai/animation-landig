import React, { useState } from "react";
import * as SC from "./CardsList.styled";
import { ReactComponent as SyricenSvg } from "assets/svg/syricen.svg";
import { home } from "pageConfig";
import { Card } from "./Card";
import { Box } from "components/Box";

const cards = home.faqs.cardsList;

export const CardsList = () => {
  const [openCardId, setOpenCardId] = useState(0);

  return (
    <SC.CardsList>
      <SC.FaqsTitleItem>
        <Box
          style={{
            padding: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            fontFamily: "Inter",
            fontWeight: " 500",
            fontSize: " 100px",
            lineHeight: " 121px",
            color: "#101010",
            border: "2px solid #101010",
            borderRadius: "40px",
          }}
        >
          <SyricenSvg />
          <span>FAQ's</span>
        </Box>
      </SC.FaqsTitleItem>
      {cards.map((card, index) => (
        <Card card={card} key={index} id={openCardId} setId={setOpenCardId} />
      ))}
    </SC.CardsList>
  );
};
