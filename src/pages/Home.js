import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import { Box } from "components/Box";
import { Header } from "components/Header/Header";
import { RequestBetaBtn } from "components/RequestBetaBtn";
import Hero from "components/MainLayout/HomeScreens/Hero/Hero";
import Cases from "components/MainLayout/HomeScreens/Cases/Cases";

import Loader from "components/Loader/Loader";
import HowItWorks from "components/MainLayout/HomeScreens/HowItWorks/HowItWorks";
import Faqs from "components/MainLayout/HomeScreens/Faqs/Faqs";
import Footer from "components/MainLayout/Footer/Footer";

import { getScrollBarWidth } from "helpers";

const Home = () => {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [scale, setScale] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const mainLayout = useRef(null);

  useEffect(() => {
    setScale(window.innerWidth / (1440 - scrollWidth));
  }, [scrollWidth]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScale(window.innerWidth / (1440 - scrollWidth));

      return () => {
        window.removeEventListener("resize", () => {
          setScale(window.innerWidth / (1440 - scrollWidth));
        });
      };
    });
  }, [scrollWidth]);

  useEffect(() => {
    if (isLoading) {
      mainLayout.current.style.display = "none";
    } else {
      mainLayout.current.style.display = "none";
    }
  }, [isLoading]);

  useEffect(() => {
    setScrollWidth(getScrollBarWidth());
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} scale={scale} setIsLoading={setIsLoading} />
      <CSSTransition
        in={false}
        timeout={0}
        nodeRef={mainLayout}
        classNames={{
          enter: "mainLayout-enter",
          enterActive: "mainLayout-active-enter",
          enterDone: "mainLayout-done-enter",
        }}
      >
        <Box
          position={"relative"}
          height="auto"
          bg={"#c1f4f8"}
          ref={mainLayout}
          style={{
            zIndex: 2,
          }}
        >
          <Header scale={scale} />

          <Box
            position={"relative"}
            style={{
              transform: `scale(${scale})`,
              width: `${window.innerWidth / scale}px`,
              transformOrigin: "top left",
            }}
          >
            <Hero />
            <Cases />
            <HowItWorks />
            <Faqs />
            <Footer scale={scale} scrollWidth={scrollWidth} />
          </Box>
          <Box
            position={"fixed"}
            bottom={28}
            right={28}
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "bottom right",
            }}
          >
            <RequestBetaBtn size={228} />
          </Box>
        </Box>
      </CSSTransition>
    </>
  );
};

export default Home;
