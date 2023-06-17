import * as SC from "./Logo.styled";
import logoHeader from "assets/svg/logoHeader.svg";

export const Logo = () => {
  return (
    <SC.LogoContainer as={"div"}>
      <SC.LogoLink href="/animation-landing">
        <SC.LogoImage src={logoHeader} alt="Logo" />
      </SC.LogoLink>
    </SC.LogoContainer>
  );
};
