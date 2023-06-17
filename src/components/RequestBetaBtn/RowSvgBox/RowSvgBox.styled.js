import styled from "styled-components";
import { ReactComponent as ArrowSvg } from "assets/svg/requestBetaArrow.svg";

export const ArowContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 64%;
  height: 64%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #4dffdf;
  border-radius: 50%;
  border: 2px solid #101010;
`;

export const ArowSvg = styled(ArrowSvg)`
  transform: rotate(45deg);
  width: ${({ size }) => size * 0.27}px;
  height: ${({ size }) => size * 0.27}px;
`;
