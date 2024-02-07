import React from "react";

import Header from "parts/Header";
import Sitemap from "parts/HomePage/Sitemap";
import Footer from "parts/Footer";
import PageErrorMessage from "parts/PageErrorMessage";
import Documents from "parts/Documents";



export default function NotFound() {

  return (
    <Documents>
      <Header theme="black" />
      <PageErrorMessage />

      <Sitemap />
      <Footer />
    </Documents>
  );
}
