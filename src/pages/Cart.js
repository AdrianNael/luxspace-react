import React from "react";

import Breadcrumb from "components/Breadcrumb";

import Header from "parts/Header";
import Sitemap from "parts/HomePage/Sitemap";
import Footer from "parts/Footer";
import ShoppingCart from "parts/Cart/ShoppingCart";
import ShippingDetails from "parts/Cart/ShippingDetails";
import Documents from 'parts/Documents'



export default function Cart() {

  return (
    <Documents>
      <Header theme="black" />
      <Breadcrumb
        List={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <section className="md:py-16">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>

      <Sitemap />
      <Footer />
    </Documents>
  );
}
