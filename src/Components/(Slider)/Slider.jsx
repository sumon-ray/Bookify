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
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/Carousel"



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
        <div className="bg-[#EFEEE9] dark:bg-gradient-to-r from-[#0A0A0CC4] from-10% via-[#0A0A0CD6] via-30% to-[#0A0A0CF0] to-90%  lg:min-h-screen flex flex-col-reverse md:flex-row items-center justify-center  lg:gap-x-40  md:pt-16 lg:pt-9">

            <div className="text-center md:text-start w-full md:w-[60%] lg:w-[50%] space-y-1.5 md:space-y-2 lg:space-y-4 p-6 md:p-10 lg:p-0">
                <h1 className="text-2xl md:text-3xl lg:text-7xl font-bold text-[#000000] dark:text-white">Swap Books<br /> Share Knowledge</h1>
                <p className="lg:text-lg md:font-medium text-balance dark:text-white pt-1">Join Bookify today,
                    where you can easily exchange books with fellow readers,
                    and embark on exciting literary adventures together</p>
                <div className='flex justify-center md:justify-start items-center gap-x-7 pt-1.5 pb-0.5'>
                    <div>
                        <p className="font-bold text-[#000000] dark:text-white md:text-xl flex justify-start items-center gap-2">
                            <SiGitbook className="text-xl md:text-3xl " /><span>{data?.exchangeBooks + data?.rentBooks + data?.audioBooks - 1 || ''}+</span>
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-[#000000] md:text-xl flex justify-start items-center gap-2 dark:text-white">
                            <IoIosPeople className="text-2xl md:text-3xl " /><span>{data?.totalUsers - 1 || ''}</span>
                        </p>
                    </div>
                </div>
               <div className="flex justify-center md:justify-start ">
                 <button onClick={() => {
                     scrollBy(0, 2100)
                 }} className="flex md:hidden items-center gap-x-2.5 font-medium p-2 md:p-3 bg-[white] dark:bg-[#272727] rounded-md text-black dark:text-white border-2 border-[#000000] dark:border-white">
                     Go to Library <HiOutlineArrowNarrowRight className="text-lg md:text-xl mt-1" />
                 </button>
                 <button onClick={() => {
                     scrollBy(0, 1300)
                 }} className="hidden md:flex items-center gap-x-2.5 font-medium p-2 md:p-3 bg-[white] dark:bg-[#272727] rounded-md text-black dark:text-white border-2 border-[#000000] dark:border-white">
                     Go to Library <HiOutlineArrowNarrowRight className="text-lg md:text-xl mt-1" />
                 </button>
               </div>
            </div>

            {/* big device */}
            <div className="hidden lg:block">
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
                        style={{
                            width: '320px',
                            height: '460px',
                        }}
                    >

                        <SwiperSlide>
                            <div
                                style={{
                                    backgroundImage: `url('https://i.postimg.cc/zffgcKwm/Crime-and-Punishment.jpg')`,
                                    width: '100%',
                                    height: '100%',
                                }}
                                className="bg-cover bg-center rounded-lg object-fill"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                style={{
                                    backgroundImage: `url('https://media.audiobookstore.com/i/b/ib01/ib01-square-1536.jpg')`,
                                    width: '100%',
                                    height: '100%',
                                }}
                                className="bg-cover bg-center rounded-lg object-fill"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                style={{
                                    backgroundImage: `url(${'https://i.postimg.cc/MGHpXTPG/The-Midnight-Library.jpg'})`,
                                    width: '100%',
                                    height: '100%',
                                }}
                                className="bg-cover bg-center rounded-lg object-fill"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                style={{
                                    backgroundImage: `url(${'https://m.media-amazon.com/images/I/41VvIauMuuL._SY445_SX342_.jpg'})`,
                                    width: '100%',
                                    height: '100%',
                                }}
                                className="bg-cover bg-center rounded-lg object-fill"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                style={{
                                    backgroundImage: `url(${'https://i.postimg.cc/vmss9mZy/Project-Hail-Mary.jpg'})`,
                                    width: '100%',
                                    height: '100%',
                                }}
                                className="bg-cover bg-center rounded-lg object-fill"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                style={{
                                    backgroundImage: `url('https://i.postimg.cc/5tJs8ygy/war-and-peace.jpg')`,
                                    width: '100%',
                                    height: '100%',
                                }}
                                className="bg-cover bg-center rounded-lg object-fill"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                style={{
                                    backgroundImage: `url('https://i.postimg.cc/RVH9Y6Dw/The-Hitchhiker-s-Guide-to-the-Galaxy.jpg')`,
                                    width: '100%',
                                    height: '100%',
                                }}
                                className="bg-cover bg-center rounded-lg object-fill"
                            />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>

            <div className="lg:hidden pt-6 md:pt-0">
                <Carousel className="w-44 md:w-52">
                    <CarouselContent>
                        <CarouselItem><img src="https://m.media-amazon.com/images/I/41VvIauMuuL._SY445_SX342_.jpg" alt="cover" className="rounded-md h-52 md:h-64 w-44 md:w-52" /></CarouselItem>
                        <CarouselItem><img src="https://i.postimg.cc/zffgcKwm/Crime-and-Punishment.jpg" alt="cover" className="rounded-md h-52 md:h-64 w-44 md:w-52" /></CarouselItem>
                        <CarouselItem><img src="https://i.postimg.cc/MGHpXTPG/The-Midnight-Library.jpg" alt="cover" className="rounded-md h-52 md:h-64 w-44 md:w-52" /></CarouselItem>
                        <CarouselItem><img src="https://i.postimg.cc/5tJs8ygy/war-and-peace.jpg" alt="cover" className="rounded-md h-52 md:h-64 w-44 md:w-52" /></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>

        </div>
    );
};

export default Slider;
