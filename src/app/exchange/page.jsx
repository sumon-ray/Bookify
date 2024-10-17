"use client";
import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import { FiPlusCircle } from "react-icons/fi";
import { TbExchange } from "react-icons/tb";
import Link from "next/link"; // Assuming you're using Next.js for navigation
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

export default function Page() {
  // current user 
  const session = useSession()
  const user = session?.data?.user?.email
  // molas State
  const [giveBooksModal, setgiveBooksModal] = useState(false);
  const [takeBooksModal, setTakeBooksModal] = useState(false);

  // Featch Data and storing State
  const [books, setBooks] = useState([]);
  const [takeBooksMine, setTakeBooksMine] = useState([])
  const [allBooks, setAllBooks] = useState([])

  //Choose (give and take books states) 
  const [giveBooks, setGivesBooks] = useState([])
  const [takeBooks, setTakeBooks] = useState([])
  console.log(allBooks);

  // fuction of set current book to state
  const hanleChooseBtn = (book) => {
    // ShowGiveBook.push(book)
    setGivesBooks((prev) => [...prev, book]);
    setgiveBooksModal(false)
  }
  console.log(giveBooks);

  // Fetch books when the modal opens (GiVE BOOKS)
  const fetchBooks = async () => {
    try {
      const response = await axios.get(`https://bookify-server-lilac.vercel.app/books?email=${user}`);
      setBooks(response.data); // Assuming the response is an array of books
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  // Fetch books when the modal opens (Take BOOKS)

  const fetchAllBooks = async () => {
    try {
      const response = await axios.get('https://bookify-server-lilac.vercel.app/books');
      const filterBooks = response.data.filter(book => book.AuthorEmail !== user)

      setAllBooks(filterBooks); // Assuming the response is an array of books
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  // Fetch (Take BOOKS) 
  const fetchTakeBooks = async () => {
    try {
      const response = await axios.get(`https://bookify-server-lilac.vercel.app/take-book?email=nuhash3218@gmail.com`);
      setTakeBooksMine(response.data); // Assuming the response is an array of books
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  // Post to Exchange Collection
  const addToTakeBook = (book) => {

    // POST request to the server
    axios.post("https://bookify-server-lilac.vercel.app/take-book", {
      ...book,
      requester: user,
      bookId: book._id,
    })
      .then(response => {
        // Handle success response
        toast.success("The book has been added to your exchange list!")
        // router.push('/exchange')
      })
      .catch(error => {
        // Handle error response
        toast.error("Something went wrong! Please try again.");
      });
  };

  useEffect(() => {
    if (giveBooksModal) {
      fetchBooks();
    }
  }, [giveBooksModal]);

  useEffect(() => {
    fetchTakeBooks();
  }, [takeBooksModal]);

  useEffect(() => {
    if (takeBooksModal) {
      fetchAllBooks();
    }
  }, [takeBooksModal, addToTakeBook]);





  return (
    <div className="max-w-7xl mx-auto md:pt-20 min-h-screen">
      <h1 className="md:text-4xl text-xl font-bold text-center md:p-2.5 p-2 md:w-[440px] w-[270px] mx-auto rounded-tl-2xl rounded-br-2xl md:mb-12 md:mt-10 mb-8 border border-black text-black">
        Exchange Your Books
      </h1>

      {/* Mine div */}
      <div className="flex lg:gap-6 flex-col md:flex-row px-4">

        {/* Take Books */}
        <div className="lg:w-[50%] md:h-[500px] w-full bg-[#EFEEE9] rounded-lg md:p-6">
          <h3 className="text-2xl font-semibold text-center text-[#000000] md:mt-0 mt-3">Take Books</h3>
          <p className="font-semibold text-center text-[#000000]">Add the books you are taking in exchange here</p>

          {/* Take Books CARDS CONTAINER */}
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-3 mg:px-4 pl-2 h-[370px] mt-6 overflow-y-scroll">
            <div onClick={() => setTakeBooksModal(true)} className="w-[130px] h-[170px] bg-[#cbebfb] rounded-xl flex justify-center items-center">
              <FiPlusCircle className="text-6xl text-[#10a9fe]" />
            </div>
            {
              takeBooksMine.map(takeBook => <div
                key={takeBook._id}
                className="w-[130px] h-[170px] bg-[#cbebfb] bg-cover bg-center rounded-xl flex justify-center items-end font-semibold text-center"
                style={{ backgroundImage: `url(${takeBook.coverImage})` }}
              >
                {/* <FiPlusCircle className="text-6xl text-[#10a9fe]" /> */}
                <h3 className="bg-slate-100 bg-opacity-40">{takeBook.title}</h3>
              </div>)
            }
          </div>
        </div>

        {/* Give Books */}
        <div className="lg:w-[50%] md:h-[500px] w-full bg-[#EFEEE9] rounded-lg md:p-6">
          <h3 className="text-2xl font-semibold text-center text-[#000000] mt-3">Give Books</h3>
          <p className="font-semibold text-center text-[#000000]">Add the books you are giving in exchange here</p>

          {/* Give Books CARDS CONTAINER */}
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-3 md:px-4 pl-2 h-[370px] mt-6 overflow-y-scroll">
            <div onClick={() => setgiveBooksModal(true)} className="w-[130px] h-[170px] bg-[#cbebfb] rounded-xl flex justify-center items-center">
              <FiPlusCircle className="text-6xl text-[#10a9fe]" />
            </div>

            {
              giveBooks.map(giveBook => <div key={giveBook._id} onClick={() => setgiveBooksModal(true)} className="w-[130px] h-[170px] bg-[#cbebfb] bg-cover bg-center rounded-xl flex justify-center items-end"
                style={{ backgroundImage: `url(${giveBook.coverImage})` }}
              >
                {/* <FiPlusCircle className="text-6xl text-[#10a9fe]" /> */}
                <h3 className="bg-slate-100 bg-opacity-40 text-center font-semibold ">{giveBook.title}</h3>
              </div>)
            }

          </div>
        </div>

      </div>

      {/* Exchange Button */}
      <div className="flex justify-center items-center my-8">
        <button type="button" className="btn_1 flex items-center">
          <TbExchange /> Exchange
        </button>
      </div>

      {/* Modal  of Give Books*/}
      {giveBooksModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center p-4 bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
            <h2 className="text-xl font-bold mb-4">Books Available for Exchange</h2>
            {books.length > 0 ? (
              <div className="overflow-y-scroll max-h-72"> {/* Added scrollable area */}
                <table className="w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Cover</th>
                      <th className="px-5 py-3 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Title</th>
                      <th className="px-5 py-3 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Author</th>
                      <th className="px-5 py-3 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.map((book) => ( // Display only the first 5 books
                      <tr key={book._id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-16 h-16">
                              <img
                                className="w-full h-full rounded-xl"
                                src={book.coverImage}
                                alt={book.title}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{book.title}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{book.author}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <button
                            onClick={() => {/* setCurrentAudio(book); Uncomment if needed */ }}
                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                          >
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <button onClick={() => hanleChooseBtn(book)} className="relative">choose</button>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>No books available.</p>
            )}
            <button
              onClick={() => setgiveBooksModal(false)}
              className="mt-4 text-black bg-[#EFEEE9] px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal of Take Books*/}
      {takeBooksModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center p-4 bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
            <h2 className="text-xl font-bold mb-4">Books Available for Exchange</h2>
            {allBooks.length > 0 ? (
              <div className="overflow-y-scroll max-h-72"> {/* Added scrollable area */}
                <table className="w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Cover</th>
                      <th className="px-5 py-3 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Title</th>
                      <th className="px-5 py-3 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Author</th>
                      <th className="px-5 py-3 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allBooks.map((book) => ( // Display only the first 5 books
                      <tr key={book._id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-16 h-16">
                              <img
                                className="w-full h-full rounded-xl"
                                src={book.coverImage}
                                alt={book.title}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{book.title}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{book.author}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <button
                            onClick={() => {/* setCurrentAudio(book); Uncomment if needed */ }}
                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                          >
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <button onClick={() => addToTakeBook(book)} className="relative">Exchange</button>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>No books available.</p>
            )}
            <button
              onClick={() => setTakeBooksModal(false)}
              className="mt-4 text-black bg-[#EFEEE9] px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}


    </div>
  );
}
