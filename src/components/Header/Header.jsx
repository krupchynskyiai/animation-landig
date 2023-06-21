import { Box } from "components/Box";
import * as SC from "./Header.styled";
import { Logo } from "./Logo/Logo";
import { NavList } from "./NavList/NavList";
import { SubNavListWithLogin } from "./SubNavListWithLogin/SubNavListWithLogin";

export const Header = ({ scale }) => {
  return (
    <Box
      position="fixed"
      p="24px"
      zIndex="100"
      style={{
        width: `${window.innerWidth / (0.5 + scale * 0.5)}px`,
        transform: `scale(${0.5 + scale * 0.5})`,
        transformOrigin: "left top",
      }}
    >
      <SC.HeaderContainer>
        <Logo />
        <NavList />
        <SubNavListWithLogin />
      </SC.HeaderContainer>
    </Box>
  );
};
