import { Box, Button, Rating } from "@mui/material";
import React, { useState } from "react";
import SendReview from "./SendReview";

export default function Review({ refetch, Data }) {
    const [value, setValue] = React.useState(4);
    const [openStar, setOpenStar] = useState(false)
    const totalRating = Data?.reduce((p, c) => p + c.rating, 0);
    const averageRating = parseInt(totalRating / Data?.length || 0);

    return (
        <div className="space-y-5 px-3">
            <h1 className="text-xl md:text-2xl font-bold">Reviews and Ratings</h1>

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
                                setOpenStar(true)
                            }}
                            size="large"
                        />
                    </Box>
                    <SendReview refetch={refetch} openStar={openStar} setOpenStar={setOpenStar} value={value} />
                </div>

                {/* total review */}
                <div>
                    <div className="hidden md:block w-full">
                        <div>
                            <h2 className="text-3xl fon-bold">{averageRating}.00</h2>
                            <Rating name="read-only" className="pt-2" value={averageRating} size="medium" readOnly />
                            <p className="font-semibold">{Data?.length} Ratings and {Data?.length} Review</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
