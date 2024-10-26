"use client";
import { SiGitbook } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const Slider = () => {

    const { data } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await axios(`https://bookify-server-lilac.vercel.app/dashboard`)
            const data = await res.data;
            return data
        }
    })

    return (
        <div className="bg-[#EFEEE9] dark:bg-[#0A0A0C] md:min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-x-10 pb-10 md:pb-0 pt-0 md:pt-4 ">

            <div className="md:w-1/2 space-y-4 pl-10 md:pl-0">
                <h1 className="text-2xl lg:text-6xl font-bold text-[#000000] dark:text-white">Swap Books<br /> Share Knowledge</h1>
                <p className="text-lg text-balance dark:text-white">Join Bookify today,
                    where you can easily exchange books with fellow readers,
                    and embark on exciting literary adventures together</p>
                <div className='flex items-center gap-x-7 pt-1.5 pb-0.5'>
                    <div>
                        <p className="font-bold text-[#000000] dark:text-white text-xl flex justify-start items-center gap-1">
                            <SiGitbook className="text-3xl" /><span>{data?.exchangeBooks+data?.rentBooks+data?.audioBooks-1}+</span>
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-[#000000] text-xl flex justify-start items-center gap-1 dark:text-white">
                            <IoIosPeople className="text-3xl" /><span>{data?.totalUsers-1}</span>
                        </p>
                    </div>
                </div>
                <button className="flex items-center gap-x-1 font-bold p-3 bg-[white] dark:bg-[#0A0A0C] rounded-md text-black dark:text-white border-4 border-[#000000] dark:border-white">
                    Go to collection <HiOutlineArrowNarrowRight className="text-xl mt-1" />
                </button>
            </div>

            <div className="md:w-[400px] py-7 hidden md:block">
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

            <div className="md:w-[400px] py-7 block md:hidden">
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
                        style={{ width: '200px', height: '270px' }}
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
