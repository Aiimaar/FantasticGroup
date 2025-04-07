import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
// Pages
import FrontPage from "./pages/homepage/frontpage";

// Components
import Navigation from "./components/NavigationBar/navigation";





function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<FrontPage />} />
      </Routes>
    </>
  );
};

export default App;
