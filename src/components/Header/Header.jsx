import { Box } from "components/Box";
import * as SC from "./Header.styled";
import { Logo } from "./Logo/Logo";
import { NavList } from "./NavList/NavList";
import { SubNavListWithLogin } from "./SubNavListWithLogin/SubNavListWithLogin";

export const Header = () => {
  return (
    <Box position={"fixed"} width={"100%"} p={"24px"} zIndex={"100"}>
      <SC.HeaderContainer>
        <Logo />
        <NavList />
        <SubNavListWithLogin />
      </SC.HeaderContainer>
    </Box>
  );
};
