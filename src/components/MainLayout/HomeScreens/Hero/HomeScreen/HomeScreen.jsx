import { Box } from "components/Box";
import { LearnMoreBtn } from "components/ComponentsTemplate";
import * as SC from "./HomeScreen.styled";

export const HomeScreen = () => {
  return (
    <SC.HomeScreenContainer>
      <Box pl="24px" pr="24px">
        <SC.HomeScreenTItleContainer>
          <SC.FirstRowBox>
            <SC.FirstRowText>Monetise</SC.FirstRowText>
          </SC.FirstRowBox>
          <SC.SecondRowBox>
            <SC.DiamondSvg />
            <SC.SecondRowText>Engage</SC.SecondRowText>
          </SC.SecondRowBox>
          <SC.ThirdRowBox>
            <SC.ThirdRowSubText>
              Experience a paradigm shift in audience engagement and
              monetisation for content creators. Join us as a beta tester and
              enjoy free access to our platform.
            </SC.ThirdRowSubText>
            <SC.ThirdRowText>Thrive</SC.ThirdRowText>
          </SC.ThirdRowBox>
        </SC.HomeScreenTItleContainer>
      </Box>

      <Box position={"absolute"} bottom={24} left={24}>
        <LearnMoreBtn />
      </Box>
    </SC.HomeScreenContainer>
  );
};
