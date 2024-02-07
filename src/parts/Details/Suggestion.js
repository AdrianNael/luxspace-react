import React from "react";
import { Link } from "react-router-dom";

export default function Suggestion({ data }) {
  return (
    <section className="px-4 py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex mb-4 flex-start">
          <h3 className="text-2xl font-semibold capitalize">
            Complete your room <br className="" />
            with what we designed
          </h3>
        </div>
        <div className="flex mb-4 -mx-3 overflow-x-auto">
          {data?.map((item) => {
            return (
              <div className="flex-none px-3" style={{ width: 320 }} key={item.id}>
                <div className="relative p-4 pb-8 bg-white rounded-xl">
                  <div className="w-full overflow-hidden rounded-xl card-shadow h-36">
                    <img
                      src={item.imageUrl}
                      alt=""
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <h5 className="mt-4 text-lg font-semibold">{item.title}</h5>
                  <span className=""> {item.price.currency()}</span>
                  <Link
                    to={`/categories/${item.idc}/products/${item.id}`}
                    className="stretched-link"
                  ></Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
