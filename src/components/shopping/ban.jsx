import React, { useState } from "react";
import { product, update } from "./app";

const My = () => {
  const [id, setID] = useState(0);
  const [nam, setName] = useState();
  const hand = (index, payload) => {};
  return (
    <>
      {product.map((item, index) => (
        <img src={item.Img2} alt="" key={index} width="50px" />
      ))}

      <input type="text" onChange={(e) => setID(parseInt(e.target.value))} />
      <button onClick={hand(id)}></button>
    </>
  );
};

export default My;
