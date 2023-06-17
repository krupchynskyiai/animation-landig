import * as SC from "./ProblemScreen.styled";

export const ProblemScreen = () => {
  return (
    <SC.ProblemScreenContainer id="problem">
      <SC.ProblemScreenTItleContainer>
        <SC.FirstRowBox>
          <SC.FirstRowText>Bridging </SC.FirstRowText>
          <SC.DiamondSvg />
          <SC.FirstRowText>Gap</SC.FirstRowText>
        </SC.FirstRowBox>
        <SC.SecondRowBox>
          <SC.SecondRowText>
            {"Between "}
            <span style={{ fontStyle: "italic" }}>You</span>
            {" &"}
          </SC.SecondRowText>
          <SC.SunSvg />
        </SC.SecondRowBox>
        <SC.ThirdRowBox>
          <SC.SharpSvg />
          <SC.ThirdRowText>
            <span style={{ fontStyle: "italic" }}>{"Your "}</span>
            Audience
          </SC.ThirdRowText>
        </SC.ThirdRowBox>
        <SC.SubTextBox>
          <SC.SubText>
            We empathise with the challenges of monetising and engaging with
            sizeable audiences. Givell was purpose-built to address these issues
            and empower you with an interactive monetisation system.
          </SC.SubText>
          <SC.SubText style={{ paddingTop: "44px" }}>
            With Givell, your audience can make donation-based requests,
            allowing you to incorporate their ideas and generate additional
            revenue. Intrigued? Join our community of beta testers and gain free
            access to our game-changing platform.
          </SC.SubText>
        </SC.SubTextBox>
      </SC.ProblemScreenTItleContainer>
    </SC.ProblemScreenContainer>
  );
};
