import React, { useEffect, useState } from "react";
import * as SC from "./CardsList.styled";

export const Card = ({ card, id, setId }) => {
  const { question, answer } = card;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (id === card.id) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [id, card.id]);

  const handleClick = (event) => {
    event.preventDefault();
    if (open) {
      setId(0);
    } else {
      setId(card.id);
    }
  };

  return (
    <SC.Card open={open} onClick={handleClick}>
      <SC.CardText>{open ? answer : question}</SC.CardText>
    </SC.Card>
  );
};
