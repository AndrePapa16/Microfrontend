import React, { Component, useState } from "react";
import RemoteNav from "./components/Nav";
import './index.css'
import { Footer } from "../../remote/src/routes/Footer";
import { HeroSection } from "../../remote/src/routes/HeroSection";
import { Main } from "./components/Main";


const App: React.FC = () => {
  return (
    <>
      <HeroSection />
      <RemoteNav />
      <Main />
      <Footer />
      <hr />
    </>
  );
};

export default App;
