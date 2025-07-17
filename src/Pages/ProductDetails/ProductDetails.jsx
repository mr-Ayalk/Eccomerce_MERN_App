import Breadcrumbs from "@mui/material/Breadcrumbs";
import Rating from "@mui/material/Rating";

import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import Button from "@mui/material/Button";
import { useState } from "react";

function ProductDetails() {
  const [productActionIndex, setProductActionIndex] = useState(null);
  return (
    <>
      <div className="py-5 ">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Fashion
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Cropped Satin Bomber Jacket
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5 ">
        <div className="container flex gap-8">
          <div className="productZoomContainer w-[30%]  ">
            <ProductZoom />
          </div>

          <div className="productContent w-[70%]  ">
            <h1 className="text-[24px] font-[600] mb-2">
              Chikankari Woven Kurta
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-[13px]">
                Brands:{" "}
                <span className="font-[500] text-black opacity-75">
                  House of Chikankari
                </span>
              </span>
              <Rating
                name="size-small"
                defaultValue={4}
                size="small"
                readOnly
              />
              <span className="text-[13px] cursor-pointer ">Review(5)</span>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <span className="oldPrice line-through text-gray-500 text-[20px] font-[500]">
                $400
              </span>
              <span className="price  text-primary text-[20px] font-[600]">
                $349.99
              </span>
              <span className="text-[14px] ">
                Available In Stoke :{" "}
                <span className="text-green-600 text-[14px] font-bold">
                  147 Items
                </span>
              </span>
            </div>

            <p className="mt-3 pr-10 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              at. Accusamus ad fugiat, nam perferendis vel adipisci, blanditiis
              voluptates suscipit, obcaecati nemo modi delectus odio dicta
              architecto aliquam aliquid accusantium. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Temporibus dolore, suscipit et
              asperiores sapiente nostrum animi alias accusantium repellendus?
              Blanditiis esse exercitationem ducimus sequi nulla laborum
              perspiciatis enim tempora dignissimos.
            </p>

            <div className="flex items-center gap-3">
              <span className="text-[16px]">Size:</span>
              <div className="flex items-center gap-1 actions">
                <Button
                  className={`${
                    productActionIndex === 0 ? "!bg-primary !text-white" : ""
                  } `}
                  onClick={() => setProductActionIndex(0)}
                >
                  S
                </Button>
                <Button
                  className={`${
                    productActionIndex === 1 ? "!bg-primary !text-white" : ""
                  } `}
                  onClick={() => setProductActionIndex(1)}
                >
                  M
                </Button>
                <Button
                  className={`${
                    productActionIndex === 2 ? "!bg-primary !text-white" : ""
                  } `}
                  onClick={() => setProductActionIndex(2)}
                >
                  L
                </Button>
                <Button
                  className={`${
                    productActionIndex === 3 ? "!bg-primary !text-white" : ""
                  } `}
                  onClick={() => setProductActionIndex(3)}
                >
                  XL
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
