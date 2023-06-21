import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1px;
  /* transform: scale(
    ${(props) => {
    console.log(props.scale);
    console.log(0.5 + props.scale * 0.5);
    return 0.5 + (window.innerWidth / 1440) * 0.5;
  }}
  ); */

  border-radius: 50px;
  height: 45px;
  background-color: #101010;
`;
