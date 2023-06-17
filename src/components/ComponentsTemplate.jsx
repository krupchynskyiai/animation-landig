import * as SC from "./ComponentsTemplate.styled";

export const LearnMoreBtn = ({ top, left }) => {
  return (
    <SC.LearnMoreBtnContainer top={top} left={left}>
      <SC.LearnMoreBtnLink href="/about">
        <SC.LearnMoreBtnText>Learn more</SC.LearnMoreBtnText>
        <SC.LearnMoreBtnArrow />
      </SC.LearnMoreBtnLink>
    </SC.LearnMoreBtnContainer>
  );
};
