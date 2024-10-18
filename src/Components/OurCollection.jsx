import React from 'react';

const OurCollection = () => {
    return (
        <div className="max-w-7xl mx-auto  mt-[100px] mb-14  space-y-6">

            <div className='p-2 rounded-tl-2xl rounded-br-2xl border border-black max-w-[380px] h-12 mx-auto'>
                <h1 className='text-2xl uppercase font-bold text-center'>
                    Explore Rent Collection
                </h1>
            </div>

            <div className=' lg:flex flex flex-wrap w-full   justify-center items-center gap-10 md:pl-0  '>
                {/*  */}
                <div className="border-2  border-[#EFEEE9]  md:w-[218px] w-[200px] md:h-[180px] h-[150px]  rounded-2xl bg-[#EFEEE9] md:px-6 px-[15px] mt-36 ">
                    <div
                        className="w-[168px] md:h-[226px] h-[200px]   mt-[-130px] hover:mt-[-150px]  rounded-xl bg-cover bg-center"
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

                <div className="border-2  border-[#EFEEE9] md:w-[218px] w-[200px] md:h-[180px] h-[150px] rounded-2xl bg-[#EFEEE9] md:px-6 px-[15px] mt-36">
                    <div
                        className="w-[168px] md:h-[226px] h-[200px] mt-[-130px] bg-cover bg-center hover:mt-[-150px] hover: rounded-xl"
                        style={{
                            backgroundImage: "url('https://i.ibb.co.com/CPFGtyM/book5.jpg')"
                        }}
                    >
                        {/* Optional: You can add content here if needed */}
                    </div>
                    <div className=' text-center p-3'>
                        <h3 className='text-xl font-bold text-[#000000] '>Love</h3>
                        <p className='text-xl  text-[#EFEEE9]' >More....</p>
                    </div>

                </div>

                <div className="border-2 border-[#EFEEE9]  md:w-[218px] w-[200px] md:h-[180px] h-[150px] rounded-2xl bg-[#EFEEE9] md:px-6 px-[15px] mt-36">
                    <div
                        className="w-[168px] md:h-[226px] h-[200px]  mt-[-130px] bg-cover bg-center hover:mt-[-150px] hover: rounded-xl"
                        style={{
                            backgroundImage: "url('https://i.ibb.co.com/2v34KGC/book4.jpg')"
                        }}
                    >
                        {/* Optional: You can add content here if needed */}
                    </div>
                    <div className='text-white text-center p-3'>
                        <h3 className='text-xl font-bold text-[#000000] '>Money Making</h3>
                        <p className='text-xl  text-[#EFEEE9]' >More....</p>
                    </div>

                </div>

                <div className="border-2 border-[#EFEEE9] md:w-[218px] w-[200px] md:h-[180px] h-[150px] rounded-2xl bg-[#EFEEE9] md:px-6 px-[15px] mt-36">
                    <div
                        className="w-[168px] md:h-[226px] h-[200px]  mt-[-130px] bg-cover bg-center hover:mt-[-150px] hover: rounded-xl "
                        style={{
                            backgroundImage: "url('https://i.ibb.co.com/r0n0yHV/book2.jpg')"
                        }}
                    >
                        {/* Optional: You can add content here if needed */}
                    </div>
                    <div className='text-white text-center p-3'>
                        <h3 className='text-xl font-bold text-[#000000] '>They Hunt</h3>
                        <p className='text-xl  text-[#EFEEE9]' >More....</p>
                    </div>

                </div>

                <div className="border-2 border-[#EFEEE9] md:w-[218px] w-[200px] md:h-[180px] h-[150px] rounded-2xl bg-[#EFEEE9] md:px-6 px-[15px] mt-36">
                    <div
                        className="w-[168px] md:h-[226px] h-[200px]  mt-[-130px] bg-cover bg-center  hover:mt-[-150px] hover: rounded-xl "
                        style={{
                            backgroundImage: "url('https://i.ibb.co.com/gtxLxvr/book6.jpg')"
                        }}
                    >
                        {/* Optional: You can add content here if needed */}
                    </div>
                    <div className='text-white text-center p-3'>
                        <h3 className='text-xl font-bold text-[#000000] '>All Memories</h3>
                        <p className='text-xl  text-[#EFEEE9]' >More....</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default OurCollection;