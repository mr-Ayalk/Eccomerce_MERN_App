import React from "react";
import "../ProductItem/ProductItem.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
function ProductItem() {
  return (
    <div
      className="productItem rounded-md overflow-hidden  border-[rgba(0,0,0,0.2)] shadow-sm "
      style={{
        borderWidth: 1,
      }}
    >
      <div className="imgWrapper w-[100%] h-[220px] overflow-hidden rounded-md relative">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="  "
          className="w-full"
        />
        <span className="discount flex items-center absolute top-[18px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">
          10%
        </span>



















        
      </div>

      <div className="info p-3 py-5">
        <h6 className="text-[13px]">
          <Link to="/" className="link transition-all">
            Soylent Green
          </Link>
        </h6>
        <h3 className="text-[13px] title mt-1 font-[600] text-[#000]">
          <Link to="/" className="link transition-all">
            Siril Geortte Pink Saree with Blouse piece
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[15px]">
            $58.00
          </span>
          <span className="price text-primary font-bold">$50.00</span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
