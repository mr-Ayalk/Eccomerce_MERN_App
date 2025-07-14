import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
function HomeSlider() {
  return (
    <div className="homeSlider py-4">
      <div className="container">
        <Swiper
          navigation={true}
          spaceBetween={10}
          modules={[Navigation]}
          ClassNames="sliderHomer"
        >
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/2207307745/photo/e-commerce-business-owner-using-a-tablet-to-track-orders-in-a-home-office-managing-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=2g5nvIVsuYj0ioCZZQZlLVtC35fVgU7laG--tru2-MM="
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
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhzfGVufDB8fDB8fHww"
                alt=""
                className="!w-full h-[400px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                className="!w-full h-[400px]"
                src="https://media.istockphoto.com/id/2124491413/photo/washing-machines-and-dishwashers-in-a-high-end-electronics-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=XAXtzEbXq8CS28y9ogtNUT2sCTSvrpEkLnXXP5JjpgQ="
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
