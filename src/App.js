import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import Loader from "components/Loader/Loader";

import { Box } from "components/Box";

// const Loader = lazy(() => import("components/Loader/Loader"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Box>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Box>
  );
}

export default App;
