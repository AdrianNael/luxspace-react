import React from "react";

import Header from "parts/Header";
import Hero from "parts/HomePage/Hero";
import BrowseRoom from "parts/HomePage/BrowseRoom";
import JuastArrived from "parts/HomePage/JuastArrived";
import Clients from "parts/Clients";
import Sitemap from "parts/HomePage/Sitemap";
import Footer from "parts/Footer";
import Documents from "parts/Documents";


export default function HomePage() {


  return (
    <Documents>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JuastArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </Documents>
  );
}
