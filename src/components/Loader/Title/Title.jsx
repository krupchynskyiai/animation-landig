import React, { useEffect } from "react";
import * as SC from "./Title.styled";

const LoaderText = [
  <SC.Title className="text-animation">Monitise</SC.Title>,
  <SC.Title className="text-animation">Engage</SC.Title>,
  <SC.Title className="text-animation">Trhive</SC.Title>,
  <SC.Title style={{ color: "#4DFFDF" }} className="text-animation">
    GIVEL.
  </SC.Title>,
];

export const Title = () => {
  const [text, setText] = React.useState(LoaderText[0]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(LoaderText[i]);
      i++;
      if (i === LoaderText.length) {
        i = 0;
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    var wrapper = document.getElementsByClassName("text-animation")[0];
    wrapper.style.opacity = "1";
    wrapper.innerHTML = wrapper.textContent.replace(/./g, "<span>$&</span>");

    var spans = wrapper.getElementsByTagName("span");

    for (var i = 0; i < spans.length; i++) {
      spans[i].style.animationDelay = i * 80 + "ms";
    }
  }, [text]);

  return <SC.TitleContainer>{text}</SC.TitleContainer>;
};
