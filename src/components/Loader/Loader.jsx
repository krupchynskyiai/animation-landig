import React, { useState, useEffect } from "react";
import * as SC from "./Loader.styled";
import { Progress } from "./Progress/Progress";
import { Title } from "./Title/Title";

const Loader = ({ setIsLoading, scale }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressCounter = async () => {
      const minTime = new Date().getTime() + 5000;
      const mediaFiles = document.querySelectorAll("img, video");

      mediaFiles.forEach((file, index) => {
        let percent = 0;

        file.addEventListener("load", async () => {
          const isDublicate = Array.from(mediaFiles).filter(
            (item) => item.src === file.src
          );

          if (isDublicate.length > 1) {
            percent += isDublicate.length;
          } else {
            percent += 1;
          }
          const currentPercent = (percent * 100) / (mediaFiles.length + 1);

          setProgress(currentPercent.toFixed(0));

          if (percent === mediaFiles.length) {
            if (minTime > new Date().getTime()) {
              setTimeout(() => {
                setProgress(100);
                setTimeout(() => {
                  setProgress(101);
                }, 2000);
              }, minTime - new Date().getTime());
            } else {
              setProgress(100);
              setTimeout(() => {
                setProgress(101);
              }, 2000);
            }
          }
        });
      });
    };
    progressCounter();
  }, [setIsLoading]);

  return (
    <SC.LoaderContainer
      style={{
        display: progress === 101 ? "none" : "flex",
        height: `${document.documentElement.clientHeight / scale}px`,
        width: `${document.documentElement.clientWidth / scale}px`,
        transform: `scale(${scale})`,
        transformOrigin: "left top",
      }}
    >
      <Title />
      <Progress progress={progress} />
    </SC.LoaderContainer>
  );
};

export default Loader;
