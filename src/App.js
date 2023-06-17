import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import { Loader } from "./components/Loader/Loader";
import { Box } from "components/Box";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Симулюємо завантаження даних або інших асинхронних операцій
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Box>
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </Box>
  );
}

export default App;
