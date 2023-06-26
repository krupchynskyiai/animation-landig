import React, { useEffect, useRef, useState } from "react";
import * as SC from "./Title.styled";
import { Box } from "components/Box";
import { CSSTransition } from "react-transition-group";

const loaderText = [
  <SC.Title className="text-animation">Engage</SC.Title>,
  <SC.Title className="text-animation">Trhive</SC.Title>,
  <SC.Title style={{ color: "#4DFFDF" }} className="text-animation">
    GIVELL.
  </SC.Title>,
  <SC.Title className="text-animation">Monitise</SC.Title>,
];

export const Title = ({ isLoading }) => {
  const [text, setText] = useState(loaderText[3]);
  const [startAnimate, setStartAnimate] = useState(false);
  const textBox = useRef(null);

  useEffect(() => {
    let interval = null;
    let i = 0;
    if (!isLoading) {
      console.log(isLoading);
      clearInterval(interval);
      return;
    }
    interval = setInterval(() => {
      setText(loaderText[i]);
      i++;
      if (i === loaderText.length) {
        i = 0;
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    var wrapper = document.getElementsByClassName("text-animation")[0];
    wrapper.style.opacity = "1";
    wrapper.innerHTML = wrapper.textContent.replace(/./g, "<span>$&</span>");

    var spans = wrapper.getElementsByTagName("span");

    for (var i = 0; i < spans.length; i++) {
      spans[i].style.animationDelay = i * 40 + "ms";
    }
  }, [text]);

  return (
    <SC.TitleContainer>
      <CSSTransition
        in={isLoading}
        nodeRef={textBox}
        timeout={1000}
        classNames={{
          exit: "textBox-exit",
          exitActive: "textBox-active-exit",
          exitDone: "textBox-done-exit",
        }}
      >
        <SC.TextWrapper ref={textBox}>{text}</SC.TextWrapper>
      </CSSTransition>
    </SC.TitleContainer>
  );
};
