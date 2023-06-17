import styled from "styled-components";
import { ReactComponent as Diamond } from "assets/svg/diamond.svg";
import { ReactComponent as Sun } from "assets/svg/sun.svg";
import { ReactComponent as Sharp } from "assets/svg/sharpPolygon.svg";

export const ProblemScreenContainer = styled.div`
  min-height: 100vh;
`;

export const ProblemScreenTItleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const FirstRowBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 100px;
  line-height: 121px;

  color: #101010;
`;

export const FirstRowText = styled.p``;

export const SecondRowBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 100px;
  line-height: 121px;

  color: #101010;
`;

export const SecondRowText = styled.p``;

export const ThirdRowBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 100px;
  line-height: 121px;

  padding-bottom: 37px;

  color: #101010;
`;

export const ThirdRowText = styled.p``;

export const SubTextBox = styled.div`
  display: flex;
  gap: 24px;
`;

export const SubText = styled.p`
  width: 330px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
`;

export const DiamondSvg = styled(Diamond)`
  width: 73px;
  height: 73px;
`;
export const SunSvg = styled(Sun)`
  width: 68px;
  height: 68px;
`;
export const SharpSvg = styled(Sharp)`
  width: 73px;
  height: 73px;
`;
