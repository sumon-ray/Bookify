"use client";
import { SiGitbook } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css'; // Ensure this is correctly pointing to your CSS

const Slider = () => {
    return (
        <div className="bg-[#EFEEE9] md:min-h-[99.7vh] md:flex items-center justify-between md:pl-32  ">
            <div className="md:w-1/2 space-y-3 md:mb-0 mb-4 pl-10">
                <h1 className="text-2xl lg:text-5xl font-semibold text-[#000000] bg-indigo-400">Swap Books,<br /> Share Knowledge!</h1>
                <p className="text-lg text-balance">Join Bookify today,
                    where you can easily exchange books with fellow readers,
                    and embark on exciting literary adventures together!</p>
                <div className='flex items-center gap-x-10 pt-1.5 pb-0.5'>
                    <div>
                        <p className="font-bold text-[#000000] text-xl flex justify-start items-center gap-2">
                            <SiGitbook className="text-3xl" /><span>300+</span>
                        </p>
                        <p className="font-bold text-[#000000]">Collections</p>
                    </div>
                    <div>
                        <p className="font-bold text-[#000000] text-xl flex justify-start items-center gap-2">
                            <IoIosPeople className="text-3xl" /><span>120</span>
                        </p>
                        <p className="font-bold text-[#000000]">Customers</p>
                    </div>
                </div>
                <button className="flex items-center gap-x-1 font-bold p-3 bg-white rounded-md ">
                    Go to collection <HiOutlineArrowNarrowRight className="text-xl mt-1" />
                </button>
            </div>

            <div className="md:w-1/2">
                <div>
                    <Swiper
                        className='w-full h-full'
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        navigation // Enables navigation buttons
                        pagination={{ clickable: true }}
                        breakpoints={{
                            1400: { slidesPerView: 2.5, spaceBetween: 0 },
                            1200: { slidesPerView: 2.5, spaceBetween: 0 },
                            1024: { slidesPerView: 1, spaceBetween: 0 },
                            768: { slidesPerView: 1, spaceBetween: 80 },
                        }}
                    >
                        {/* Example Slides */}
                        <SwiperSlide style={{ width: 150 }}>
                            <div>
                                <img className="h-80 md:w-[225px] w-full rounded-xl" src={`https://i.postimg.cc/g2KRL9zP/download.jpg`} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: 150 }}>
                            <div>
                                <img className="h-80 md:w-[225px] w-full rounded-xl" src="https://i.postimg.cc/prgQCK4b/download.png" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: 150 }}>
                            <div>
                                <img className="h-80 md:w-[225px] w-full rounded-xl" src="https://i.postimg.cc/0jGh12s4/Rectangle-12-2.png" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: 150 }}>
                            <div>
                                <img className="h-80 md:w-[225px] w-full rounded-xl" src="https://i.ibb.co/gtxLxvr/book6.jpg" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Slider;
