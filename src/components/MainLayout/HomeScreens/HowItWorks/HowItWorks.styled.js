import styled from "styled-components";

export const HowItWorksSection = styled.section`
  display: flex;
  min-height: 100vh;
  background-color: #101010;
  position: relative;
  padding-top: 93px;

  ::before {
    content: "";
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: 550px;
    height: 550px;
    background: linear-gradient(180deg, #e932ed 0%, #5754fc 100%);
    opacity: 0.3;
    filter: blur(147px);
    transform: translate(-50%, -50%) rotate(119.69deg);
  }
`;

export const HowItWorksContainer = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
`;
