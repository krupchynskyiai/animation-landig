import styled from "styled-components";
import { ReactComponent as Diamond } from "assets/svg/diamond.svg";

export const HomeScreenContainer = styled.div`
  padding-top: 93px;
  min-height: 100vh;
  position: relative;
`;

export const HomeScreenTItleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const FirstRowBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const FirstRowText = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 130px;
  line-height: 157px;
`;

export const SecondRowBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const DiamondSvg = styled(Diamond)`
  transform: rotate(-30deg);
`;

export const SecondRowText = styled.h2`
  font-family: "Inter";
  font-style: italic;
  font-weight: 500;
  font-size: 130px;
  line-height: 157px;
`;

export const ThirdRowBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 24px;
`;

export const ThirdRowSubText = styled.p`
  width: 330px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
`;

export const ThirdRowText = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 130px;
  line-height: 157px;
`;
