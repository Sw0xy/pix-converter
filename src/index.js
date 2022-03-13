import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import "./output.css";
import PxToRem from "./pages/Rem/PxToRem/PxToRem";
import Navbar from "./components/Navbar";
import RemToPx from "./pages/Rem/RemToPx/RemToPx";
import EmToPx from "./pages/Em/EmToPx/EmToPx";
import PxToEm from "./pages/Em/PxToEm/PxToEm";
import Footer from "./components/Footer";
ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="px-to-rem" element={<PxToRem />} />
      <Route path="rem-to-px" element={<RemToPx />} />
      <Route path="em-to-px" element={<EmToPx />} />
      <Route path="px-to-em" element={<PxToEm />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
