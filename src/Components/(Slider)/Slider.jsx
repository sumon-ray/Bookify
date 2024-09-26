"use client"; 

import { Open_Sans } from 'next/font/google';
import styles from './style.module.css'; 
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
        <div className={styles.container}> 
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                autoplay={{ delay: 3000 }} 
                className={styles.mySwiper} 
            >
                <SwiperSlide>
                    <div className={styles.slideWrapper}> 
                        <img 
                            src="https://i.ibb.co/8NszP8B/sample-1.jpg"
                            alt="Slide 1"
                            className={`${styles.responsiveImage} h-full`} 
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

// sarfaraj
