import * as SC from "./Progress.styled";

export const Progress = ({ progress }) => {
  return (
    <SC.ProgressContainer>
      <SC.ProgressLine>{progress}%</SC.ProgressLine>
    </SC.ProgressContainer>
  );
};
