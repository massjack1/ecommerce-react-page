import React from "react";
import {useState} from "react";


function Product() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

    return (
      <div className="container mx-auto p-8">
        <div className="flex items-center mb-4">
          <img
            className="w-1/3 rounded-lg shadow-md"
            src=""
            alt="Product"
          />
          <div className="w-2/3 pl-4 py-8">
          <h1 className="font-bold mb-4 text-orange-400">SNEAKER COMPANY</h1>
          <h2 className="text-6xl font-bold mb-4 ">Fall Limited Edition Sneakers</h2>
            <div className="m-2">
            <p className="text-gray-500 font-medium pt-8 text-md leading-5 tracking-wide">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            </div>
            <div className="pt-8 flex flex-row space-x-12">
            <p className="text-4xl font-bold mt-2">$125.00</p>
            <p className="text-md mt-2 bg-orange-100 text-orange-500 font-bold py-2 px-2 rounded-md text-medium">50%</p>
            </div>
            <p className="pt-6 text-base line-through font-medium text-gray-400">$250.00</p>
            <div>
           <div>
              <button onClick={handleDecrement}>-</button>
              <span>{count}</span>
              <button onClick={handleIncrement}>+</button>
            </div>
            <button type="submit" className="bg-orange-500 shadow-lg shadow-orange-500/50 hover:bg-orange-400 text-white font-bold py-4 px-12 mt-8 text-lg rounded-md">
              Add to Cart
            </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Product;
