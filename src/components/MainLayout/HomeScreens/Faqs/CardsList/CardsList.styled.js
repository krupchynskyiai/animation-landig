import styled from "styled-components";

export const CardsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const FaqsTitleItem = styled.li``;

export const Card = styled.li`
  padding: 99px 24px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ open }) => (open ? "625px" : "460px")};

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: ${({ open }) => (open ? "20px" : "28px")};
  line-height: 36px;

  color: #ffffff;

  background: ${({ open }) =>
    open ? "linear-gradient(180deg, #E932ED 0%, #5754FC 100%)" : "#101010"};
  border-radius: 40px;
`;

export const CardText = styled.p``;
