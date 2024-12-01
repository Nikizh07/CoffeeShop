import React, { useEffect, useState } from "react";
import jsonObject from "../sample_data/hot";
import cartData from "../sample_data/cartData";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Products = () => {
  const [data, setData] = useState([]);

  const handleAddToCart = ({ item, price }) => {
    cartData.data.push({item , price})
    console.log(cartData.data); // Logs the items in the cart
    toast.success("Added!", {
      position: "top-center",
      autoClose: 2000, // Disappear after 2 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
    });
  };

  useEffect(() => {
    setData(jsonObject);
  });

  // Function to generate a random price between 10 and 500
  const getRandomPrice = () => {
    return (Math.random() * (500 - 10) + 10).toFixed(2); // Random price between 10 and 500
  };

  // Use effect to fetch data on mount

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data.map((element) => {
        const randomPrice = getRandomPrice(); // Get random price for each product

        return (
          <div
            key={element.id}
            className="border border-gray-300 rounded-lg p-4 shadow-lg flex flex-col"
          >
            <div className="container flex flex-col justify-between h-full">
              <img
                src={element.image}
                className="py-[5px] h-[300px] w-[500px]"
                alt={element.title}
              />
              <h1 className="text-xl text-black font-semibold">{element.title}</h1>
              <p className="text-gray-600 sm:text-gray-600 lg:text-gray-600 md:text-gray-600">{element.description}</p>
              <div className="text-lg font-bold text-red-600 lg:text-gray-800 mt-2">
                ${randomPrice}
              </div>
              <br />
              <button
                className="bg-blue-600 w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-[24px] mt-auto"
                onClick={() =>
                  handleAddToCart({ item: element.title, price: randomPrice })
                }
              >
                +
              </button>
              <ToastContainer />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
