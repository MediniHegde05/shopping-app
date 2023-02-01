import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';
import QuantityInput from "./Quantity";
import boximg from "../images/boximg.png";






function ProductTable() {
  const [products, setProducts] = useState([
    { name: 'Product Name', price: 10, quantity:1},
    { name: 'Product Name', price: 20,quantity:1 },
    { name: 'Product Name', price: 30, quantity:1 },
  ]);
  const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const handleDelete = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };
  

  return (
    <div id="table">
    <table className="table">
      <thead class="thead-light">
      
        <tr>
        <th style={{ padding: '15px',textAlign:"center"}}>Product</th>
        <th style={{ padding: '15px', textAlign:"center"}}>Price</th>
        <th style={{ padding: '15px', textAlign:"center"}}>Quantity</th>
        <th style={{ width:'16%'}}></th>
         </tr> 
      </thead>

      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
          <td style={{padding :"15px", textAlign:"center", fontSize:'26px'}}><img className="boximg"
          src={boximg} alt="product-name"/>  {product.name}</td>
            <td style={{padding:"15px", textAlign:"center"}}>${product.price}</td>
            <td style={{padding:"8px", textAlign:"center"}}><QuantityInput product={product} /></td>
            <td><button style={{backgroundColor:"white", height:'40px', width:'40px',borderRadius:'0.25rem'}} onClick={() => handleDelete(index)}>
                <DeleteIcon />
                </button></td>
            
          </tr>
        ))}
        
      </tbody>
    </table>
    <div style={{ position: 'absolute', bottom: '20px', right:'15px', fontSize: '30px'}}>
       <h5> Subtotal:</h5><p><strong>${subtotal}</strong></p>
       <Button variant="primary">CheckOut</Button>
      </div>
    </div>
  );
}

export default ProductTable;