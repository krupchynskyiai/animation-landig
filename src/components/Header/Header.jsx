import { Box } from "components/Box";
import * as SC from "./Header.styled";
import { Logo } from "./Logo/Logo";
import { NavList } from "./NavList/NavList";
import { SubNavListWithLogin } from "./SubNavListWithLogin/SubNavListWithLogin";

import { CircleText } from "../CircleText/CircleText";

export const Header = () => {
  return (
    <Box>
      <SC.HeaderContainer>
        <Logo />
        <NavList />
        <SubNavListWithLogin />
      </SC.HeaderContainer>
    </Box>
  );
};
