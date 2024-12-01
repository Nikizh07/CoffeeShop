import React from 'react'
import { Link } from 'react-router'

const HamMenu = () => {
  return (
    <div>
      <div className="flex flex-col bg-black text-white h-screen">
      <Link to="/cart"><i class="fa fa-bars sm:hidden float-right mr-[10px] mt-[10px] text-[20px] cursor-pointer"></i></Link>
        <div className='container flex flex-col align-center justify-center items-center my-[200px] text-[40px] gap-4'>
            <Link to="/CoffeeShop">Home</Link>
            <Link to="/CoffeeShop/products">Products</Link>
            <Link to="/CoffeeShop/cart">Cart</Link>
        </div>
      </div>
    </div>
  )
}

export default HamMenu
