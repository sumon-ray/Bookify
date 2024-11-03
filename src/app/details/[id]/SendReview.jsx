import { Rating } from '@mui/material';
import { Button } from '@nextui-org/react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

function SendReview({ refetch, openStar, setOpenStar , value}) {
    const [isOpen, setIsOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const pathName = usePathname().split('/')[2];
    const session = useSession()

    function handleSubmit(e) {
        e.preventDefault();
        if(rating<1)return toast.error('Please fill the Rating')
        const comment = {
            profile: session?.data?.user?.image || '',
            name: session?.data?.user?.name || '',
            email: session?.data?.user?.email || '',
            rating,
            review: e.target.review.value,
            bookId: pathName
        }
        axios.post('https://bookify-server-lilac.vercel.app/review', comment)
            .then(data => {
                if (data.data.insertedId) {
                    setIsOpen(false);
                    toast.success(` Submitted Successfully`)
                    refetch()
                }
            })
    }

    const handleRating = (e, newValue) => {
        setRating(newValue)
    }




    return (
        <div className="relative">
            <Button onClick={() => setIsOpen(true)} variant="contained" className="bg-[#364957] dark:bg-[#272727A6] text-white rounded-md font-medium" size="small">write review</Button>
            {isOpen && (
                <div
                    className="fixed inset-0 z-10 overflow-y-auto"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
                            &#8203;
                        </span>

                        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-[#EFEEE9] dark:bg-[#0A0A0C] rounded-md shadow-xl sm:my-8 sm:w-full sm:max-w-sm sm:p-4 sm:align-middle">
                            <form onSubmit={handleSubmit} className="flex flex-col max-w-xl p-8 rounded-xl lg:p-10 ">

                                <div className="flex flex-col items-center w-full ">
                                    <h2 className="text-xl font-bold text-center">What is your rate?</h2>
                                    <div className="flex flex-col items-center space-y-2 pb-2">
                                        <Rating className="pt-2" defaultValue={value} value={rating || value} onChange={handleRating} size="large" />
                                        <span className="text-base text-center font-medium text-balance">Please share your <br /> opinion
                                            about the book</span>
                                    </div>

                                    <div>
                                        <textarea rows="3" cols={'31'} name='review' placeholder="Your review..." className="p-4 w-[303px] md:w-[275px] rounded-md resize-none border-0 focus:outline-none focus:ring focus:ring-[#EFEEE9] dark:ring-0 dark:text-black" required></textarea>
                                    </div>

                                </div>

                                <div className="mt-2 md:mt-3 sm:flex sm:items-center sm:-mx-2">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsOpen(false)
                                            setOpenStar(false)
                                        }}
                                        className="w-full px-4 py-2 text-sm font-medium tracking-wide text-black dark:text-white capitalize transition-colors duration-300 transform border border-[#364957] dark:border-[#ffffff] rounded-md sm:w-1/2 sm:mx-2 focus:outline-none focus:ring focus:ring-[#364957] "
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#364957] rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 focus:outline-none focus:ring focus:ring-[#364957]"
                                    >
                                        Submit
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            )}
            {openStar && (
                <div
                    className="fixed inset-0 z-10 overflow-y-auto"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
                            &#8203;
                        </span>

                        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-[#EFEEE9] rounded-md shadow-xl sm:my-8 sm:w-full sm:max-w-sm sm:p-4 sm:align-middle">
                            <form onSubmit={handleSubmit} className="flex flex-col max-w-xl p-8 rounded-xl lg:p-10 ">

                                <div className="flex flex-col items-center w-full ">
                                    <h2 className="text-xl font-bold text-center">What is your rate?</h2>
                                    <div className="flex flex-col items-center space-y-2 pb-2">
                                        <Rating className="pt-2" defaultValue={value} value={rating || value} onChange={handleRating} size="large" />
                                        <span className="text-base text-center font-medium">Please share your opinion
                                            about the book</span>
                                    </div>

                                    <div>
                                        <textarea rows="3" cols={'31'} name='review' placeholder="Your review..." className="p-4 rounded-md resize-none border-0 focus:outline-none focus:ring focus:ring-[#EFEEE9]"></textarea>
                                    </div>

                                </div>

                                <div className="mt-3 sm:flex sm:items-center sm:-mx-2">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsOpen(false)
                                            setOpenStar(false)
                                        }}
                                        className="w-full px-4 py-2 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform border border-[#364957] rounded-md sm:w-1/2 sm:mx-2 focus:outline-none focus:ring focus:ring-[#364957] "
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#364957] rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 focus:outline-none focus:ring focus:ring-[#364957]"
                                    >
                                        Submit
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SendReview;
