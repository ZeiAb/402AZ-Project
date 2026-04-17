import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Directory from "./pages/Directory";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Businesspage from "./pages/Businesspage";
import "./App.css";
import { Amplify } from "aws-amplify";
import ForgotPassword from "./pages/ForgotPassword"
import { Authenticator } from "@aws-amplify/ui-react"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/directory" element={<Directory/>} />
          <Route path="/businesses/:id" element={<Businesspage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    <Footer />
</BrowserRouter>
  );
}

