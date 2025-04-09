import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import ContactForm from "./pages/contactform/ContactForm";
// Pages
import FrontPage from "./pages/homepage/frontpage";

// Components
import Navigation from "./components/NavigationBar/navigation";
import Footer from "./components/Footer/footer";
import Login from "./pages/login/Login";

// Pages admin
import AdminLogin from  "./pages/Admin/AdminLogin"
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import Cafes from "./pages/Admin/Cafes";
import ProtectedAdminRoute from "./components/admin/ProtectedAdminRoutes";
import ".//styles/admin.css";
import "./styles/admin.css";




function App() {
  // Vérifier si on est sur une route d'administration
  const isAdminRoute = window.location.pathname.startsWith('/admin');

  return (
    <AuthProvider>
      {!isAdminRoute && <Navigation />}
      <Routes>
        {/* Routes publiques */}
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<Login />} />
        
        {/* Routes admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route element={<ProtectedAdminRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="cafes" element={<Cafes />} />
          </Route>
        </Route>
      </Routes>
      {!isAdminRoute && <Footer />}
    </AuthProvider>
  );
}

export default App;