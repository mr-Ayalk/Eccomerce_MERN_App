import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
function ProductListing() {
  return (
    <section className="py-5">
      <div className="container">
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Fashion
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <div className="bg-white p-2 mt-4">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white ">
            <Sidebar />
          </div> 
        </div>
      </div>
    </section>
  );
}

export default ProductListing;
