import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoTriangleDown } from "react-icons/go";
import { Rating } from "@mui/material";
import { BsFillBagCheckFill } from "react-icons/bs";
function CartItems(props) {
  const [selectedSize, setSelectedSize] = useState(props.size);
  const [sizeanchorEl, setSizeAnchorEl] = useState(null);
  const openSize = Boolean(sizeanchorEl);

  const [selectedQty, setSelectedQty] = useState(props.qty);
  const [qtyanchorEl, setQtyAnchorEl] = useState(null);
  const openQty = Boolean(qtyanchorEl);

  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);
    if (value !== null) {
      setSelectedSize(value);
    }
  };

  const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };
  const handleCloseQty = (value) => {
    setQtyAnchorEl(null);
    if (value !== null) {
      setSelectedQty(value);
    }
  };
  return (
    <>
      <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
        <div className="img w-[15%] rounded-md overflow-hidden">
          <Link to="/product/5554" className="group">
            <img
              src="https://avatars.githubusercontent.com/u/180521240?v=4"
              alt=""
              className="w-full group-hover:scale-105 transition-all"
            />
          </Link>
        </div>

        <div className="info w-[85%] relative">
          <IoCloseSharp className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all" />
          <span className="text-[13px]">Sangrila</span>
          <h3 className="text-[15px]">
            <Link className="link">A line sllhdl lsidl slighsolvml</Link>
          </h3>
          <Rating name="size-small" defaultValue={4} size="small" readOnly />
          <div className="flex items-center gap-4 mt-2">
            <div className="relative">
              <span
                className="flex items-center justify-center bg-[#f1f1f1] text-[12px] font-[600] py-1 px-2 rounded-md cursor-pointer"
                onClick={handleClickSize}
              >
                Size: {selectedSize} <GoTriangleDown />
              </span>
              <Menu
                id="size-menu"
                anchorEl={sizeanchorEl}
                open={openSize}
                onClose={() => handleCloseSize(null)}
                slotProps={{
                  list: {
                    "aria-labelledby": "basic-button",
                  },
                }}
              >
                <MenuItem onClick={() => handleCloseSize("S")}>S</MenuItem>
                <MenuItem onClick={() => handleCloseSize("M")}>M</MenuItem>
                <MenuItem onClick={() => handleCloseSize("L")}>L</MenuItem>

                <MenuItem onClick={() => handleCloseSize("XL")}>XL</MenuItem>
                <MenuItem onClick={() => handleCloseSize("XXL")}>XXL</MenuItem>
              </Menu>
            </div>
            <div className="relative">
              <span
                className="flex items-center justify-center bg-[#f1f1f1] text-[12px] font-[600] py-1 px-2 rounded-md cursor-pointer"
                onClick={handleClickQty}
              >
                Qty :{selectedQty}   {""} <GoTriangleDown />
              </span>
              <Menu
                id="size-menu"
                anchorEl={qtyanchorEl}
                open={openQty}
                onClose={() => handleCloseQty(null)}
                slotProps={{
                  list: {
                    "aria-labelledby": "basic-button",
                  },
                }}
              >
                <MenuItem onClick={() => handleCloseQty(1)}>1</MenuItem>
                <MenuItem onClick={() => handleCloseQty(2)}>2</MenuItem>
                <MenuItem onClick={() => handleCloseQty(3)}>3</MenuItem>

                <MenuItem onClick={() => handleCloseQty(4)}>4</MenuItem>
                <MenuItem onClick={() => handleCloseQty(5)}>5</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <span className="price text-[14px] font-[600]">$55.77</span>
            <span className="oldPrice line-through text-gray-500  text-[14px] font-[600]">
              $55.77
            </span>
            <span className="price text-primary  text-[14px] font-[600]">
              55% OFF
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItems;
