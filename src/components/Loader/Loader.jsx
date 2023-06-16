import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoaderSlowCircleText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;

  border-radius: 50%;
  border: 5px solid #3498db;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: spin 3s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const CircleText = styled.p`
  font-size: 12px;
  color: #3498db;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
`;

export const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderSlowCircleText>
        <CircleText>Тут буде ваш лоадер</CircleText>
      </LoaderSlowCircleText>
    </LoaderContainer>
  );
};
