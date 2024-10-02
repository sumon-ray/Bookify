import React from 'react';

const BookReviews = () => {
    return (
        <div className='border-2 h-[100vh] border-red-600 container mx-auto'>
            <h2 className='text-5xl font-bold text-center my-10 text-black'> Famous Book Review </h2>

            <div className='text-3xl grid grid-cols-12 border-2 border-green-800  gap-6 h-[790px]'> {/* Added gap for spacing */}


                <div className='border-2  col-span-3 row-span-4 rounded-2xl bg-cover bg-center:'
                    style={{
                        backgroundImage: "url('https://i.ibb.co.com/0nVjsBg/grid1.png')"
                    }}>
                    div 1
                </div>
                <div className='border-2  col-span-9 row-span-2 bg-cover bg-center rounded-2xl ' style={{
                        backgroundImage: "url('https://i.ibb.co.com/zHkPZyH/grid2.png')"
                    }}>
                    div 2
                </div>
                <div className='border-2  col-span-6 row-span-2 bg-cover bg-center rounded-2xl ' style={{
                        backgroundImage: "url('https://i.ibb.co.com/5cnVGn2/grid3.png')"
                    }}>
                    div 3
                </div>
                <div className='border-2  col-span-3 row-span-2 bg-cover bg-center rounded-2xl ' style={{
                        backgroundImage: "url('https://i.ibb.co.com/S3L166t/grid4.png')"
                    }}>
                    div 4
                </div>
                <div className='border-2  col-span-6 row-span-2  bg-cover bg-center rounded-2xl' style={{
                        backgroundImage: "url('https://i.ibb.co.com/FK5V7GL/grid5.png')"
                    }}>
                    div 5
                </div>
                <div className='border-2  col-span-6 row-span-2  bg-cover bg-center rounded-2xl' style={{
                        backgroundImage: "url('https://i.ibb.co.com/KWx0wcw/grid6.png')"
                    }}>
                    div 6
                </div>
            </div>
        </div>

    );
};

export default BookReviews;