import React from "react";
export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="block sm:inline">
                  Tech products at the best prices
                </span>
              </h2>
              <p className="mt-3 text-xl text-white">
                100% safe and secure online shopping, all connections are
                encrypted. We provide fast shipping nationwide with easy 14 days
                returns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
