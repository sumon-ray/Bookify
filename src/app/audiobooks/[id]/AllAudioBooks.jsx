import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "@/Components/Heading/Heading";

const AllAudioBooks = ({ data }) => {
  return (
    <div className="container">
      <Heading heading="All Audio Books"></Heading>

      <div className="container space-y-6 sm:space-y-12 pb-20">
        <div className="grid justify-center grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {data?.map((book) => (
            <motion.div
              key={book._id}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <Link href={`/audiobooks/${book._id}`} className="block h-full">
                <div className="relative aspect-[2/3] overflow-hidden group">
                  <Image
                    src={book?.audioBookCover}
                    layout="fill"
                    objectFit=""
                    alt={book?.title || "Book Cover"}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h2
                      className="font-bold text-lg mb-1 line-clamp-1"
                      title={book?.title}
                    >
                      {book?.title}
                    </h2>
                    <p className="text-sm opacity-90">{book?.author}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllAudioBooks;