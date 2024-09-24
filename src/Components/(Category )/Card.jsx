import React from 'react';

const Card = ({ coverImage, title, author, genre, rating, location, link }) => {
    return (
        <div className="flex items-center justify-center bg-white">
            <div className="relative lg:w-[450px] w-[250px] lg:h-[400px] md:h-[250px] h-[250px] rounded-2xl overflow-hidden transition-transform duration-300 transform hover:scale-105"> {/* Added hover scale here */}
                <figure className="w-full h-full overflow-hidden">
                    <img
                        src={coverImage}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300" // Keep transition here for smooth effect
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 hover:opacity-100 transition-opacity duration-300"></div>
                </figure>
                <a
                    className="absolute inset-0 flex flex-col justify-end p-6 z-10"
                    href={link}
                >
                    <span className="bg-pink-500 rounded-full text-white py-1 px-3 w-1/4 text-xs">{genre}</span>
                    <h2 className="text-white text-xl font-bold mt-2">{title}</h2>
                    <footer className="items-center mt-4 text-white text-sm">
                        <div className='flex items-center my-4'>
                            <time className="flex items-center">
                                <svg className="w-4 h-4 text-yellow-400" fill="currentColor">
                                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" />
                                </svg>
                                <span className="ml-1">Dec 13, 2021</span>
                            </time>
                            <span className="flex items-center ml-4">
                                <svg className="w-4 h-4 text-yellow-400" fill="currentColor">
                                    <path d="M5.455 15L1 18.5V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12H5.455zm-.692-2H16V4H3v10.385L4.763 13zM8 17h10.237L20 18.385V8h1a1 1 0 0 1 1 1v13.5L17.545 19H9a1 1 0 0 1-1-1v-1z" />
                                </svg>
                                <span className="ml-1">120</span>
                            </span>
                        </div>
                        <div className="flex items-center mr-4">
                            <figure className="w-9 h-9 overflow-hidden rounded-full">
                                <img
                                    src="https://cdn.pixabay.com/photo/2016/11/29/03/15/man-1867009_960_720.jpg"
                                    alt={author}
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            <span className="ml-2">{author}</span>
                        </div>
                    </footer>
                </a>
            </div>
        </div>
    );
};

export default Card;
