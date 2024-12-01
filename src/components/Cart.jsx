import React, { useEffect, useState } from "react";
import cartData from "../sample_data/cartData";

const Cart = () => {
  // Initialize state with cart data
  const [buy, setBuy] = useState([]);

  useEffect(() => {
    setBuy(cartData.data); // Load data on component mount
    
  }, []);

  // Handle delete operation
  const handleDelete = (name) => {
    // Filter out the item by name
    const filteredCart = buy.filter((item) => item.item !== name);
    setBuy(filteredCart); // Update state
    cartData.data = cartData.data.filter(item => item.item !== name);
  };

  // Calculate total price  
  const total = buy.reduce((sum, item) => sum + Number(item.price), 0)

  

  return (
    <div>
      {buy.map((ele) => (
        <div
          className="flex border-gray-400 border-2 my-[15px] rounded-xl flex-col sm:flex-row"
          key={ele.item} // Use a unique key for each element
        >
          <div className="container p-2 flex justify-between flex-col sm:flex-row">
            <h1 className="flex-1 text-black">{ele.item}</h1>
            <div className="flex gap-4 justify-between flex-col sm:flex-row">
              <p>
                <span className="font-bold">Quantity</span>: 1
              </p>
              <p>
                <span className="font-bold">Price</span>: {ele.price}
              </p>
              <button
                className="bg-red-400 rounded-xl p-1 text-white hover:bg-red-600"
                onClick={() => handleDelete(ele.item)} // Pass item name to delete
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="flex border-t-2 mt-4 pt-2">
        <div className="container">
          <p className="font-bold text-lg">Total Price: {total}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
