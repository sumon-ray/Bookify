import React from 'react';

const OurCollection = () => {
    return (
        <div className="container   mx-auto  lg:pt-20  py-6 mb-10"
        >
            <h1 className='text-5xl text-center mb-16 text-black'> Explore Our Collection</h1>

            <div className='md:grid lg:flex flex-wrap w-full md:grid-cols-3 grid-cols-1  justify-center items-center  md:gap-3 gap-10 md:pl-0 pl-14'>
                <div className="border-2 w-[218px] h-[180px]  rounded-2xl bg-[#B7B7B7] px-6 mt-36 ">
                    <div
                        className="w-[168px] h-[226px]  mt-[-130px] hover:mt-[-150px] hover:border-2 rounded-xl bg-cover bg-center"
                        style={{
                            backgroundImage: "url('https://i.postimg.cc/qMHvYp9P/Animal-Farm.jpg')"
                        }}
                    >
                        {/* Optional: You can add content here if needed */}
                    </div>
                    <div className=' text-center p-3'>
                        <h3 className='text-xl font-bold text-[#000000]'>Animal Farm</h3>
                        <p className='text-xl  text-[#EFEEE9]'>More....</p>
                    </div>

                </div>

                <div className="border-2 w-[218px] h-[180px] rounded-2xl bg-[#B7B7B7] px-6 mt-36">
                    <div
                        className="w-[168px] h-[226px]  mt-[-130px] bg-cover bg-center hover:mt-[-150px] hover:border-2 rounded-xl"
                        style={{
                            backgroundImage: "url('https://i.ibb.co.com/CPFGtyM/book5.jpg')"
                        }}
                    >
                        {/* Optional: You can add content here if needed */}
                    </div>
                    <div className=' text-center p-3'>
                        <h3 className='text-xl font-bold text-[#000000] '>Animal Farm</h3>
                        <p className='text-xl  text-[#EFEEE9]' >More....</p>
                    </div>

                </div>

                <div className="border-2 w-[218px] h-[180px] rounded-2xl bg-[#B7B7B7] px-6 mt-36">
                    <div
                        className="w-[168px] h-[226px]  mt-[-130px] bg-cover bg-center hover:mt-[-150px] hover:border-2 rounded-xl"
                        style={{
                            backgroundImage: "url('https://i.ibb.co.com/2v34KGC/book4.jpg')"
                        }}
                    >
                        {/* Optional: You can add content here if needed */}
                    </div>
                    <div className='text-white text-center p-3'>
                        <h3 className='text-xl font-bold text-[#000000] '>Animal Farm</h3>
                        <p className='text-xl  text-[#EFEEE9]' >More....</p>
                    </div>

                </div>

                <div className="border-2 w-[218px] h-[180px] rounded-2xl bg-[#B7B7B7] px-6 mt-36">
                    <div
                        className="w-[168px] h-[226px]  mt-[-130px] bg-cover bg-center hover:mt-[-150px] hover:border-2 rounded-xl "
                        style={{
                            backgroundImage: "url('https://i.ibb.co.com/r0n0yHV/book2.jpg')"
                        }}
                    >
                        {/* Optional: You can add content here if needed */}
                    </div>
                    <div className='text-white text-center p-3'>
                        <h3 className='text-xl font-bold text-[#000000] '>Animal Farm</h3>
                        <p className='text-xl  text-[#EFEEE9]' >More....</p>
                    </div>

                </div>

                <div className="border-2 w-[218px] h-[180px] rounded-2xl bg-[#B7B7B7] px-6 mt-36">
                    <div
                        className="w-[168px] h-[226px]  mt-[-130px] bg-cover bg-center  hover:mt-[-150px] hover:border-2 rounded-xl "
                        style={{
                            backgroundImage: "url('https://i.ibb.co.com/gtxLxvr/book6.jpg')"
                        }}
                    >
                        {/* Optional: You can add content here if needed */}
                    </div>
                    <div className='text-white text-center p-3'>
                        <h3 className='text-xl font-bold text-[#000000] '>Animal Farm</h3>
                        <p className='text-xl  text-[#EFEEE9]' >More....</p>
                    </div>

                </div>

                <div className="border-2 w-[218px] h-[180px] rounded-2xl bg-[#B7B7B7] px-6 mt-36">
                    <div
                        className="w-[168px] h-[226px]  mt-[-130px] bg-cover bg-center hover:mt-[-150px] hover:border-2 rounded-xl"
                        style={{
                            backgroundImage: "url('https://i.ibb.co.com/GWSDty2/Rectangle-12.png')"
                        }}
                    >
                        {/* Optional: You can add content here if needed */}
                    </div>
                    <div className='text-white text-center p-3'>
                        <h3 className='text-xl font-bold text-[#000000] '>Animal Farm</h3>
                        <p className='text-xl  text-[#EFEEE9]' >More....</p>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default OurCollection;