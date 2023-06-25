import React, { useEffect, useState } from "react";
import * as SC from "./Progress.styled";

function is_cached(src) {
  var image = new Image();
  image.src = src;

  return image.complete;
}

export const Progress = ({ setIsLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressCounter = async () => {
      const minTime = new Date().getTime() + 4000;
      const mediaFiles = document.querySelectorAll("img, video");

      mediaFiles.forEach((file, index) => {
        let percent = 0;

        if (is_cached(file.src)) {
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
                  setIsLoading(false);
                }, 2000);
              }, minTime - new Date().getTime());
            } else {
              setProgress(100);
              setTimeout(() => {
                setIsLoading(false);
              }, 2000);
            }
          }
        } else {
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
                    setIsLoading(false);
                  }, 2000);
                }, minTime - new Date().getTime());
              } else {
                setProgress(100);
                setTimeout(() => {
                  setIsLoading(false);
                }, 2000);
              }
            }
          });
        }
      });
    };
    progressCounter();
  }, [setIsLoading]);

  return (
    <SC.ProgressContainer>
      <SC.ProgressLine>{progress}%</SC.ProgressLine>
    </SC.ProgressContainer>
  );
};
