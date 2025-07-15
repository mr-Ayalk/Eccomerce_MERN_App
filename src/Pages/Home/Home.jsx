import React from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import CatSlider from "../../components/CatSlider/CatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

import AdsBannerSlider from "../../components/AdsBannerSlider/AdsBannerSlider";
import ProductsSlider from "../../components/ProductsSlider/ProductsSlider";
import BlogItem from "../../components/BlogItem/BlogItem";
import Footer from "../../components/Footer/Footer";
function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
      <CatSlider />
      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-[600]">Popular Products</h2>
              <p className="text-[14px] font-[400]">
                Do not miss the current offers until the end of March
              </p>
            </div>

            <div className="reghtSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jewellery" />
                <Tab label="Food" />
                <Tab label="Fruits" />
                <Tab label="Furniture" />
                <Tab label="Books" />
              </Tabs>
            </div>
          </div>
          <ProductsSlider items={6} />
        </div>
      </section>
      <section className="py-4 pt-2  bg-white">
        <div className="container">
          <div className="freeShipping w-[80%] mx-auto py-4 p-4 border-2 border border-[#ff5252] flex items-center justify-between rounded-md mb-7">
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
          <AdsBannerSlider items={4} />
        </div>
      </section>
      <section className="py-5 bg-white pt-0">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Latest Products</h2>
          <ProductsSlider items={6} />
          <AdsBannerSlider items={3} />
        </div>
      </section>
      <section className="py-5 bg-white pt-0">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Featured Products</h2>
          <ProductsSlider items={6} />
          <AdsBannerSlider items={4} />
        </div>
      </section>
      <section className="py-5 pb-8 bg-white pt-0 blogSection">
        <div className="container">
          <h2 className="text-[20px] mb-4 font-[600]">From Blogs</h2>
          <Swiper
            navigation={true}
            slidesPerView={4}
            spaceBetween={30}
            Pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
