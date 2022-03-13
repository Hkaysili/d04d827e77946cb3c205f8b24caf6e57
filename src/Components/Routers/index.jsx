import React from 'react'
import ProductList from "../ProductList";
import ProductDetail from "../ProductDetail";
import { 
    Routes,
    Route,
  } from "react-router-dom"; 

function RoutersWrapper() {
    console.log("this");
    return (
        <>
            <Routes> 
                <Route exact path="/"  element={<ProductList />} />
                <Route path="/product-detail" element={<ProductDetail />} />
            </Routes>
        </>
    )
}

export default RoutersWrapper
