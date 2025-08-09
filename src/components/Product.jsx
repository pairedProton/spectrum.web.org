import React from "react";

const Product = ({ img, name, desc }) => {
  return (
    <div className="w-full gap-4 flex flex-col p-4">
      <img className="w-full h-auto " src={img} alt="" />
      <h3 className="text-3xl font-[curvyText] text-[#976344]  " >{name}</h3>
      <p className="text-[#50653e]" >{desc}</p>
    </div>
  );
};

export default Product;
