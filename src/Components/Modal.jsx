import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Modal = () => {
  const [variants, setVariants] = useState([
    { option: 'Size', values: ['M', 'L'] },
    { option: 'Color', values: ['Black', 'Red'] },
  ]);

  const [newOption, setNewOption] = useState('');
  const [newValues, setNewValues] = useState([]);

  // Handle adding a new option
  const handleAddOption = () => {
    if (newOption && newValues.length > 0) {
      setVariants([...variants, { option: newOption, values: newValues }]);
      setNewOption('');
      setNewValues([]);
    }
  };

  // Handle adding a value for a new option
  const handleAddValue = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      setNewValues([...newValues, e.target.value]);
      e.target.value = '';
    }
  };

  // Handle removing a value
  const handleRemoveValue = (valueToRemove) => {
    setNewValues(newValues.filter((value) => value !== valueToRemove));
  };

  // Handle removing a variant
  const handleRemoveVariant = (index) => {
    setVariants(variants.filter((_, i) => i !== index));
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
 

        <div className="flex m-auto">
          
          <h3 className='mr-[800px]'>Product</h3>
          <div className='space-x-4 '>
            <Link to='/viewproduct'><button className='bg-gray-200 px-4 py-2 rounded text-blue-700 hover:bg-gray-300'>Back</button></Link>
            <Link to='/showmodal'><button className='bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700'>Next</button></Link>

          </div>
        </div>

        
        <div className='flex'>
        <button className="bg-blue-200 px-3 py-1 rounded text-blue-600 mr-4 my-4 ">Description</button><FaAngleRight className='text-blue-400 translate-y-9 mr-3'/>
            <button className="bg-blue-200 px-3 py-1 rounded text-blue-600 mr-4 my-4">Variants</button><FaAngleRight className='text-gray-300 translate-y-9 mr-3'/>
            <button className="text-gray-500 hover:text-blue-600 mr-4">Combinations</button><FaAngleRight className='text-gray-300 translate-y-9 mr-3'/>
            <button className="text-gray-500 hover:text-blue-600">Price info</button>
        </div>
        <div className="bg-white  w-full max-w-3xl">
          {/* Tabs */}
          {/* <div className="flex justify-start mb-6">
            <button className="text-black-600 text-[18px] border-blue-600 mr-4">Variants</button>
           
          </div> */}


<div className="p-4 bg-white rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-4">Variants</h3>
      {variants.map((variant, index) => (
        <div key={index} className="flex items-start space-x-4 mb-4">
          <input
            type="text"
            value={variant.option}
            readOnly
            className="border p-2 rounded w-32 bg-gray-100"
          />
          <div className="flex-1 flex items-center flex-wrap gap-2 border-1 p-1 rounded">
            {variant.values.map((value, idx) => (
              <span
                key={idx}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md flex items-center"
              >
                {value}
                <button
                  className="ml-2 text-red-500"
                  onClick={() => handleRemoveValue(value)}
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
          <button
            onClick={() => handleRemoveVariant(index)}
            className="text-red-500"
          >
            <AiOutlineDelete className='mt-2 text-[18px]'/>
          </button>
        </div>
      ))}

      
      <div className="flex items-start space-x-4 mb-4">
        <input
          type="text"
          placeholder="Option *"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          className="border p-2 rounded w-32"
        />
        <div className="flex-1 flex items-center flex-wrap gap-2">
          {newValues.map((value, index) => (
            <span
              key={index}
              className="bg-gray-200 text-red-700 px-2 py-1 rounded-md flex items-center"
            >
              {value}
              <button
                className="ml-2 text-red-500"
                onClick={() => handleRemoveValue(value)}
              >
                &times;
              </button>
            </span>
          ))}
          <input
            type="text"
            placeholder="Values *"
            onKeyDown={handleAddValue}
            className="border p-2 rounded flex-1"
          />
        </div>
      </div>

      {/* Error message and add option */}
      {newOption === '' && (
        <p className="text-red-500 text-sm mb-2">Option can't be empty</p>
      )}

      <button
        onClick={handleAddOption}
        className="text-blue-600 hover:underline"
      >
        + Add Option
      </button>
    </div>
        </div>
      </main>
    </div>
  );
};

export default Modal;
