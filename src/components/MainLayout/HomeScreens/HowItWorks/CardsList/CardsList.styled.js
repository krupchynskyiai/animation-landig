import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  gap: 8px;
`;

export const ListItem = styled.li`
  width: calc(50% - 4px);
  height: calc(50% - 4px);

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #ffffff;
`;

export const CardTitle = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 100px;
  line-height: 121px;

  color: #ffffff;
`;

export const CardText = styled.p`
  width: 490px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  /* or 36px */

  color: #ffffff;
`;
