import React from "react";

import { Link } from "react-router-dom";

import Breadcrumb from "components/Breadcrumb";

import Header from "parts/Header";
import Sitemap from "parts/HomePage/Sitemap";
import Footer from "parts/Footer";
import Documents from "parts/Documents";


export default function Congratulation() {

  return (
    <Documents>
      <Header theme="black" />
      <Breadcrumb
        List={[
          { url: "/", name: "Home" },
          { url: "/congratulation", name: "Success Checkout" },
        ]}
      />
      <section className="">
        <div className="container min-h-screen mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full text-center md:w-4/12">
              <img
                src="/images/content/illustration-success.png"
                alt="congrats illustration"
              />
              <h2 className="mb-6 text-3xl font-semibold">
                Ah yes it’s success!
              </h2>
              <p className="mb-12 text-lg">
                Furniture yang anda beli akan kami kirimkan saat ini juga so now
                please sit tight and be ready for it
              </p>
              <Link
                to="/"
                className="w-full px-8 py-3 text-lg text-gray-900 transition-all duration-200 bg-red-200 rounded-full cursor-pointer focus:outline-none focus:text-black"
              >
                Back to Shop
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Sitemap />
      <Footer />
    </Documents>
  );
}
