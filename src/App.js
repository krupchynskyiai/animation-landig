import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import { Box } from "components/Box";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
