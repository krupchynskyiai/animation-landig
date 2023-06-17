import styled from "styled-components";
import { ReactComponent as Diamond } from "assets/svg/diamondGrad.svg";
import { ReactComponent as Sun } from "assets/svg/sunGrad.svg";
import { ReactComponent as Star } from "assets/svg/starGrad.svg";

export const CardsListContainer = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const ListItem = styled.li`
  padding: 32px;
  width: 1156px;
  height: 450px;

  font-family: "Inter";
  color: #ffffff;

  background: #101010;

  border-radius: 60px;
`;

export const ListItemTitle = styled.h3`
  font-weight: 500;
  font-size: 80px;
  line-height: 97px;
`;

export const ListItemText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  width: 490px;
`;

export const Span = styled.span`
  font-style: italic;
`;

export const DiamondSvg = styled(Diamond)`
  width: 58px;
  height: 58px;
  color: linear-gradient(180deg, #5754fc 0%, #6332ed 100%);
`;
export const SunSvg = styled(Sun)`
  width: 58px;
  height: 58px;
  fill: linear-gradient(180deg, #6332ed 0%, #9b32ed 100%);
`;
export const StarSvg = styled(Star)`
  width: 58px;
  height: 58px;
`;
