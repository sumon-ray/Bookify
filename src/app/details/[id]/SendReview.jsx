import { Button, Rating } from '@mui/material';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

function SendReview({refetch}) {
    const [isOpen, setIsOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const pathName = usePathname().split('/')[2];
    const session = useSession()

    
    function handleSubmit(e) {
        e.preventDefault();
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
            <Button onClick={() => setIsOpen(true)} variant="contained" className="bg-[#364957]" size="small">write review</Button>
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

                        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                            <form onSubmit={handleSubmit} className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 ">

                                <div className="flex flex-col items-center w-full">
                                    {/* <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2> */}
                                    <div className="flex flex-col items-center py-6 space-y-3">
                                        <span className="text-center">How was your experience?</span>
                                        <Rating className="pt-2" defaultValue={0} value={rating} onChange={handleRating} size="large" />
                                    </div>

                                    <div>
                                        <textarea rows="3" name='review' placeholder="Message..." className="p-4 rounded-md resize-none "></textarea>
                                    </div>

                                </div>

                                <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
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
