import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ContactForm from "./pages/contactform/ContactForm";
// Pages
import FrontPage from "./pages/homepage/frontpage";

// Components
import Navigation from "./components/NavigationBar/navigation";
import Footer from "./components/Footer/footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";



function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
