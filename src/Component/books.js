import React from "react";
import list from "./bookAPI";
import Cards from "./Cards";

const Books = ({handleitem}) => {
  return (
    <div>
      <section>
        {list.map((item) => {
          return <Cards item={item} handleitem = {handleitem}/>;
        })}
      </section>
    </div>
  );
};


export default Books;
