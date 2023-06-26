import styled from "styled-components";

export const ProgressContainer = styled.div`
  display: inline-flex;

  position: absolute;
  bottom: 52px;
  right: 52px;
`;
export const ProgressLine = styled.p`
  font-family: "Inter";
  font-size: 24px;
  font-weight: 500;
  color: #fff;
`;

export const ProgressWrapper = styled.div`
  overflow: visible;
  &.pregresBox-done-exit {
    overflow: hidden;
  }
  &.pregresBox-active-exit p {
    transform: translateY(0);
  }
  &.pregresBox-done-exit p {
    transform: translateY(-100%);
    transition: all 0.5s ease-in;
  }
`;
