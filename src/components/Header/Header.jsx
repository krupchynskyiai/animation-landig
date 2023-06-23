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
        transform: `scale(${0.57 + scale * 0.43})`,
        width: `${
          document.documentElement.clientWidth / (0.57 + scale * 0.43)
        }px`,
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
