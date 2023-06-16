import styled from "styled-components";
import { Box } from "components/Box";

const text = "Request Beta Request Beta Request Beta ";

const CircleTextContainer = styled.p``;

const CircleTextLetter = styled.span`
  font-family: Inter;
  font-size: ${(p) => p.size / 12}px;
  height: 50%;
  position: absolute;
  width: 0;
  left: 50%;
  top: 0;
  transform-origin: bottom center;
`;

export const CircleText = ({ size }) => {
  return (
    <Box
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <Box
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
        }}
      >
        <CircleTextContainer>
          {text.split("").map((letter, index) => (
            <CircleTextLetter
              size={size}
              style={{
                transform: `rotate(${(index + 1) * 9.2}deg)`,
              }}
            >
              {letter}
            </CircleTextLetter>
          ))}
        </CircleTextContainer>
      </Box>
    </Box>
  );
};
