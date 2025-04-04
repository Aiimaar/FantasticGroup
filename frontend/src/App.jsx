import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ContactForm from "./pages/contactform/ContactForm";



function App() {
  return (
    <>
      <Routes>
        <Route path="/contact-form" element={<ContactForm />} />
      </Routes>
    </>
  );
};

export default App;
