import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useNavigate } from 'react-router-dom';

const products = {
  Shoes: [
    {
      name: "Nike Air Jordan",
      price: "₹12,000",
      brand: "Nike",
      img: "https://assets.ajio.com/medias/sys_master/root/20240206/IVdy/65c2616116fd2c6e6ae11d2a/-473Wx593H-467047743-black-MODEL.jpg",
    },
    {
      name: "Nike Dunk Low",
      price: "₹8,000",
      brand: "Nike",
      img: "https://assets.ajio.com/medias/sys_master/root/20240206/IVdy/65c2616116fd2c6e6ae11d2a/-473Wx593H-467047743-black-MODEL.jpg",
    },
  ],
  Tshirt: [],
};

const ProductList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const handlesend = () => {
    navigate('ViewProduct');
  }

  return (
    <div className="flex h-screen">
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

     
      <main className="w-4/5 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Products</h1>
          <div>
            <button className="bg-gray-200 px-4 py-2 rounded mr-2">Add Category</button>
            {/* Trigger Modal on Click */}
            <Button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleShow}>
              Add Product
            </Button>

          </div>
        </div>


          {/* shoe category */}

        <div className="grid grid-cols-2 gap-4 mt-8">
          

          <div className="bg-slate-100  p-4 rounded w-[320px] h-[530px]">
            <h2 className="text-[18px] mb-4">Shoes</h2>
            {products.Shoes.length > 0 ? (
              products.Shoes.map((product, index) => (
                <div key={index} className="flex items-center mb-4 bg-white shadow rounded p-2">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-20 h-20 object-cover mr-4 rounded text-[18px]"
                  />
                  <div>
                    <h3 className="text-[18px] mb-0 ">{product.name}</h3>
                    <p className=" mb-[8px]">{product.price}</p>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 text-sm rounded">
                      {product.brand}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p>No Shoes Available</p>
            )}
          </div>



          {/* Tshirt category */}
          <div className="bg-slate-100  p-4 rounded mr-[450px] ml-[-240px] w-[320px]">
            <h2 className="text-[18px] mb-4">T-shirt</h2>
            {products.Tshirt.length > 0 ? (
              products.Tshirt.map((product, index) => (
                <div key={index} className="flex items-center mb-2">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p>{product.price}</p>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 text-sm rounded">
                      {product.brand}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p>No T-shirts Available</p>
            )}
          </div>
        </div>
      </main>

     


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="border-2 border-grey-500 px-4 py-2 bg-gray-200 text-center text-gray-500 rounded">T-shirt</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="Light" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary" onClick={()=>{handleClose(); handlesend();}}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductList;
