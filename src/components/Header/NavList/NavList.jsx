import * as SC from "./NavList.styled";

export const NavList = () => {
  return (
    <SC.NavListContainer>
      <SC.NavList>
        <SC.NavItem>
          <SC.NavLink href="#home">Home</SC.NavLink>
        </SC.NavItem>
        <SC.NavItem>
          <SC.NavLink href="#problem">Problem</SC.NavLink>
        </SC.NavItem>
        <SC.NavItem>
          <SC.NavLink href="#cases">Cases</SC.NavLink>
        </SC.NavItem>
        <SC.NavItem>
          <SC.NavLink href="/shop">How it Works</SC.NavLink>
        </SC.NavItem>
        <SC.NavItem>
          <SC.NavLink href="/about">FAQ’s</SC.NavLink>
        </SC.NavItem>
      </SC.NavList>
    </SC.NavListContainer>
  );
};
