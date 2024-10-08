"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TopAuthor = () => {
    return (
        <div className="lg:my-32 bg-cover bg-center lg:h-[700px] md:h-[400px] h-screen "
            style={{ backgroundImage: "url('https://i.ibb.co/nMmcTJJ/bg-author.jpg')" }}>

            <h1 className="text-center text-xl pt-12 text-[#222222]">Shop by top author</h1>

            <div className="max-w-7xl mx-auto  mt-5 lg:p-8 bg-white lg:h-[500px] lg:my- md:grid grid-cols-3 gap-3">
                {/* Image Slider */}
                <div className="">
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
                        className=""
                    >
                        <SwiperSlide>
                            <img className=" w-full lg:h-[420px] md:h-[400px]"
                                src="https://i.ibb.co/mtyV5Tr/top-Athore1.jpg"
                                alt="Slide 2"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className=" w-full lg:h-[420px] md:h-[400px] "
                                src="https://i.ibb.co.com/7RnsxzB/top-Athor2.jpg"
                                alt="Slide 2"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Book Slider */}
                <div className="col-span-2  grid lg:grid-cols-2 grid-cols-1 items-center  lg:h-[420px] lg:ml-6">
                    <div className="flex max-w-[300px] h-[200px]  overflow-hidden   ">
                        <div
                            className="w-2/3 bg-cover"
                            style={{
                                backgroundImage: "url(https://i.postimg.cc/FK6PK9G6/To-Kill-a-Mockingbird.jpg)"
                            }}
                        ></div>

                        <div className="w-2/3 p-4 md:p-4">
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Fiction</p>
                            <h1 className=" font-bold text-gray-800 ">War and Peace</h1>

                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"><span className="font-bold">author:</span> Fyodor Dostoevsky</p>
                            <p className=" text-sm text-gray-600 dark:text-gray-400"><span className="font-bold">condition:</span> Good</p>
                            <p className=" text-sm text-gray-600 dark:text-gray-400"><span className="font-bold">publishYear:</span> 1880</p>

                        </div>
                    </div>
                    <div className="flex max-w-[300px] h-[200px]  overflow-hidden bg-white  shadow-lg dark:bg-gray-800">
                        <div
                            className="w-2/3 bg-cover"
                            style={{
                                backgroundImage: "url(https://i.postimg.cc/FK6PK9G6/To-Kill-a-Mockingbird.jpg)"
                            }}
                        ></div>

                        <div className="w-2/3 p-4 md:p-4">
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Fiction</p>
                            <h1 className=" font-bold text-gray-800 ">War and Peace</h1>

                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"><span className="font-bold">author:</span> Fyodor Dostoevsky</p>
                            <p className=" text-sm text-gray-600 dark:text-gray-400"><span className="font-bold">condition:</span> Good</p>
                            <p className=" text-sm text-gray-600 dark:text-gray-400"><span className="font-bold">publishYear:</span> 1880</p>

                        </div>
                    </div>
                    <div className="flex max-w-[300px] h-[200px]  overflow-hidden bg-white  shadow-lg dark:bg-gray-800">
                        <div
                            className="w-2/3 bg-cover"
                            style={{
                                backgroundImage: "url(https://i.postimg.cc/FK6PK9G6/To-Kill-a-Mockingbird.jpg)"
                            }}
                        ></div>

                        <div className="w-2/3 p-4 md:p-4">
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Fiction</p>
                            <h1 className=" font-bold text-gray-800 ">War and Peace</h1>

                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"><span className="font-bold">author:</span> Fyodor Dostoevsky</p>
                            <p className=" text-sm text-gray-600 dark:text-gray-400"><span className="font-bold">condition:</span> Good</p>
                            <p className=" text-sm text-gray-600 dark:text-gray-400"><span className="font-bold">publishYear:</span> 1880</p>

                        </div>
                    </div>
                    <div className="flex max-w-[300px] h-[200px]  overflow-hidden bg-white  shadow-lg dark:bg-gray-800">
                        <div
                            className="w-2/3 bg-cover"
                            style={{
                                backgroundImage: "url(https://i.postimg.cc/FK6PK9G6/To-Kill-a-Mockingbird.jpg)"
                            }}
                        ></div>

                        <div className="w-2/3 p-4 md:p-4">
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Fiction</p>
                            <h1 className=" font-bold text-gray-800 ">War and Peace</h1>

                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"><span className="font-bold">author:</span> Fyodor Dostoevsky</p>
                            <p className=" text-sm text-gray-600 dark:text-gray-400"><span className="font-bold">condition:</span> Good</p>
                            <p className=" text-sm text-gray-600 dark:text-gray-400"><span className="font-bold">publishYear:</span> 1880</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopAuthor;
