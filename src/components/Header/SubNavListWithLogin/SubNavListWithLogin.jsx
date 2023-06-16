import * as SC from "./SubNavListWithLogin.styled";

export const SubNavListWithLogin = () => {
  return (
    <SC.SubNavContainer>
      <SC.SubNavList>
        <SC.SubNavLogin>
          <SC.SubNavLink href="/login">Login</SC.SubNavLink>
        </SC.SubNavLogin>
        <SC.SubNavRequestBeta>
          <SC.SubNavLink href="/requestbeta">Request Beta</SC.SubNavLink>
        </SC.SubNavRequestBeta>
      </SC.SubNavList>
    </SC.SubNavContainer>
  );
};
