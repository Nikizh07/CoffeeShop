import React from "react";
import coffeeImage from "../assets/coffee.jpg";
import '../Home.css'
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <div className="container lg:border-2 lg:border-black lg:my-[80px] lg:w-[60%] lg:mx-[300px] rounded-xl lg:shadow-lg">
        <div className="flex flex-col justify-center my-[70px] items-center">
          <h1 className="heading text-[50px] text-white font-bold">
            Italiano Cafe
          </h1>
        <p className="my-[20px] text-gray-600 p-2">Italiano Café is your gateway to the heart of Italy, right here in Paris. Experience the authentic flavors of Italy, from rich espressos to delectable pastries. Our cozy ambiance, combined with our passionate baristas, creates the perfect setting for a leisurely coffee break or a quick bite.</p>
        <br />
        <div className="flex gap-2">
          <button className="bg-red-400 p-2 rounded-xl text-white"><Link to="/CoffeeShop/products">Products</Link></button>
          <button className="bg-red-400 p-2 rounded-xl text-white w-[70px]"><Link to="/CoffeeShop/cart">Cart</Link></button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
