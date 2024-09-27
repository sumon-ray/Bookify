"use client";

import { Open_Sans } from 'next/font/google';
import styles from './style.module.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Component from './Component';
import { Button } from 'flowbite-react';

const openSans = Open_Sans({
    subsets: ['cyrillic-ext'],
    weight: ['400', '700', '800'],
});

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
                modules={[Pagination, Navigation,Autoplay]}
                autoplay={{ delay: 3000 }}
                className={styles.mySwiper}
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div
                        // className="h-[100%]"
                        className={styles.slideWrapper}
                        style={{
                            backgroundImage: 'url("https://i.ibb.co/8NszP8B/sample-1.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '400px', // Set height as needed
                        }}
                    >
                       
                 <div className="flex flex-col w-2/3 lg:p-8 md:-mx-9 top-20 absolute items-center text-left">
                 <h1 className=' flex text-3xl md:text-4xl font-bold'>
                       H.G.Wells Empire of the Ants
                       </h1>
                       <p className='text-xl'>
                       Cover up front of book and leave summary
                       </p>
                       <Button size='lg' className='outline   my-4 bg-zinc-500'> Shop Now</Button>
                 </div>
                    </div>
                </SwiperSlide>
          
                {/* <SwiperSlide>
                    <Component />
                </SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default Slider;

