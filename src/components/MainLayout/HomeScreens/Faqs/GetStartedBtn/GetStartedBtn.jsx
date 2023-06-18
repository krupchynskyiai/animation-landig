import { Box } from "components/Box";
import * as SC from "./GetStartedBtn.styled";
import { ReactComponent as ArrowSvg } from "assets/svg/requestBetaArrow.svg";

export const GetStartedBtn = () => {
  return (
    <Box
      pl="24px"
      pr="24px"
      style={{
        background:
          "linear-gradient( transparent 0%, transparent 50%, #101010 50%, #101010 100%)",
      }}
    >
      <a href="/">
        <SC.GetStartedBtn>
          <SC.GetStartedBtnText>Get Started with Givell</SC.GetStartedBtnText>
          <ArrowSvg
            style={{
              transform: "rotate(135deg)",
              height: "62px",
              width: "62px",
            }}
          />
        </SC.GetStartedBtn>
      </a>
    </Box>
  );
};
