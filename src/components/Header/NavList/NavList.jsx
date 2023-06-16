import * as SC from "./NavList.styled";

export const NavList = () => {
  return (
    <SC.NavListContainer>
      <SC.NavList>
        <SC.NavItem>
          <SC.NavLink to="/shop">Home</SC.NavLink>
        </SC.NavItem>
        <SC.NavItem>
          <SC.NavLink to="/about">Problem</SC.NavLink>
        </SC.NavItem>
        <SC.NavItem>
          <SC.NavLink to="/contact">Cases</SC.NavLink>
        </SC.NavItem>
        <SC.NavItem>
          <SC.NavLink to="/shop">How it Works</SC.NavLink>
        </SC.NavItem>
        <SC.NavItem>
          <SC.NavLink to="/about">FAQ’s</SC.NavLink>
        </SC.NavItem>
      </SC.NavList>
    </SC.NavListContainer>
  );
};
