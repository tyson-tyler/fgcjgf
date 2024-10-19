import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Assuming you're using react-bootstrap

const YourComponent = () => {
  const [category, setCategory] = useState("Shoes"); // default value
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlesend = () => {
    console.log("Selected Category: ", category);
    // Handle sending the selected category (e.g., API call)
  };

  return (
    <div>
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Category *
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="Shoes">Shoes</option>
          <option value="T-shirts">T-shirts</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      {/* Button to show the modal */}
      <Button variant="primary" onClick={handleShow}>
        Show Modal
      </Button>

      {/* Modal to display selected category */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Display the selected category dynamically */}
          <p className="border-2 border-grey-500 px-4 py-2 text-center rounded">
            {category}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="Light" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => {handleClose(); handlesend();}}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default YourComponent;

