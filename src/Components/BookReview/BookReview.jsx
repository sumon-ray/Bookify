import Image from 'next/image';
import React from 'react';

const BookReview = () => {
    const reviews = [
        {
            name: "Jhon Wek",
            position: "CEO",
            imageUrl: "/image/men.jpg",
            feedback: "A thought-provoking tale of friendship and loyalty.",
            rating: 5,
        },
        {
            name: "Jane Doe",
            position: "CTO",
            imageUrl: "/image/men.jpg",
            feedback: "An inspiring story about overcoming challenges.",
            rating: 4,
        },
        {
            name: "Alice Smith",
            position: "COO",
            imageUrl: "/image/men.jpg",
            feedback: "A gripping mystery that kept me guessing.",
            rating: 5,
        },
        {
            name: "Bob Johnson",
            position: "CMO",
            imageUrl: "/image/men.jpg",
            feedback: "A captivating adventure that I couldn't put down.",
            rating: 4,
        },
    ];

    const renderStars = (rating) => {
        return (
            <div className="flex items-center">
                {Array.from({ length: 5 }, (_, index) => (
                    <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 .587l3.668 7.43 8.165 1.188-5.913 5.759 1.394 8.063L12 18.897l-7.314 3.845 1.394-8.063-5.913-5.759 8.165-1.188z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <section className='container pb-6 mx-auto px-8 mt-24 lg:px-20'>
            <h1 className=' text-3xl lg:text-5xl font-bold text-center mb-8'>
                Our Customers Love <br />
                What We Do 
            </h1>
            <p className='text-center mb-12  text-gray-700'>
            Discover what our satisfied customers have to say about their experiences with our products/services. <br />
        Join the conversation and let your voice be heard as we strive for excellence through your insights!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-white relative h-80 flex flex-col justify-center items-center rounded-xl shadow-lg transition-transform transform hover:scale-105 p-6">
                        <div style={{ backgroundImage: `url(${review.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="w-28 h-28 border-4 border-yellow-400 rounded-full flex justify-center items-center -mt-16 bg-white shadow-md">
                            <Image
                                src={review.imageUrl}
                                alt={review.name}
                                width={120}
                                height={120}
                                className="object-cover rounded-full"
                            />
                        </div>
                        <h1 className='text-xl font-semibold text-center mt-4'>{review.name}</h1>
                        <h2 className='text-md font-medium text-gray-700'>{review.position}</h2>
                        {renderStars(review.rating)}
                        <p className='text-sm text-gray-600 text-center px-4 mt-2'>{review.feedback}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BookReview;
