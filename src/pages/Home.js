import React, { useState, useEffect } from "react";

import { Box } from "components/Box";
import { Header } from "components/Header/Header";
import { RequestBetaBtn } from "components/RequestBetaBtn";
import Hero from "components/MainLayout/HomeScreens/Hero/Hero";
import Cases from "components/MainLayout/HomeScreens/Cases/Cases";

import { Loader } from "components/Loader/Loader";
import HowItWorks from "components/MainLayout/HomeScreens/HowItWorks/HowItWorks";
import Faqs from "components/MainLayout/HomeScreens/Faqs/Faqs";
import Footer from "components/MainLayout/Footer/Footer";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scale, setScale] = useState(
    document.documentElement.clientWidth / 1440
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScale(document.documentElement.clientWidth / 1440);

      return () => {
        window.removeEventListener("resize", () => {
          setScale(document.documentElement.clientWidth / 1440);
        });
      };
    });
  }, []);
  console.log("w", document.documentElement.clientWidth);
  console.log("d", window.innerWidth);

  useEffect(() => {
    // Симулюємо завантаження даних або інших асинхронних операцій
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Box position={"relative"}>
          <Header scale={scale} />

          <Box
            position={"relative"}
            style={{
              transform: `scale(${scale})`,
              width: `${1440}px`,
              transformOrigin: "top left",
            }}
          >
            <Hero />
            <Cases />
            <HowItWorks />
            <Faqs />
            <Footer scale={scale} />
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
      )}
    </>
  );
};

export default Home;
