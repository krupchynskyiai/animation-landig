import styled from "styled-components";
import { HeaderBtn, HeaderNavList } from "components/ComponentsTemplate.styled";

export const NavListContainer = styled.div`
  height: 100%;
`;

export const NavList = styled(HeaderNavList)``;

export const NavItem = styled(HeaderBtn)`
  background-color: #fff;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #101010;
`;

export const NavLink = styled.a``;
