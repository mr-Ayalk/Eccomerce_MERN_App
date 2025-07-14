import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
function CatSlider() {
  return (
    <div className="homeCatSlider">
      <div className="container">
        <Swiper
          navigation={true}
          slidesPerView={8}
          spaceBetween={10}
          Pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm  text-center flex items-center justify-center flex-col ">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm  text-center flex items-center justify-center flex-col ">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm  text-center flex items-center justify-center flex-col ">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm  text-center flex items-center justify-center flex-col ">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm  text-center flex items-center justify-center flex-col ">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm  text-center flex items-center justify-center flex-col ">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm  text-center flex items-center justify-center flex-col ">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm  text-center flex items-center justify-center flex-col ">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm  text-center flex items-center justify-center flex-col ">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm  text-center flex items-center justify-center flex-col ">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm  text-center flex items-center justify-center flex-col ">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm  text-center flex items-center justify-center flex-col ">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm  text-center flex items-center justify-center flex-col ">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-[100px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default CatSlider;
