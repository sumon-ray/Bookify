import { Box, Button, Rating } from "@mui/material";
import React from "react";
import SendReview from "./SendReview";

export default function Review({ refetch, Data }) {
    const [value, setValue] = React.useState(4);
    const totalRating = Data?.reduce((p, c) => p + c.rating, 0);
    const averageRating = totalRating / Data?.length || 0;

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
                    <SendReview refetch={refetch} />
                </div>

                {/* total review */}
                <div>
                    <div className=" w-full">
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
