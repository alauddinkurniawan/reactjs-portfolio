import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.css";
import App from "./App.tsx";
import Hero from "./components/Home/Hero.tsx";
import Header from "./components/Home/Header.tsx";
import About from "./components/Home/About.tsx";
import Projects from "./components/Home/Projects.tsx";
import Skills from "./components/Home/Skills.tsx";
import Languages from "./components/Home/Languages.tsx";
import Contacts from "./components/Home/Contacts.tsx";
import Footer from "./components/Home/Footer.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Header />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Languages />
    <Contacts />
    <Footer />

  </React.StrictMode>
);
