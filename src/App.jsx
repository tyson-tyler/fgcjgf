
import './App.css'
import ProductList from './Components/Page1'
import React from 'react'
import { Routes, Route} from 'react-router-dom';
import ViewProduct from './Components/ViewProduct';
import Modal from './Components/Modal';
import ShowModal from './Components/ShowModal';
import Combination from './Components/Combination';


function App() {
  return (
    <>
    <Routes>
       <Route path='/' element={<ProductList/>}/>  
       <Route path='/viewproduct' element={<ViewProduct/>}/>
       <Route path='/modal' element={<Modal/>}/>
       <Route path='showmodal' element={<ShowModal/>}/>
       <Route path='combination' element={<Combination/>}/>



      

                      

    </Routes>
    </>
  )
}

export default App
