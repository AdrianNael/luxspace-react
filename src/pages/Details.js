import React from "react";

import { useParams } from "react-router-dom";

import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";

import ProductDetails from "parts/Details/ProductDetails";
import Suggestion from "parts/Details/Suggestion";

import Sitemap from "parts/HomePage/Sitemap";
import Footer from "parts/Footer";

import useAsync from "helpers/hooks/useAsync";
import fetch from "helpers/fetch";

function LoadingProductDetails() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap my-4 md:my-12">
        <div className="w-full px-4 md:hidden">
          <div className="h-16 bg-gray-300 rounded-full w-80 animate-pulse"></div>
          <div className="w-40 h-4 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
        <div className="flex-1">
          <div className="slider">
            <div className="thumbnail">
              {Array(5)
                .fill()
                .map((_, index) => {
                  return (
                    <div className="relative px-4 card group" key={index}>
                      <div
                        className="bg-gray-300 rounded-xl item animate-pulse"
                        style={{ width: 106, height: 106 }}
                      ></div>
                    </div>
                  );
                })}
            </div>
            <div className="preview">
              <div className="h-full overflow-hidden rounded-lg item">
                <div className="h-full overflow-hidden bg-gray-300 rounded-lg item animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 md:p-6">
          <div className="h-16 bg-gray-300 rounded-full w-80 animate-pulse"></div>
          <div className="w-40 h-4 mt-4 bg-gray-300 rounded-full animate-pulse"></div>

          <div className="h-10 mt-8 bg-gray-300 rounded-full w-44 animate-pulse"></div>

          <hr className="my-8" />

          <div className="h-4 mt-6 bg-gray-300 rounded-full w-36 animate-pulse"></div>
          <div className="h-4 mt-6 bg-gray-300 rounded-full w-88 animate-pulse"></div>
          <div className="w-40 h-4 mt-6 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="h-4 mt-6 bg-gray-300 rounded-full w-96 animate-pulse"></div>
          <div className="w-64 h-4 mt-6 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="h-4 mt-6 bg-gray-300 rounded-full w-88 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

function LoadingSuggestions() {
  return (
    <section className="bg-gray-100 px-4 py-16">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            Complete your room <br className="" />
            with what we designed
          </h3>
        </div>
        <div className="flex overflow-x-auto mb-4 -mx-3">
          {Array(4)
            .fill()
            .map((index) => {
              return (
                <div className="px-3 flex-none" style={{ width: 320 }} key={index}>
                  <div className="rounded-xl p-4 pb-8 relative bg-white">
                    <div className="rounded-xl overflow-hidden card-shadow w-full h-36">
                      <div
                        className="h-full overflow-hidden bg-gray-300 rounded-lg item animate-pulse"
                        style={{ width: 287, height: 150 }}
                      ></div>
                    </div>
                    <div className="w-56 h-4 mt-6 bg-gray-300 rounded-full animate-pulse"></div>
                    <div className="w-40 h-4 mt-3 bg-gray-300 rounded-full animate-pulse"></div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default function HomePages() {
  const { idp } = useParams();
  const { data, run, isLoading } = useAsync();

  React.useEffect(() => {
    run(fetch({ url: `/api/products/${idp}` }));
  }, [run, idp]);

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

      {isLoading ? <LoadingProductDetails /> : <ProductDetails data={data} />}
      {isLoading ? (
        <LoadingSuggestions />
      ) : (
        <Suggestion data={data?.relatedProducts || {}} />
      )}

      <Sitemap />
      <Footer />
    </>
  );
}
