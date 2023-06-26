import styled from "styled-components";

export const TitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.p`
  color: #fff;
  opacity: 0;

  & span {
    font-size: 130px;
    font-family: "Inter";
    font-weight: 500;
    position: relative;
    top: 10px;
    left: 10px;
    opacity: 0;
    animation: fade 400ms ease-in-out forwards;
  }

  @keyframes fade {
    0% {
      top: 10px;
      left: 10px;
      filter: blur(15px);
      opacity: 0;
    }
    50% {
      filter: blur(10px);
      opacity: 0.9;
    }
    100% {
      top: 0px;
      left: 0px;
      filter: blur(0px);
      opacity: 1;
    }
  }
`;

export const TextWrapper = styled.div`
  overflow: visible;
  &.textBox-done-exit {
    overflow: hidden;
  }
  &.textBox-active-exit p {
    transform: translateY(0);
  }
  &.textBox-done-exit p {
    transform: translateY(-100%);
    transition: all 0.5s ease-in;
  }
`;

//   &::after {
//     content: "Monetise";
//     animation: spin 6s linear infinite;
//     display: block;
//     font-size: 130px;
//     font-family: "Inter";
//     font-weight: 500;
//     color: #fff;
//     width: 800px;
//     text-align: center;

//     overflow: hidden;
//     background: linear-gradient(90deg, #000, #fff, #000);
//     background-repeat: no-repeat;
//     background-size: 80%;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: rgba(255, 255, 255, 0);
//   }

//   @keyframes spin {
//     0% {
//       background-position: -500%;

//       content: "Monetise";
//     }

//     32.8% {
//       content: "Monetise";
//     }
//     32.9% {
//       content: "";
//       background-position: 500%;
//     }
//     33% {
//       content: "";
//       background-position: -500%;
//     }

//     33.1% {
//       content: "Engage";
//     }

//     65.8% {
//       content: "Engage";
//     }
//     65.9% {
//       content: "";
//       background-position: 500%;
//     }
//     66% {
//       content: "";
//       background-position: -500%;
//     }
//     66.1% {
//       content: "Thrive";
//     }
//     99.9% {
//       content: "Thrive";

//       background-position: 500%;
//     }
//     100% {
//       content: "Monetise";
//     }
//   }
