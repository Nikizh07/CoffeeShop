import React from "react";
import { Link } from "react-router";


const NavBar = () => {
  return (
    <div>
      <div className="container">

      <div className="hamburger">
      <Link to="/CoffeeShop/hmenu"><i class="fa fa-bars sm:hidden float-right mr-[10px] mt-[10px] text-[20px] cursor-pointer"></i></Link>
       
      </div>
      <br  className="sm:hidden md:hidden lg:hidden"/>

      <nav className="bg-gray-800 text-yellow-400 shadow-lg px-[20px] py-[20px] h-[60px] text-white font-serif flex hidden sm:flex md:flex lg:flex">
        <h1 className="flex-1 ml-[20px]">Cafe</h1>
        <div className="gap-4 flex mr-[50px]">
          <Link
            to="/CoffeeShop"
            className="hover:bg-gray-400 rounded-[5px] h-[30px] w-[60px] flex justify-center items-center"
          >
            Home
          </Link>
          <Link
            to="/CoffeeShop/products"
            className="hover:bg-gray-400 rounded-[5px] h-[30px] w-[60px] flex justify-center items-center"
          >
            Products
          </Link>
          <Link
            to="/CoffeeShop/cart"
            className="hover:bg-gray-400 rounded-[5px] h-[30px] w-[60px] flex justify-center items-center"
          >
            Cart
          </Link>
        </div>
      </nav>

      </div>
    </div>
  );
};

export default NavBar;
