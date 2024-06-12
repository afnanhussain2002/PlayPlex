import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/modules'


const ImageSlider = () => {
   
  return (
    <div className="mt-10">
      <Swiper
       spaceBetween={50}
       slidesPerView={3}
       onSlideChange={() => console.log('slide change')}
       onSwiper={(swiper) => console.log(swiper)}
        effect={'coverFlow'}
        grabCursor={'true'}
        centeredSlides={'true'}
        loo={'true'}
        coverflowEffect={
            {
                rotate:0,
                stretch:0,
                depth:100,
                modifier:2.5,
                
            }
        }
    
      >
        <SwiperSlide><img className="border-2 border-main-color shadow-lg shadow-green-500/50" src="https://themedox.com/mykd/wp-content/uploads/2023/10/gallery01.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="border-2 border-main-color shadow-lg shadow-green-500/50" src="https://themedox.com/mykd/wp-content/uploads/2023/10/gallery02.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="border-2 border-main-color shadow-lg shadow-green-500/50" src="https://themedox.com/mykd/wp-content/uploads/2023/10/gallery03.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="border-2 border-main-color shadow-lg shadow-green-500/50" src="https://themedox.com/mykd/wp-content/uploads/2023/10/gallery04.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="border-2 border-main-color shadow-lg shadow-green-500/50" src="https://themedox.com/mykd/wp-content/uploads/2023/10/gallery05.jpg" alt="" /></SwiperSlide>
        
        ...
      </Swiper>
    </div>
  );
};

export default ImageSlider;
