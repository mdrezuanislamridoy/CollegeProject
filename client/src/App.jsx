import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/About";
import Footer from "./components/Footer";
import ContactForm from "./pages/ContactForm";
import LoginSignup from "./pages/Login_SignUp";
import ProfilePage from "./pages/Profile";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    setIsLoggedIn(!!loggedIn);
  }, []);

  if (!isLoggedIn) {
    return (
      <BrowserRouter>
        <LoginSignup />
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/signlog" element={<Navigate to="/" />} />
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
