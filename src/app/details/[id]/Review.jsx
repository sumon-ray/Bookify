import { Box, Button, Rating } from "@mui/material";
import React from "react";
import SendReview from "./SendReview";

export default function Review({refetch}) {
    const [value, setValue] = React.useState(2);

    return (
        <div className="space-y-5 px-3">
            <h1 className="text-2xl font-bold">Reviews and Ratings</h1>

            {/* rate and review */}
            <div className="flex justify-between">

                {/* send review method */}
                <div className="space-y-1.5">
                    <h1 className="text-xl font-medium">Rate this book</h1>
                    <Box sx={{ '& > legend': { mt: 2 } }}>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            size="large"
                        />
                    </Box>
                    {/* <Button variant="contained" className="bg-[#364957]" size="small">write review</Button> */}
                    <SendReview refetch={refetch}/>
                </div>

                {/* total review */}
                <div>
                    <div className="flex w-full">
                        <div>
                            <h2 className="text-3xl fon-bold">4.5</h2>
                            <Rating name="read-only" className="pt-2" value={2.5} precision={0.5} size="small" readOnly />
                            <p>3 Ratings and 1 Review</p>
                        </div>

                        <div className="fle flex-col mt-4 hidden">
                            <div className="flex items-center space-x-1">
                                <span className="flex-shrink-0 w-12 text-sm">5 star</span>
                                <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
                                    <div className="dark:bg-orange-500 h-4 w-5/6"></div>
                                </div>
                                <span className="flex-shrink-0 w-12 text-sm text-right">83%</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="flex-shrink-0 w-12 text-sm">4 star</span>
                                <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
                                    <div className="dark:bg-orange-500 h-4 w-4/6"></div>
                                </div>
                                <span className="flex-shrink-0 w-12 text-sm text-right">67%</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="flex-shrink-0 w-12 text-sm">3 star</span>
                                <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
                                    <div className="dark:bg-orange-500 h-4 w-3/6"></div>
                                </div>
                                <span className="flex-shrink-0 w-12 text-sm text-right">50%</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="flex-shrink-0 w-12 text-sm">2 star</span>
                                <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
                                    <div className="dark:bg-orange-500 h-4 w-2/6"></div>
                                </div>
                                <span className="flex-shrink-0 w-12 text-sm text-right">33%</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="flex-shrink-0 w-12 text-sm">1 star</span>
                                <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
                                    <div className="dark:bg-orange-500 h-4 w-1/6"></div>
                                </div>
                                <span className="flex-shrink-0 w-12 text-sm text-right">17%</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
