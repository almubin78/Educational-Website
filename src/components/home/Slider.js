import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper.min.css';
import 'swiper/css/bundle';
// import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';

// SwiperCore.use([Pagination, Navigation, Autoplay]);

const Slider = ({ students }) => {
    console.log(students);
    return (
        <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            spaceBetween={50}
            scrollbar={{ draggable: true }}
            //for enable scrollbar this must use: import 'swiper/css/bundle'; 
            autoplay={{ delay: 5000 }}
        >
            <SwiperSlide>55</SwiperSlide>
        </Swiper>
    );
};

export default Slider;