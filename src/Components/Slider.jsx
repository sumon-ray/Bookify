"use client"; // Ensures it's running in a client-side environment

import { Open_Sans } from 'next/font/google';
const openSans = Open_Sans({
    subsets: ['cyrillic-ext'],
    weight: ['400', '700', '800'],
});

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="mx-auto   xl:w-full 2xl:w-2/3">
                        <img
                            src="https://i.ibb.co.com/KVJXWVY/Really-great-brand.png"
                            alt="Slide 1"
                            className="w-full h-auto"
                            priority
                        />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="mx-auto   xl:w-full 2xl:w-2/3">
                        <img
                            src="https://i.ibb.co.com/412j2pB/Really-great-brand-1.png"
                            alt="Slide 1"
                            className="w-full h-auto"
                            priority
                        />
                    </div>

                </SwiperSlide>
                
            </Swiper>


        </div>
    );
};

export default Slider;
