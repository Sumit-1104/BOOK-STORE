import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Books from "./Component/books";
import Carts from "./Component/Carts";

const App = () => {
  const [Cart,setcart] = useState([]);
  const [show, setshow] = useState(true);
  const [warning, setwarning]=useState(false);

  
  const handleitem = (item) =>{
  let ispresent = false;
  Cart.forEach((Product) => {
    if(item.id===Product.id) ispresent = true;
  });

  if(ispresent){
    setwarning(true);
    setTimeout(()=>{
      setwarning(false);
    },2000);
    return;
  }

  setcart([...Cart,item]);
};

// logic for (+,-) button = incre and amount
const handlechange =(item, d) =>{
  let ind = -1;
  Cart.forEach((data, index) => {
    if(data.id === item.id){
      ind = index
    }

  });

  const temparr = Cart;
  temparr[ind].amount += d;
  setcart([...temparr]);
};

  return (
    <div>
      <Navbar size = {Cart.length} setshow = {setshow}/>

      {
        show?<Books handleitem = {handleitem} />:
        <Carts Cart = {Cart} setcart = {setcart} handlechange={handlechange}/>
      }
    {
      warning &&(<div>
        <h1 style={{color:"black"}}>Item is already to Cart</h1>
        </div>)
    }

    </div>
  );
};

export default App;