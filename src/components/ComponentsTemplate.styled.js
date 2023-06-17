import styled from "styled-components";
import { ReactComponent as ArowSvg } from "assets/svg/requestBetaArrow.svg";

export const HeaderBtn = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  border: 1px solid #101010;
  border-radius: 50px;
  padding: 0 16px;
`;

export const HeaderNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  gap: 2px;
`;

export const LearnMoreBtnContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #101010;
  border-radius: 50px;
`;

export const LearnMoreBtnLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 10px;

  border-radius: 50px;
`;

export const LearnMoreBtnText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #101010;
`;

export const LearnMoreBtnArrow = styled(ArowSvg)`
  width: 24px;
  height: 24px;
  transform: rotate(-90deg);
  color: #101010;
`;
