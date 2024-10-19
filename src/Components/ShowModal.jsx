import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";
// import { ToggleSlider }  from "react-toggle-slider";
import Switch from "react-switch";

import { Link } from 'react-router-dom';

const ShowModal = () => {
  const [combinations, setCombinations] = useState([
    { id: 1, size: 'M', color: 'Black', sku: 'ABC12', inStock: false, quantity: '' },
    { id: 2, size: 'M', color: 'Red', sku: 'SDF3', inStock: true, quantity: 5 },
    { id: 3, size: 'L', color: 'Black', sku: 'HWE2', inStock: false, quantity: '' },
    { id: 4, size: 'L', color: 'Red', sku: 'ABC12', inStock: true, quantity: 9 }
  ]);

  const handleSkuChange = (id, newSku) => {
    setCombinations(prevCombinations =>
      prevCombinations.map(combination =>
        combination.id === id ? { ...combination, sku: newSku } : combination
      )
    );
  };

  const handleStockChange = (id) => {
    setCombinations(prevCombinations =>
      prevCombinations.map(combination =>
        combination.id === id ? { ...combination, inStock: !combination.inStock } : combination
      )
    );
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCombinations(prevCombinations =>
      prevCombinations.map(combination =>
        combination.id === id ? { ...combination, quantity: newQuantity } : combination
      )
    );
  };

  const hasDuplicateSku = (sku) => {
    return combinations.filter(combination => combination.sku === sku).length > 1;
  };




  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
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
            <Link to='/modal'><button className='bg-gray-200 px-4 py-2 rounded text-blue-700 hover:bg-gray-300'>Back</button></Link>
            <Link to='/combination'><button className='bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700'>Next</button></Link>

          </div>
        </div>

        
        <div className='flex'>
        <button className="bg-blue-200 px-3 py-1 rounded text-blue-600 mr-4 my-4 ">Description</button><FaAngleRight className='text-blue-400 translate-y-9 mr-3'/>
            <button className="bg-blue-200 px-3 py-1 rounded text-blue-600 mr-4 my-4">Variants</button><FaAngleRight className='text-blue-400 translate-y-9 mr-3'/>
            <button className="bg-blue-200 px-3 py-1 rounded text-blue-600 mr-4 my-4">Combinations</button><FaAngleRight className='text-gray-300 translate-y-9 mr-3'/>
            <button className="text-gray-500 hover:text-blue-600">Price info</button>
        </div>
        <div className="bg-white  w-full max-w-3xl">
          {/* Tabs */}
          {/* <div className="flex justify-start mb-6">
            <button className="text-black-600 text-[18px] border-blue-600 mr-4">Variants</button>
           
          </div> */}


<div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="font-bold text-lg mb-4">Combinations</h2>
      <div className="space-y-4">
        {combinations.map((combination) => (
          <div key={combination.id} className="grid grid-cols-4 gap-4 items-center">
            <div className="font-semibold">
              {combination.size}/{combination.color}
            </div>
            <input
              type="text"
              value={combination.sku}
              onChange={(e) => handleSkuChange(combination.id, e.target.value)}
              className={`border p-2 rounded-md ${hasDuplicateSku(combination.sku) ? 'border-red-500' : 'border-gray-300'}`}
            />
            <div>
      <label className="inline-flex items-center">
        <Switch
          onChange={() => handleStockChange(combination.id)}
          checked={combination.inStock}
          height={30}  // Same as barHeight
          width={60}   // You can adjust this as per your design
          handleDiameter={25}  // Same as handleSize
          offColor="#ddd"
          onColor="#000000"
        />
      </label>
    </div>
            <input
              type="number"
              value={combination.quantity}
              onChange={(e) => handleQuantityChange(combination.id, e.target.value)}
              className="border p-2 rounded-md border-gray-300"
            />
            {/* {hasDuplicateSku(combination.sku) && (
              <div className="text-red-500 col-span-4"></div>
            )} */}
          </div>
        ))}
      </div>
    </div>
        </div>
      </main>
    </div>
  );
};

export default ShowModal;
