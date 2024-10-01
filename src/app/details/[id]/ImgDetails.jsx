export default function ImgDetails({ Book }) {

    const { title, author, genre, condition, owner, coverImage, exchangeStatus, publishYear, totalPage, location, rating } = Book || {}

    return (

        <div className="flex gap-x-10 max-w-6xl mx-auto pt-4 pb-5">

            {/* img */}
            <figure className="w-[40%] bg-[#EFEEE9] px-7 py-[18px] flex items-center justify-center border border-black rounded-md">
                <img src={coverImage} alt="" className='w-full h-[370px] rounded-md' />
            </figure>
            {/* details */}
            <div className="w-[60%] py-2 space-y-2">
                <h1 className="font-bold text-2xl capitalize">{title}</h1>

                {/* star */}
                <div className="flex items-center mb-5">
                    <svg className={`w-4 h-4 ms-1 ${rating >= 1 ? 'text-yellow-300' : 'text-gray-300'} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className={`w-4 h-4 ms-1 ${rating >= 2 ? 'text-yellow-300' : 'text-gray-300'} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className={`w-4 h-4 ms-1 ${rating >= 3 ? 'text-yellow-300' : 'text-gray-300'} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className={`w-4 h-4 ms-1 ${rating >= 4 ? 'text-yellow-300' : 'text-gray-300'} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className={`w-4 h-4 ms-1 ${rating >= 5 ? 'text-yellow-300' : 'text-gray-300'} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                </div>

                <p><span className="font-bold mr-1">Writer:</span>{author}</p>
                <p><span className="font-bold mr-1">Owner:</span>{owner}</p>
                <p><span className="font-bold mr-1">Category:</span>{genre}</p>
                <p><span className="font-bold mr-1">Condition:</span>{condition}</p>
                <p><span className="font-bold mr-1">Exchange:</span>{exchangeStatus}</p>
                <p><span className="font-bold mr-1">Published:</span>{publishYear}</p>
                <p><span className="font-bold mr-1">Total Page:</span>{totalPage}</p>
                <p><span className="font-bold mr-1">Rating:</span>{rating}</p>
                <p><span className="font-bold mr-1">location:</span>{location}</p>
                {/* button */}
                <div className='pt-1'>
                    <button type="button" className="btn_1">Add to cart</button>
                    <button type="button" className="btn_2">Edit</button>
                </div>

            </div>

        </div>

    )
}
