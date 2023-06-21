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
  const [scale, setScale] = useState(window.innerWidth / 1440);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScale(window.innerWidth / 1440);

      return () => {
        window.removeEventListener("resize", () => {
          setScale(window.innerWidth / 1440);
        });
      };
    });
  }, []);

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
              width: "1440px",
              transformOrigin: "top left",
              transform: `scale(${scale})`,
            }}
          >
            <Hero />
            <Cases />
            <HowItWorks />
            <Faqs />
            <Footer />
          </Box>
          <Box position={"fixed"} top={"calc(100vh - 260px)"} right={28}>
            <RequestBetaBtn size={228} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Home;
