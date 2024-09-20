"use client"
import { Open_Sans } from 'next/font/google';
const openSans = Open_Sans({   
    subsets: ['cyrillic-ext'], 
    weight: ['400', '700','800'],  
  });


import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
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
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        className="w-full lg:h-[70vh] md:h-[70vh] h-[50vh] bg-cover bg-center openSans"
                        style={{ backgroundImage: "url('https://i.ibb.co/8NszP8B/sample-1.jpg')" }}
                    >
                        <div className=' h-full p-4  text-start flex flex-col justify-center items-start lg:ml-[160px] '>
                            <h2 className="text-[#282828] lg:text-6xl text-4xl  font-semibold">H.G.Wells <br />Empire of the Ants</h2>
                            <h3 className='text-[#777777] lg:text-[40px] lg:w-1/3 w-2/3 italic font-extralight '>Cover up front of book and leave summary</h3>
                            <button className='border-2 border-[#064532] text-[#064532] p-2 text-xl mt-2'>Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div
                        className="w-full lg:h-[70vh] md:h-[70vh] h-[50vh] bg-cover bg-center"
                        style={{ backgroundImage: "url('https://i.ibb.co.com/XbWXrjV/sample-2.jpg')" }}
                    >
                        <div className=' h-full p-4  text-start flex flex-col justify-center items-start lg:ml-[950px] '>
                            <h2 className="text-[#282828] lg:text-6xl text-4xl  font-semibold">H.G.Wells <br />Empire of the Ants</h2>
                            <h3 className='text-[#777777] lg:text-[40px] lg:w-1/3 w-2/3 italic font-extralight '>Cover up front of book and leave summary</h3>
                            <button className='border-2 border-[#064532] text-[#064532] p-2 text-xl mt-2'>Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide> */}
                <SwiperSlide>
                    <div
                        className="w-full lg:h-[70vh] md:h-[70vh] h-[50vh] bg-cover bg-center openSans"
                        style={{ backgroundImage: "url('https://i.ibb.co/8NszP8B/sample-1.jpg')" }}
                    >
                        <div className=' h-full p-4  text-start flex flex-col justify-center items-start lg:ml-[160px] '>
                            <h2 className="text-[#282828] lg:text-6xl text-4xl  font-semibold">H.G.Wells <br />Empire of the Ants</h2>
                            <h3 className='text-[#777777] lg:text-[40px] lg:w-1/3 w-2/3 italic font-extralight '>Cover up front of book and leave summary</h3>
                            <button className='border-2 border-[#064532] text-[#064532] p-2 text-xl mt-2'>Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;
