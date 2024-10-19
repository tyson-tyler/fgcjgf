import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const ViewProduct = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('Shoes');
  const [brand, setBrand] = useState('Nike');
  
  const handleImageUpload = (e) => {
    // Handle image 
    console.log(e.target.files[0]);
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

      {/* Main content */}
      <main className="w-4/5 p-8">
      {/* <div className='flex'>
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Add Product</h1>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
              <button
                type="button"
                className="bg-gray-200 px-4 py-2 rounded text-gray-700 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700"
              >
                Next
              </button>
            </div>
        </div> */}

        <div className="flex m-auto">
          
          <h3 className='mr-[800px]'>Product</h3>
          <div className='space-x-4 '>
            <Link to='/'><button className='bg-gray-200 px-3 py-1 rounded text-blue-700 hover:bg-gray-300'>Cancel</button></Link>
            <Link to='/modal'><button className='bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700'>Next</button></Link>

          </div>
        </div>

        
        <div className='flex'>
        <button className="bg-blue-200 px-3 py-1 rounded text-blue-600 mr-4 my-4 ">Description</button><FaAngleRight className='text-gray-300 translate-y-9 mr-3'/>
            <button className="text-gray-500 hover:text-blue-600 mr-4">Variants</button><FaAngleRight className='text-gray-300 translate-y-9 mr-3'/>
            <button className="text-gray-500 hover:text-blue-600 mr-4">Combinations</button><FaAngleRight className='text-gray-300 translate-y-9 mr-3'/>
            <button className="text-gray-500 hover:text-blue-600">Price info</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
          
          <div className="flex justify-start mb-6">
            <button className="text-black-600 text-[18px] border-blue-600 mr-4">Description</button>
           
          </div>

          
          <form>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                  Product name *
                </label>
                <input
                  type="text"
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter product name"
                  required
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category *
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300  rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="Shoes">Shoes</option>
                  <option value="T-shirts">T-shirts</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>

              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                  Brand *
                </label>
                <input
                  type="text"
                  id="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter brand"
                  required
                />
              </div>

              <div>
                <label For="imageUpload" className="block text-sm font-medium text-blue-700">
                 
                
                <input
                
                  type="file"
                  id="imageUpload"
                  onChange={handleImageUpload}
                  className="mt-1"
                  
                /></label>
              </div>
            </div>

            
          </form>
        </div>
      </main>
    </div>
  );
};

export default ViewProduct;
