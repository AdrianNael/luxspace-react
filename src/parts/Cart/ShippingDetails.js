import React from "react";
import useAsync from "helpers/hooks/useAsync";
import useForm from "helpers/hooks/useForm";
import fetch from "helpers/fetch";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "helpers/hooks/useGlobalContext";

export default function ShippingDetails() {
  const navigate  = useNavigate();
  const { data, run, isLoading } = useAsync();
  const { state, dispatch } = useGlobalContext();

  const { state: payload, fnUpdateState } = useForm({
    completeName: "",
    emailAddress: "",
    address: "",
    phoneNumber: "",
    courier: "",
    payment: "",
  });

  const isSubmitDisable =
    Object.keys(payload).filter((key) => {
      return payload[key] !== "";
    }).length === Object.keys(payload).length;

  React.useEffect(() => {
    run(fetch({ url: `/api/checkout/meta` }));
  }, [run]);

  async function fnSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch({
        url: `/api/checkout`,
        method: "POST",
        body: JSON.stringify({
          ...payload,
          cart: Object.keys(state.cart).map((key) => state.cart[key]),
        }),
      });
      if (res) {
        navigate("/congratulation");
        dispatch({
          type: "RESET_CART",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full md:px-4 md:w-4/12" id="shipping-detail">
      <div className="px-4 py-6 bg-gray-100 md:p-8 md:rounded-3xl">
        <form onSubmit={fnSubmit}>
          <div className="flex mb-6 flex-start">
            <h3 className="text-2xl">Shipping Details</h3>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="completeName" className="mb-2 text-sm">
              Complete Name
            </label>
            <input
              onChange={fnUpdateState}
              value={payload.completeName}
              type="text"
              name="completeName"
              className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:border-blue-200 focus:outline-none"
              placeholder="Input your name"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="emailAddress" className="mb-2 text-sm">
              Email Address
            </label>
            <input
              onChange={fnUpdateState}
              value={payload.emailAddress}
              type="email"
              name="emailAddress"
              className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:border-blue-200 focus:outline-none"
              placeholder="Input your email address"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="address" className="mb-2 text-sm">
              Address
            </label>
            <input
              onChange={fnUpdateState}
              value={payload.address}
              type="text"
              name="address"
              className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:border-blue-200 focus:outline-none"
              placeholder="Input your address"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="phoneNumber" className="mb-2 text-sm">
              Phone Number
            </label>
            <input
              onChange={fnUpdateState}
              value={payload.phoneNumber}
              type="tel"
              name="phoneNumber"
              className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:border-blue-200 focus:outline-none"
              placeholder="Input your phone number"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="completeName" className="mb-2 text-sm">
              Choose Courier
            </label>
            <div className="flex flex-wrap -mx-2">
              {isLoading
                ? Array(2)
                    .fill()
                    .map((_, index) => (
                      <div key={index} className="w-6/12 h-24 px-2 mb-4">
                        <div className="w-full h-full mx-2 bg-gray-300 rounded-lg animate-pulse"></div>
                      </div>
                    ))
                : data?.couriers?.map((item) => (
                    <div className="w-6/12 h-24 px-2 mb-4">
                      <button
                        type="button"
                        onClick={() =>
                          fnUpdateState({
                            target: {
                              name: "courier",
                              value: item.id,
                            },
                          })
                        }
                        className="flex items-center justify-center w-full h-full bg-white border border-gray-200 focus:border-red-200 rounded-xl focus:outline-none"
                      >
                        <img
                          src={item.imgUrl}
                          alt={item.name}
                          className="object-contain max-h-full"
                        />
                      </button>
                    </div>
                  ))}
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="completeName" className="mb-2 text-sm">
              Choose Payment
            </label>
            <div className="flex flex-wrap -mx-2">
              {isLoading
                ? Array(2)
                    .fill()
                    .map((_, index) => (
                      <div key={index} className="w-6/12 h-24 px-2 mb-4">
                        <div className="w-full h-full mx-2 bg-gray-300 rounded-lg animate-pulse"></div>
                      </div>
                    ))
                : data?.payments?.map((item) => (
                    <div className="w-6/12 h-24 px-2 mb-4">
                      <button
                        type="button"
                        onClick={() =>
                          fnUpdateState({
                            target: {
                              name: "payment",
                              value: item.id,
                            },
                          })
                        }
                        className="flex items-center justify-center w-full h-full bg-white border border-gray-200 focus:border-red-200 rounded-xl focus:outline-none"
                      >
                        <img
                          src={item.imgUrl}
                          alt={item.name}
                          className="object-contain max-h-full"
                        />
                      </button>
                    </div>
                  ))}
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={!isSubmitDisable}
              className="w-full px-6 py-3 text-lg text-black transition-all duration-200 bg-pink-400 rounded-full hover:bg-black hover:text-pink-400 focus:outline-none focus:text-black"
            >
              Checkout Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
