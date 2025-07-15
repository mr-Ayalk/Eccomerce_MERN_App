import React from "react";
import "../ProductItem/ProductItem.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
function ProductItem() {
  return (
    <div
      className="productItem rounded-md overflow-hidden  border-[rgba(0,0,0,0.2)] shadow-sm "
      style={{
        borderWidth: 1,
      }}
    >
      <div className="group imgWrapper w-[100%]   rounded-md relative">
        <Link to="/">
          <div className="img h-[220px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="  "
              className="w-full"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_hThDdH_hNhGlLYbom8o1zntb_bc9qeOcuw&s"
              alt="  "
              className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-[18px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">
          10%
        </span>

        <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-800 group-hover:top-[15px]">
          <Tooltip title="Zoom" placement="left-start">
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white  group">
              <MdZoomOutMap className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
            </Button>
          </Tooltip>
          <Tooltip title="Compare" placement="left-start">
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white  group">
              <IoGitCompareOutline className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
            </Button>
          </Tooltip>
          <Tooltip title="Like" placement="left-start">
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white  group">
              <FaRegHeart className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
            </Button>
          </Tooltip>
        </div>
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
