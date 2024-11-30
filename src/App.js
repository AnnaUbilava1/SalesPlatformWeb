import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import SignUp from "./pages/SignUp";
import UserPass from "./pages/UserPass";
import Email from "./pages/Email";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/auth-username-password" element={<UserPass />} />
        <Route path="/auth-email" element={<Email />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;


