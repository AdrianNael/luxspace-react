import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import useAsync from "../../helpers/hooks/useAsync";
import fetch from "../../helpers/fetch";

function Loading() {
  return Array(6)
    .fill()
    .map((_, index) => {
      return (
        <div className="relative px-4 card group" key={index}>
          <div
            className="relative overflow-hidden bg-gray-300 rounded-xl card-shadow"
            style={{ width: 287, height: 386 }}
          ></div>
          <div className="w-24 h-3 mt-3 bg-gray-300 rounded-full"></div>
          <div className="h-3 mt-2 bg-gray-300 rounded-full w-36"></div>
        </div>
      );
    });
}

export default function JuastArrived() {
  const { data, error, run, isLoading } = useAsync();
  const refContainer = useRef(null);

  useEffect(() => {
    run(fetch({ url: "/api/products/?page=1&limit=10" }));
  }, [run]);

  const scrollToTop = () => {
    // Scroll ke atas halaman
    window.scrollTo(0, 0);
  };

  return (
    <section className="flex flex-col py-16">
      <div className="container mx-auto mb-4">
        <div className="flex justify-center mb-4 text-center">
          <h3 className="text-2xl font-semibold capitalize">
            Just Arrived <br className="" />
            this summer for you
          </h3>
        </div>
      </div>
      <div className="px-4 overflow-x-hidden" id="carousel">
        <div className="container mx-auto" ref={refContainer}></div>
        {isLoading ? (
          <div
            className="relative flex flex-row -mx-4"
            style={{
              paddingLeft:
                refContainer.current?.getBoundingClientRect?.()?.left - 16 || 0,
            }}
          >
            <Loading />{" "}
          </div>
        ) : error ? (
          JSON.stringify(error)
        ) : data.data.length === 0 ? (
          "No Product Found"
        ) : (
          <Carousel refContainer={refContainer}>
            {data.data.map((item) => {
              return (
                <div className="relative px-4 card group" key={item.id}>
                  <div
                    className="relative overflow-hidden rounded-xl card-shadow"
                    style={{ width: 287, height: 386 }}
                  >
                    <div className="absolute flex items-center justify-center w-full h-full transition duration-200 bg-black opacity-0 group-hover:opacity-100 bg-opacity-35">
                      <div className="flex items-center justify-center w-16 h-16 text-black bg-white rounded-full">
                        <svg
                          className="fill-current"
                          width="43"
                          height="24"
                          viewBox="0 0 43 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* SVG path */}
                        </svg>
                      </div>
                    </div>
                    <img
                      src={item.imageUrl}
                      alt=""
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <h5 className="mt-4 text-lg font-semibold">{item.title}</h5>
                  <span className="">IDR {item.price}</span>
                  <Link
                    to={`/categories/${item.idc}/products/${item.id}`}
                    className="stretched-link"
                    onClick={scrollToTop}
                  ></Link>
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
    </section>
  );
}
