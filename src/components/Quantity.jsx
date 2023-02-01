import React, { useState } from 'react';
const QuantityInput = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
  
    const handleChange = (event) => {
      setQuantity(event.target.value);
    };
    return (
      <div className='quantity'>
        <label htmlFor={`quantity-${product.id}`}></label>
        <input
          type="number"
          id={`quantity-${product.id}`}
          value={quantity}
          onChange={handleChange}
        />
      </div>
    );
  };
  


  
export default QuantityInput;