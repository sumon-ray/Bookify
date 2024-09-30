"use client";
import { SiGitbook } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Slider = () => {
    return (

        <div className="bg-[#EFEEE9] md:min-h-[calc(100vh-86px)] md:flex items-center justify-between pl-32"> {/* Main div */}

            <div className="w-1/2 space-y-3"> {/* 1st div */}
                <h1 className="text-2xl lg:text-5xl  font-semibold text-[#000000]">Swap Books,<br /> Share Knowledge!</h1>

                <p className="text-lg text-balance">Join Bookify today,
                    where you can easily exchange books with fellow readers,
                    and embark on exciting literary adventures together!</p>

                <div className='flex items-center gap-x-10 pt-1.5 pb-0.5'>

                    <div> {/*book Collections*/}
                        <p className="font-bold text-[#000000] text-xl flex justify-start items-center gap-2"><SiGitbook className="text-3xl" /><span>300+</span></p>
                        <p className="font-bold text-[#000000]">Collections</p>
                    </div>

                    <div> {/*book Customers*/}
                        <p className="font-bold text-[#000000] text-xl flex justify-start items-center gap-2"><IoIosPeople className="text-3xl" /> <span>120</span></p>
                        <p className="font-bold text-[#000000]">Customers</p>
                    </div>

                </div>

                <button className="flex items-center gap-x-1 font-bold p-3 bg-white rounded-md ">Go to collection <HiOutlineArrowNarrowRight className="text-xl mt-1" /> </button>
            </div>

            <div className="w-1/2"> {/* 2nd div */}

                <div> {/* Slider */}
                    <Swiper
                        className=' w-full  h-full'
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 6000 }}
                        loop={true}
                        breakpoints={{
                            // Breakpoint for very large devices (1400px and up)
                            1400: {
                                slidesPerView: 2.5, // Set slidesPerView for 1400px and larger
                                spaceBetween: 0, // Set spaceBetween for very large screens
                            },
                            // Breakpoint for large devices (1200px - 1399px)
                            1200: {
                                slidesPerView: 2.5, // Set slidesPerView for large devices
                                spaceBetween: 0, // Set spaceBetween for large screens (lg)
                            },
                            // Breakpoint for small laptops (1024px - 1199px)
                            1024: {
                                slidesPerView: 1, // Set slidesPerView for small laptops
                                spaceBetween: 0, // Adjust spaceBetween as needed for small laptops
                            },
                            // Breakpoint for medium devices (768px - 1023px)
                            768: {
                                slidesPerView: 1, // Set slidesPerView to 1 for medium devices
                                spaceBetween: 80, // Set spaceBetween for medium screens (md)
                            },
                        }}

                    >
                        {/* Example Slides */}

                        <SwiperSlide style={{ width: 200 }}>
                            <div>
                                <img className="h-80 w-56 rounded-xl" src="https://i.ibb.co.com/gtxLxvr/book6.jpg" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ width: 200 }}>
                            <div>
                                <img className="h-80 w-56 rounded-xl" src="https://i.ibb.co.com/gtxLxvr/book6.jpg" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ width: 200 }}>
                            <div>
                                <img className="h-80 w-56 rounded-xl" src="https://i.ibb.co.com/gtxLxvr/book6.jpg" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ width: 200 }}>
                            <div>
                                <img className="h-80 w-56 rounded-xl" src="https://i.ibb.co.com/gtxLxvr/book6.jpg" />
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

            </div>

        </div>
    );
};

export default Slider;