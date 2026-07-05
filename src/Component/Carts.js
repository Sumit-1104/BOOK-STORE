import React, { useEffect, useState } from 'react';
import "./Style/Cart.css";

const Carts = ( {Cart, setcart, handlechange}) => {
  const [price, setprice ] = useState(0);


  const handleitem = () => {
    let ans = 0;
    Cart.map((item) => {
      ans += item.amount*item.price
    });
    setprice(ans);
  };
  
  const Remove = (id) => {
    const arr = Cart.filter((item) => item.id !== id);
    setcart(arr);
  }
  useEffect(()=>{
    handleitem();
  })
  
  return (
    <div>
      {Cart.map((item)=>(

      <div className="cart_box" key={item.id}>
        <div className=" cart_img">
          <img src={item.img}/>
          <p>{item.title}</p>
        </div>

        <div>
          <button onClick={()=>handlechange(item, -1)}>-</button>
          <button>{item.amount}</button>
          <button onClick={()=>handlechange(item, 1)}>+</button>
        </div>

        <div>{item.price}</div>

        <button onClick={()=>Remove(item.id)}>Remove</button>

      </div>
       ))};


      <div className="total">
        <p>Total Price of your Cart</p>

        <p>Rs - {price}</p>
      </div>
    </div>
  );
};

export default Carts;
