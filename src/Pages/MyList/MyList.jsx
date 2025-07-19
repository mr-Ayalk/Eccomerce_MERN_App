import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoTriangleDown } from "react-icons/go";
import { Rating } from "@mui/material";
import { BsFillBagCheckFill } from "react-icons/bs";

import MyListItems from "./MyListItems.jsx";
import AccountSidebar from "../../components/AccountSidebar/AccountSidebar.jsx";

function MyList() {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar />
        </div>

        <div className="col2 w-[70%]">
          <div className="shadow-md rounded-md  bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>My Lists</h2>
              <p className="mt-0">
                There are <span className="font-bold text-primary">2 </span>{" "}
                products in your My Lists
              </p>
            </div>

            <MyListItems />
            <MyListItems />

            <MyListItems />
            <MyListItems />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyList;
