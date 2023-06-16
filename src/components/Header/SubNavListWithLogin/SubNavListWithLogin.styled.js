import styled from "styled-components";
import { HeaderBtn, HeaderNavList } from "components/ComponentsTamplate";

export const SubNavContainer = styled.div`
  height: 100%;
`;

export const SubNavList = styled(HeaderNavList)``;

export const SubNavItem = styled(HeaderBtn)`
  background-color: #c1f4f8;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #101010;
`;
export const SubNavLogin = styled(SubNavItem)`
  background-color: #fff;
`;
export const SubNavRequestBeta = styled(HeaderBtn)`
  background-color: #72f2d3;
`;

export const SubNavLink = styled.a``;
