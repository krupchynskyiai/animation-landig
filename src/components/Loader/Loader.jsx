import React, { useEffect, useRef } from "react";
import * as SC from "./Loader.styled";
import { Progress } from "./Progress/Progress";
import { Title } from "./Title/Title";

const Loader = ({ isLoading, setIsLoading, scale }) => {
  const loader = useRef(null);

  useEffect(() => {
    if (isLoading) {
      loader.current.style.display = "flex";
    } else {
      setTimeout(() => {
        loader.current.style.display = "none";
      }, 2000);
    }
  }, [isLoading]);

  return (
    <SC.LoaderContainer
      ref={loader}
      style={{
        height: `${document.documentElement.clientHeight / scale}px`,
        width: `${document.documentElement.clientWidth / scale}px`,
        transform: `scale(${scale})`,
        transformOrigin: "left top",
      }}
    >
      <Title isLoading={isLoading} />
      <Progress setIsLoading={setIsLoading} />
    </SC.LoaderContainer>
  );
};

export default Loader;
