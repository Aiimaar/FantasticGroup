import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ContactForm from "./pages/contactform/ContactForm";
// Pages
import FrontPage from "./pages/homepage/frontpage";

// Components
import Navigation from "./components/NavigationBar/navigation";



function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/" element={<FrontPage />} />
      </Routes>
    </>
  );
};

export default App;
