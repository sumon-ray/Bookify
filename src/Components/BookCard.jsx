"use client";

import { Card,Button } from "flowbite-react";
 

export function BookCard() {
  return (
 <div className="flex justify-between lg:flex-row flex-col">
     <Card
      className="max-w-sm mx-auto my-10"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://media.istockphoto.com/id/910852368/photo/student-searching-books.webp?a=1&b=1&s=612x612&w=0&k=20&c=ivbECZKHZc9busH3itn-EMvSWwRMfq4_lGOJ1vCzgoc="
      
    >
      <h5 className="text-2xl font-bold tracking-tight  ">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 ">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <Button>learn More</Button>
    </Card>
     <Card
      className="max-w-sm mx-auto my-10"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://media.istockphoto.com/id/910852368/photo/student-searching-books.webp?a=1&b=1&s=612x612&w=0&k=20&c=ivbECZKHZc9busH3itn-EMvSWwRMfq4_lGOJ1vCzgoc="
      
    >
      <h5 className="text-2xl font-bold tracking-tight  ">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 ">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
     <Card
      className="max-w-sm mx-auto my-10"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://media.istockphoto.com/id/910852368/photo/student-searching-books.webp?a=1&b=1&s=612x612&w=0&k=20&c=ivbECZKHZc9busH3itn-EMvSWwRMfq4_lGOJ1vCzgoc="
      
    >
      <h5 className="text-2xl font-bold tracking-tight  ">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 ">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
   
 </div>
  );
}
