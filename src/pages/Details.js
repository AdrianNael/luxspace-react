import React from "react";

import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";

import Clients from "parts/Clients";
import Sitemap from "parts/HomePage/Sitemap";
import Footer from "parts/Footer";

export default function HomePages() {
  return (
    <>
      <Header theme="black" />

      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/7888", name: "Details" },
        ]}
      />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
