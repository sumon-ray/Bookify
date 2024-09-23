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
                        <img className='h-full'
                            src="https://i.ibb.co/8NszP8B/sample-1.jpg"
                            alt="Slide 1"
                            className={styles.responsiveImage} 
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slideWrapper}>
                        <img
                            src="https://i.ibb.co/8NszP8B/sample-1.jpg"
                            alt="Slide 2"
                            className={styles.responsiveImage}
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
