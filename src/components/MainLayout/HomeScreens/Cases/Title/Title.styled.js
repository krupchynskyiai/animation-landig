import styled from "styled-components";
import { ReactComponent as Diamond } from "assets/svg/diamond.svg";

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  margin-bottom: 100px;
`;

export const DiamondSvg = styled(Diamond)`
  width: 37px;
  height: 37px;
`;

export const Title = styled.h2`
  width: 920px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 61px;
  text-align: center;

  color: #101010;
`;
