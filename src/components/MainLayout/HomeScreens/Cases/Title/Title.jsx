import * as SC from "./Title.styled";

export const Title = () => {
  return (
    <SC.TitleContainer>
      <SC.DiamondSvg />
      <SC.Title>
        {" You want to know examples on how to"}{" "}
        <span
          style={{
            // backgroundColor: "#2AA5A0",
            backgroundImage: "linear-gradient(0deg, #5754FC, #6332ED)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {"make money"}
        </span>{" "}
        {"with Givell? "}
        <span style={{ color: "rgba(16, 16, 16, 0.5)" }}>
          {"We got you covered"}
        </span>
      </SC.Title>
      <SC.DiamondSvg />
    </SC.TitleContainer>
  );
};
