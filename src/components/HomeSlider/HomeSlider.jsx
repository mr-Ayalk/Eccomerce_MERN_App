import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
function HomeSlider() {
  return (
    <div className="homeSlider py-4">
      <div className="container">
        <Swiper
          navigation={true}
          spaceBetween={10}
          autoplay={{
            delay: 25000,
            disabledOnInteration: false,
          }}
          modules={[Navigation, Autoplay]}
          ClassNames="sliderHomer"
        >
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://graphicsfamily.com/wp-content/uploads/edd/2024/01/Fashion-sale-web-banner-design-scaled.jpg"
                alt=""
                className="!w-full h-[400px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://static.vecteezy.com/system/resources/previews/008/174/590/non_2x/fashion-advertising-web-banner-illustration-vector.jpg"
                className="!w-full h-[400px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/2151094353/photo/rainbow-colored-fruits-and-vegetables-banner.webp?a=1&b=1&s=612x612&w=0&k=20&c=143dFz98CfuIh5GFQFxokgFg4gp9SlUDmhjL5fFMLno="
                alt=""
                className="!w-full h-[400px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1661964205360-b0621b5a9366?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                className="!w-full h-[400px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                className="!w-full h-[400px]"
                src="https://images.unsplash.com/photo-1556741533-411cf82e4e2d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeSlider;
