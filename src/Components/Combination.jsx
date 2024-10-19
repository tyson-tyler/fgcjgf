import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";

import { Link } from 'react-router-dom';

const Combination = () => {
 
  const [price, setPrice] = useState(12000);
  const [discount, setDiscount] = useState(12);
  const [discountType, setDiscountType] = useState('%'); 
  const handleDiscountTypeChange = (type) => {
    setDiscountType(type);
  };



  return (
    <div className="min-h-screen flex">
     
      <aside className="w-1/5 border-r-2 border-gray-200 p-3">
        <div className="mb-4 text-center">
          <img src="logo.png" alt="Logo" className="w-16 h-16 mx-auto" />
          <h2 className="font-bold"></h2>
        </div>
        <nav>
          <ul className="space-y-0">
            {["Home", "Stores", "Products", "Catalogue", "Promotions", "Reports", "Docs", "Settings"].map((item) => (
              <li key={item}>
                <button className="w-full text-left p-2 rounded hover:bg-blue-100 hover:text-blue-600">
                  <input type="checkbox" className="mx-2" />
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-2 flex items-center absolute bottom-4 ">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Profile"
            className="w-11 h-11 rounded-full mr-2"
          />
          <div className='mt-3'>
            <h2 className="text-[14px] font-semibold">Andy Samberg</h2>
            <p className="text-[14px] text-gray-500 mb-4">andy.samberg@gmail.com</p>
          </div>
          <FaAngleRight className="text-blue-400 ml-3 mb-2" />
        </div>
      </aside>

      
      <main className="w-4/5 p-8">
 

        <div className="flex m-auto">
          
          <h3 className='mr-[800px]'>Product</h3>
          <div className='space-x-4 '>
            <Link to='/showmodal'><button className='bg-gray-200 px-4 py-2 rounded text-blue-700 hover:bg-gray-300'>Back</button></Link>
            <button className='bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700'>Confirm</button>

          </div>
        </div>

        
        <div className='flex'>
        <button className="bg-blue-200 px-2 py-1 rounded text-blue-600 mr-4 my-4 ">Description</button><FaAngleRight className='text-blue-400 translate-y-8 mr-3'/>
            <button className="bg-blue-200 px-3 py-1 rounded text-blue-600 mr-4 my-4">Variants</button><FaAngleRight className='text-blue-400 translate-y-8 mr-3'/>
            <button className="bg-blue-200 px-3 py-1 rounded text-blue-600 mr-4 my-4">Combinations</button><FaAngleRight className='text-blue-400 translate-y-8 mr-3'/>
            <button className="bg-blue-200 px-3 py-1 rounded text-blue-600 mr-4 my-4">Price info</button>
        </div>
        <div className="bg-white  w-full max-w-3xl">
          {/* Tabs */}
          {/* <div className="flex justify-start mb-6">
            <button className="text-black-600 text-[18px] border-blue-600 mr-4">Variants</button>
           
          </div> */}


<div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="font-bold text-lg mb-4">Price Info</h2>
      <div className="space-y-4">
        {/* Price Input */}
        <label className="w-20 ">Price *</label>
        <div className="flex items-center space-x-4">
          
          <input
            type="text"
            value={`₹ ${price}`}
            onChange={(e) => setPrice(e.target.value.replace('₹', '').trim())}
            className="border p-2 rounded-md border-gray-300 w-full"
          />
        </div>

        
        <label className="w-20 ">Discount</label>
        <div className="flex items-center space-x-4">
          
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="border p-2 rounded-md border-gray-300 w-full"
          />
          <div className="flex ">
            <button
              onClick={() => handleDiscountTypeChange('%')}
              className={`px-4 py-2 rounded-l-lg ${discountType === '%' ? 'bg-blue-200 text-black' : 'bg-gray-100'}`}
            >
              %
            </button>
            <button
              onClick={() => handleDiscountTypeChange('$')}
              className={`px-4 py-2 rounded-r-lg ${discountType === '$' ? 'bg-blue-200 text-black' : 'bg-gray-100'}`}
            >
              $
            </button>
          </div>
        </div>
      </div>
    </div>
        </div>
      </main>
    </div>
  );
};

export default Combination;
