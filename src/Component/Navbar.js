import React from "react";
import "./Style/Navbar.css";

const Navbar = ({size, setshow}) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" on onClick={()=>setshow(true)}>My shooping</span>

        <div className="cart">
          <span>
            <i className="fas fa-cart-plus" on onClick={()=>setshow(false)} ></i>
          </span>
          <div>{size}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;