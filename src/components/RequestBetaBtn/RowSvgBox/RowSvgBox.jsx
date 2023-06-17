import * as SC from "./RowSvgBox.styled";

export const RowSvgBox = ({ size }) => {
  return (
    <a href="/">
      <SC.ArowContainer>
        <SC.ArowSvg size={size} />
      </SC.ArowContainer>
    </a>
  );
};
