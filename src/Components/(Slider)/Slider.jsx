"use client";
import { SiGitbook } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from "next/image";


const Slider = () => {
    return (
        <div className="bg-[#EFEEE9] md:min-h-[99.7vh] flex flex-col-reverse md:flex-row items-center justify-center gap-x-10 pb-10 md:pb-0 pt-0 md:pt-4 ">

            <div className="md:w-1/2 space-y-4 pl-10 md:pl-0">
                <h1 className="text-2xl lg:text-6xl font-bold text-[#000000]">Swap Books<br /> Share Knowledge</h1>
                <p className="text-lg text-balance">Join Bookify today,
                    where you can easily exchange books with fellow readers,
                    and embark on exciting literary adventures together</p>
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
                <button className="flex items-center gap-x-1 font-bold p-3 bg-[white] rounded-md text-black border-4 border-[#000000]">
                    Go to collection <HiOutlineArrowNarrowRight className="text-xl mt-1" />
                </button>
            </div>

            <div className="md:w-[400px] py-7">
                <div>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards, Autoplay]}
                        className="mySwiper"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        style={{ width: '250px', height: '370px' }}
                    >
                        <SwiperSlide>
                            <div
                                style={{
                                    backgroundImage: `url(${'https://i.postimg.cc/MGHpXTPG/The-Midnight-Library.jpg'})`,
                                    width: '100%',
                                    height: '100%',
                                }}
                                className="bg-cover bg-center rounded-lg"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                style={{
                                    backgroundImage: `url(${'https://m.media-amazon.com/images/I/41VvIauMuuL._SY445_SX342_.jpg'})`,
                                    width: '100%',
                                    height: '100%',
                                }}
                                className="bg-cover bg-center rounded-lg"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                style={{
                                    backgroundImage: `url(${'https://i.postimg.cc/vmss9mZy/Project-Hail-Mary.jpg'})`,
                                    width: '100%',
                                    height: '100%',
                                }}
                                className="bg-cover bg-center rounded-lg"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                style={{
                                    backgroundImage: `url('https://i.postimg.cc/zffgcKwm/Crime-and-Punishment.jpg')`,
                                    width: '100%',
                                    height: '100%',
                                }}
                                className="bg-cover bg-center rounded-lg"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                style={{
                                    backgroundImage: `url('https://media.audiobookstore.com/i/b/ib01/ib01-square-1536.jpg')`,
                                    width: '100%',
                                    height: '100%',
                                }}
                                className="bg-cover bg-center rounded-lg"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                style={{
                                    backgroundImage: `url('https://i.postimg.cc/5tJs8ygy/war-and-peace.jpg')`,
                                    width: '100%',
                                    height: '100%',
                                }}
                                className="bg-cover bg-center rounded-lg"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                style={{
                                    backgroundImage: `url('https://i.postimg.cc/J4cxMMMW/The-Hunger-Games.jpg')`,
                                    width: '100%',
                                    height: '100%',
                                }}
                                className="bg-cover bg-center rounded-lg"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                style={{
                                    backgroundImage: `url('https://i.postimg.cc/RVH9Y6Dw/The-Hitchhiker-s-Guide-to-the-Galaxy.jpg')`,
                                    width: '100%',
                                    height: '100%',
                                }}
                                className="bg-cover bg-center rounded-lg"
                            />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Slider;
