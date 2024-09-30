"use client";

import  './Slidre.css';
import { SiGitbook } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <div className=''>
            <div className="bg-[#EFEEE9]  border-purple-700 md:h-[100vh] md:flex lg:gap-6 gap-6 justify-center items-center flex-col-reverse md:flex-row"> {/* Main div */}

                <div className="  lg:w-[40%] md:w-[50%] flex flex-col gap-y-4 justify-center items-start p-2 lg:pl-36 md:pl-6"> {/* 1st div */}
                    <h1 className="lg:text-5xl text-2xl font-bold text-[#000000]">Swap Books,<br /> Share Knowledge!</h1>
                    <p className="lg:text-xl font-bold text-[#464646] lg:pr-6 lg:text-balance w-full">Join Bookify today,
                        where you can easily exchange books with fellow readers,
                        and embark on exciting literary adventures together!</p>
                    <div className='flex gap-10 md:mt-8'>
                        <div> {/*book Collections*/}
                            <p className="font-bold text-[#000000] text-xl flex justify-start items-center gap-4"><SiGitbook className="text-3xl" /> <span>61+K</span></p>
                            <p className="font-bold text-[#000000]">Book Collections</p>
                        </div>
                        <div> {/*book Customers*/}
                            <p className="font-bold text-[#000000] text-xl flex justify-start items-center gap-4"><IoIosPeople className="text-3xl" /> <span>25,632</span></p>
                            <p className="font-bold text-[#000000]">Customers</p>
                        </div>
                    </div>

                    <a href="#_" className="relative inline-flex items-center md:mt-2 lg:px-12 px-2 py-3 overflow-hidden lg:text-lg font-medium text-black border-2 border-black rounded-md hover:text-white group hover:bg-gray-50">
                        <span className="absolute left-0 block w-full h-0 transition-all bg-[#464646] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                        <span className="relative">Go To Collections</span>
                    </a>


                </div>

                <div className=" lg:w-[60%] md:w-[50%]  "> {/* 2nd div */}

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

                            <SwiperSlide style={{ width: 360 }} className=' '>
                                <article className="card ">
                                    <img
                                        className="card__background"
                                        src="https://i.ibb.co.com/CPFGtyM/book5.jpg"
                                        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                                        width="1920"
                                        height="2193"
                                    />
                                    <div className="card__content flow">
                                        <h1 className='text-white text-3xl '>They Hunt</h1>
                                        <div className="card__content--container flow ">
                                            {/* <h2 className="card__title w-full"></h2> */}
                                            <p className="card__description">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                                            </p>
                                        </div>
                                        <button className="card__button text-white">Read more</button>
                                    </div>
                                </article>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: 360 }} className=' '>
                                <article className="card">
                                    <img
                                        className="card__background"
                                        src="https://i.ibb.co.com/2v34KGC/book4.jpg"
                                        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                                        width="1920"
                                        height="2193"
                                    />
                                    <div className="card__content flow">
                                        <h1 className='text-white text-3xl '>They Hunt</h1>
                                        <div className="card__content--container flow ">
                                            {/* <h2 className="card__title w-full"></h2> */}
                                            <p className="card__description">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                                            </p>
                                        </div>
                                        <button className="card__button text-white">Read more</button>
                                    </div>
                                </article>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: 360 }} className=' '>
                                <article className="card">
                                    <img
                                        className="card__background"
                                        src="https://i.ibb.co.com/r0n0yHV/book2.jpg"
                                        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                                        width="1920"
                                        height="2180"
                                    />

                                    <div className="card__content flow">
                                        <h1 className='text-white text-3xl '>They Hunt</h1>
                                        <div className="card__content--container flow ">
                                            {/* <h2 className="card__title w-full"></h2> */}
                                            <p className="card__description">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                                            </p>
                                        </div>
                                        <button className="card__button text-white">Read more</button>
                                    </div>
                                </article>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: 360 }} className=' '>
                                <article className="card">
                                    <img
                                        className="card__background"
                                        src="https://i.ibb.co.com/gtxLxvr/book6.jpg"
                                        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                                        width="1920"
                                        height="2000"
                                    />
                                    <div className="card__content flow">
                                        <h1 className='text-white text-3xl '>They Hunt</h1>
                                        <div className="card__content--container flow ">
                                            {/* <h2 className="card__title w-full"></h2> */}
                                            <p className="card__description">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                                            </p>
                                        </div>
                                        <button className="card__button text-white">Read more</button>
                                    </div>
                                </article>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: 360 }} className=' '>
                                <article className="card">
                                    <img
                                        className="card__background"
                                        src="https://i.ibb.co.com/28vFqKv/attachment-43117646.jpg"
                                        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                                        width="1920"
                                        height="2193"
                                    />
                                    <div className="card__content flow">
                                        <h1 className='text-white text-3xl '>They Hunt</h1>
                                        <div className="card__content--container flow ">
                                            {/* <h2 className="card__title w-full"></h2> */}
                                            <p className="card__description">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                                            </p>
                                        </div>
                                        <button className="card__button text-white">Read more</button>
                                    </div>
                                </article>
                            </SwiperSlide>

                            <SwiperSlide style={{ width: 360 }} className=' '>
                                <article className="card">
                                    <img
                                        className="card__background"
                                        src="https://i.ibb.co.com/FscNpG5/Rectangle-12-2.png"
                                        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                                        width="1920"
                                        height="2193"
                                    />
                                    <div className="card__content flow">
                                        <h1 className='text-white text-3xl '>They Hunt</h1>
                                        <div className="card__content--container flow ">
                                            {/* <h2 className="card__title w-full"></h2> */}
                                            <p className="card__description">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                                            </p>
                                        </div>
                                        <button className="card__button text-white">Read more</button>
                                    </div>
                                </article>
                            </SwiperSlide>


                        </Swiper>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Slider;