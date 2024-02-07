import React from "react";

import { Link } from "react-router-dom";
import { useGlobalContext } from "helpers/hooks/useGlobalContext";

export default function ShoppingCart() {
  const { state, dispatch } = useGlobalContext();

  return (
    <div className="w-full px-4 mb-4 md:w-8/12 md:mb-0" id="shopping-cart">
      <div className="flex pb-3 mt-8 mb-4 border-b border-gray-200 flex-start md:border-b-0">
        <h3 className="text-2xl">Shopping Cart</h3>
      </div>

      <div className="hidden mb-4 border-b border-gray-200 md:block">
        <div className="flex items-center pb-2 -mx-4 flex-start">
          <div className="flex-none px-4">
            <div className="" style={{ width: 90 }}>
              <h6>Photo</h6>
            </div>
          </div>
          <div className="w-5/12 px-4">
            <div className="">
              <h6>Product</h6>
            </div>
          </div>
          <div className="w-5/12 px-4">
            <div className="">
              <h6>Price</h6>
            </div>
          </div>
          <div className="w-2/12 px-4">
            <div className="text-center">
              <h6>Action</h6>
            </div>
          </div>
        </div>
      </div>

      {Object.keys(state.cart).length === 0 ? (
        <p id="cart-empty" className="py-8 text-center">
          Ooops... Cart is empty{" "}
          <Link to="/" className="underline">
            Shop Now
          </Link>
        </p>
      ) : (
        Object.keys(state.cart).map((key) => {
          const item = state.cart[key];
          return (
            <div
              className="flex flex-wrap items-center mb-4 -mx-4 flex-start"
              key={key}
            >
              <div className="flex-none px-4">
                <div className="" style={{ width: 90, height: 90 }}>
                  <img
                    src={item.imgUrls[0]}
                    alt={item.title}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              </div>
              <div className="flex-1 w-auto px-4 md:w-5/12">
                <div className="">
                  <h6 className="text-lg font-semibold leading-8 md:text-xl">
                    {item.title}
                  </h6>
                  <span className="text-sm md:text-lg">
                    {item.category.title}
                  </span>
                  <h6 className="block text-base font-semibold md:text-lg md:hidden">
                    {item.price.currency()}
                  </h6>
                </div>
              </div>
              <div className="flex-none hidden w-auto px-4 md:flex-1 md:w-5/12 md:block">
                <div className="">
                  <h6 className="text-lg font-semibold">{item.price.currency()}</h6>
                </div>
              </div>
              <div className="w-2/12 px-4">
                <div className="text-center">
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", id: item.id })
                    }
                    className="px-3 py-1 text-red-600 border-none focus:outline-none"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
