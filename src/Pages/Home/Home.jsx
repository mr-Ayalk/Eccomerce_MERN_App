import React from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import CatSlider from "../../components/CatSlider/CatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
function Home() {
  return (
    <>
      <HomeSlider />
      <CatSlider />
      <section className="py-16 bg-white">
        <div className="container">
          <div className="freeShipping w-full py-4 p-4 border-2 border border-[#ff5252] flex items-center justify-between rounded-md ">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[20px] font-[600]">FREE SHIPPING</span>
            </div>

            <div className="col2 ">
              <p className="mb-0 font-[500] ">
                Free Delivery Now On Your First Order and Over $200
              </p>
            </div>
            <p className="font-bold text-[25px]">-Only $200*</p>
          </div>
        </div>
      </section>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </>
  );
}

export default Home;
