// src/components/ProductsPage.js
import { useState } from 'react';
import jsonData from './../../data.json';

export default function ProductsPage () {
  const {products, setProducts} = useState(jsonData);
  
  return(
      <div>
        <h1>IronStore</h1>
      </div>    
  )
}