import styled from "styled-components";

export const TitleContainer = styled.div``;

export const Title = styled.p`
  &::after {
    content: "Monetise";
    animation: spin 6s linear infinite;
    display: block;
    font-size: 130px;
    font-family: "Inter";
    font-weight: 500;
    color: #fff;
    width: 800px;
    text-align: center;

    overflow: hidden;
    background: linear-gradient(90deg, #000, #fff, #000);
    background-repeat: no-repeat;
    background-size: 80%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
  }

  @keyframes spin {
    0% {
      background-position: -500%;

      content: "Monetise";
    }

    32.8% {
      content: "Monetise";
    }
    32.9% {
      content: "";
      background-position: 500%;
    }
    33% {
      content: "";
      background-position: -500%;
    }

    33.1% {
      content: "Engage";
    }

    65.8% {
      content: "Engage";
    }
    65.9% {
      content: "";
      background-position: 500%;
    }
    66% {
      content: "";
      background-position: -500%;
    }
    66.1% {
      content: "Thrive";
    }
    99.9% {
      content: "Thrive";

      background-position: 500%;
    }
    100% {
      content: "Monetise";
    }
  }
`;
