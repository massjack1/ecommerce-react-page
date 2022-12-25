import React from "react";

function Product() {
    return (
      <div className="container mx-auto py-4">
        <div className="flex items-center mb-4">
          <img
            className="w-1/3 rounded-lg shadow-md"
            src=""
            alt="Product"
          />
          <div className="w-2/3 pl-4">
          <h1 className="font-bold mb-4 text-orange-400">SNEAKER COMPANY</h1>
          <h2 className="text-4xl font-bold mb-4">Fall Limited Edition Sneakers</h2>
            <p className="text-gray-500 font-medium">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <p className="text-xl font-bold mt-2">$99.99</p>
            <button className="bg-orange-500 text-white font-bold py-4 px-12 mt-8 text-lg rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }

export default Product;
