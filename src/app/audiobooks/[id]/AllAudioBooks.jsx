import Link from "next/link";
import Image from "next/image";

const AllAudioBooks = ({ data }) => {
  return (
    <div className="container ">
      <div className="p-2 mt-4 rounded-tl-2xl rounded-br-2xl border border-black dark:border-gray-300 max-w-[400px] h-12 mx-auto">
        <h1 className="md:text-xl lg:text-2xl uppercase font-bold text-center">
          All Audio Books
        </h1>
      </div>

      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data?.map((book) => (
            <Link
              href={`/audiobooks/${book._id}`}
              key={book._id}
              className="w-auto h-auto bg-[#EFEEE9] rounded-md shadow-lg hover:shadow-sm-light dark:bg-[#0A0A0C] dark:text-white"
            >
              <div className="space-y-3">
                <Image
                  src={book?.audioBookCover}
                  className="w-full rounded-t-md"
                  height={150}
                  width={200}
                  alt={book?.title || "Book Cover"}
                />
                <div className="flex justify-between p-1 m-1">
                  <div className="text-left pl-2 pb-2">
                    <h1 className="font-bold md:uppercase" title={book?.title}>
                      {book?.title?.slice(0, 20)}...
                    </h1>
                    <h1 className="font-medium">
                      <span className="mr-1">By:</span>
                      {book?.author}
                    </h1>
                  </div>

                  {/* rating section */}
                  <div className="flex cursor-pointer mt-2">
                    {/* Rating SVGs here */}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllAudioBooks;