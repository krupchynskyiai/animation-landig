import React, { useState, useEffect } from "react";

import { Box } from "components/Box";
import { Header } from "components/Header/Header";
import { RequestBetaBtn } from "components/RequestBetaBtn";
import Hero from "components/MainLayout/HomeScreens/Hero/Hero";
import Cases from "components/MainLayout/HomeScreens/Cases/Cases";

import { Loader } from "components/Loader/Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

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
          <Header />
          <Hero />
          <Cases />
          <Box position={"fixed"} top={"calc(100vh - 260px)"} right={28}>
            <RequestBetaBtn size={228} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Home;
