import Breadcrumbs from "@mui/material/Breadcrumbs";
import Rating from "@mui/material/Rating";

import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom/ProductZoom";

function ProductDetails() {
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
            <h1 className="text-[22px] font-[600] mb-2">
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
              <span className="oldPrice line-through text-gray-500 text-[18px] font-[500]">
                $400
              </span>
              <span className="price  text-primary text-[18px] font-[600]">
                $349.99
              </span>
            </div>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              at. Accusamus ad fugiat, nam perferendis vel adipisci, blanditiis
              voluptates suscipit, obcaecati nemo modi delectus odio dicta
              architecto aliquam aliquid accusantium. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Temporibus dolore, suscipit et
              asperiores sapiente nostrum animi alias accusantium repellendus?
              Blanditiis esse exercitationem ducimus sequi nulla laborum
              perspiciatis enim tempora dignissimos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
