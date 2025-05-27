"use client";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { TbExchange } from "react-icons/tb";
import { AiOutlineRead } from "react-icons/ai";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { Summarize } from "@mui/icons-material";
import BookSummaryModal from "./BookSummaryModal";
import { useCart } from "@/context/CartContext"; // Import useCart hook

export default function ImgDetails({ Book = {} }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loadingExchange, setLoadingExchange] = useState(false);
  // Removed loadingAddToCart state as it will be managed by useCart
  const { addToCart, loading: loadingCart } = useCart(); // Destructure addToCart and loading from useCart

  const {
    title,
    author,
    genre,
    condition,
    owner,
    coverImage,
    exchangeStatus,
    publishYear,
    totalPage,
    location,
    rating,
    _id,
    AuthorEmail,
    price,
  } = Book;
  const [isModalOpen, setModalOpen] = useState(false);

  const { data } = useQuery({
    queryKey: ['take books'],
    queryFn: async () => {
      const res = await axios(`https://bookify-server-lilac.vercel.app/take-book?email=${session?.user?.email}`);
      const data = await res.data;
      return data;
    },
    enabled: !!session?.user?.email,
  });

  const addToBook = () => {
    if (AuthorEmail === session?.user?.email) {
      setLoadingExchange(true);
      axios.post(`https://bookify-server-lilac.vercel.app/give-book?id=${_id}`, { ...Book, requester: session?.user?.email, bookId: _id, })
        .then(res => {
          toast.success(res.data.message);
          setLoadingExchange(false);
          router.push('/exchange');
        })
        .catch(error => toast.error(error.message));
    } else if (data?.length === 0) {
      setLoadingExchange(true);
      Swal.fire({
        title: "Are you sure?",
        text: `In this exchange, all books must belong to ${owner}`,
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#364957",
        cancelButtonColor: "#364957B3",
        confirmButtonText: "Confirm",
      }).then((result) => {
        if (result.isConfirmed) {
          setLoadingExchange(true);
          axios.post(`https://bookify-server-lilac.vercel.app/take-book?email=${session?.user?.email}&AuthorEmail=${AuthorEmail}&id=${_id}`, { ...Book, requester: session?.user?.email, bookId: _id, })
            .then(res => {
              if (res?.data) {
                Swal.fire({
                  title: `Book added successfully!`,
                  text: `Successfully completed the exchange with ${owner}.`,
                  icon: "success",
                });
                setLoadingExchange(false);
                router.push('/exchange');
              }
            }).catch(error => {
              toast.error(error);
              setLoadingExchange(false);
            });
        } else {
          setLoadingExchange(false);
        }
      }).catch(error => {
        toast.error(error);
        setLoadingExchange(false);
      });
    } else {
      setLoadingExchange(true);
      axios.post(`https://bookify-server-lilac.vercel.app/take-book?email=${session?.user?.email}&AuthorEmail=${AuthorEmail}&id=${_id}`, { ...Book, requester: session?.user?.email, bookId: _id, })
        .then(res => {
          toast.success(res.data.message);
          setLoadingExchange(false);
          router.push('/exchange');
        })
        .catch(error => {
          toast.error(error.message);
          setLoadingExchange(false);
        });
    }
  };

  // Modified handleAddToCart to use the useCart hook
  const handleAddToCart = () => {
    // Pass the relevant book details to the addToCart function from the context
    addToCart({ _id, title, author, price, coverImage });
    // The loading state and toast messages will now be handled by your useCart hook
    toast.success("added")
  };

  if (status === 'loading') {
    return (
      <div className="flex justify-center w-full items-center min-h-[62.3vh]">
        <div className='flex flex-col justify-center items-center gap-y-1'>
          <svg
            class="animate-spin [animation-duration:1.5s]"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              filerule="evenodd"
              clipRule="evenodd"
              d="M14.4304 0.0323927C14.0002 0.172039 13.7522 0.420298 13.6321 0.825659C13.5643 1.05258 13.5527 1.58013 13.5527 4.33426C13.5527 7.98251 13.5488 7.93596 13.9208 8.30835C14.4187 8.80487 15.5812 8.80487 16.0792 8.30835C16.4511 7.93596 16.4473 7.98251 16.4473 4.33426C16.4473 0.804324 16.4415 0.742259 16.1547 0.400903C15.9145 0.115792 15.6568 0.0207556 15.0775 0.00523939C14.8614 -0.00695113 14.6447 0.00214369 14.4304 0.0323927ZM24.4026 3.89593C24.1643 4.00648 23.7574 4.38857 21.816 6.33779C20.0316 8.12797 19.4872 8.70595 19.4 8.89602C19.3276 9.05362 19.2902 9.2251 19.2905 9.39857C19.2909 9.57205 19.3289 9.74338 19.4019 9.9007C19.5376 10.1916 19.9832 10.6494 20.2835 10.8065C20.5877 10.9655 21.0391 10.9636 21.3549 10.8026C21.6785 10.6358 26.1541 6.15547 26.3207 5.83157C26.4001 5.66482 26.4417 5.4826 26.4427 5.29788C26.4437 5.11317 26.404 4.93051 26.3265 4.7629C26.1121 4.40396 25.8092 4.10611 25.4469 3.89787C25.2865 3.81116 25.1072 3.7656 24.925 3.76526C24.7427 3.76492 24.5633 3.80982 24.4026 3.89593ZM22.2559 13.5858C21.9939 13.6581 21.7571 13.8017 21.5719 14.0009C21.3065 14.3597 21.2232 15.0889 21.3898 15.6029C21.5022 15.952 21.785 16.2352 22.1338 16.3477C22.3702 16.4253 22.7557 16.435 25.6406 16.435C28.4093 16.435 28.9189 16.4233 29.1475 16.3554C29.719 16.1848 29.998 15.7348 30 14.9842C30 14.2375 29.7152 13.7894 29.1242 13.611C28.9247 13.5509 28.2989 13.5392 25.6484 13.5431C23.8698 13.547 22.343 13.5664 22.2559 13.5858ZM20.3339 19.3811C20.0277 19.5207 19.5763 19.963 19.4194 20.2772C19.3393 20.4342 19.2957 20.6073 19.2916 20.7836C19.2876 20.9599 19.3233 21.1348 19.3961 21.2954C19.5395 21.6154 24.0422 26.1384 24.3968 26.3188C24.8986 26.5767 25.4139 26.4507 25.9332 25.9425C26.4447 25.4421 26.5803 24.899 26.3207 24.3928C26.1405 24.0379 21.6223 19.5304 21.3026 19.3869C21.1498 19.3207 20.9853 19.286 20.8188 19.285C20.6524 19.284 20.4874 19.3167 20.3339 19.3811ZM14.5059 21.342C14.2442 21.4158 14.0076 21.56 13.822 21.759C13.5546 22.1197 13.5527 22.1449 13.5527 25.6322C13.5527 28.4096 13.5643 28.9197 13.6321 29.1485C13.8026 29.7207 14.254 30 15 30C15.7459 30 16.1973 29.7207 16.3678 29.1485C16.488 28.7374 16.486 22.5018 16.364 22.143C16.3264 21.9983 16.2577 21.8636 16.1627 21.7484C16.0676 21.6331 15.9485 21.5401 15.8137 21.4758C15.6006 21.3594 15.4766 21.3303 15.1104 21.3167C14.9086 21.3046 14.706 21.313 14.5059 21.342Z"
              fill="#364957"
              className='dark:fill-[#ffffff]'
            />
            <path
              filerule="evenodd"
              clipRule="evenodd"
              d="M4.83402 3.86487C4.5279 4.00452 4.07647 4.44673 3.91953 4.76093C3.83948 4.918 3.79581 5.09111 3.79179 5.2674C3.78776 5.44369 3.82348 5.61861 3.89628 5.77918C4.03965 6.0992 8.54237 10.6222 8.89693 10.8026C9.39873 11.0605 9.91411 10.9344 10.4334 10.4263C10.9448 9.92589 11.0805 9.38282 10.8208 8.8766C10.6407 8.52167 6.12245 4.01421 5.80276 3.87069C5.65 3.80447 5.48545 3.76982 5.31899 3.76882C5.15252 3.76782 4.98757 3.80049 4.83402 3.86487ZM0.85443 13.6129C0.282873 13.7933 0 14.2491 0 14.9842C0.00193748 15.7348 0.280935 16.1847 0.852493 16.3554C1.08112 16.4233 1.59067 16.4349 4.35934 16.4349C7.24425 16.4349 7.62981 16.4252 7.86618 16.3477C8.03981 16.2905 8.19761 16.1934 8.32684 16.064C8.45607 15.9347 8.55313 15.7767 8.61018 15.6029C8.7768 15.0889 8.69349 14.3596 8.42805 13.9989C8.32166 13.8831 8.19656 13.7861 8.058 13.7118L7.79256 13.5644L4.4349 13.5528C1.73211 13.545 1.03268 13.5567 0.85443 13.6129ZM8.90274 19.4121C8.66443 19.5227 8.25756 19.9047 6.3162 21.854C4.53177 23.6442 3.98734 24.2221 3.90016 24.4122C3.82771 24.5698 3.79037 24.7413 3.7907 24.9148C3.79104 25.0882 3.82904 25.2596 3.90209 25.4169C4.03772 25.7078 4.48334 26.1655 4.78365 26.3226C5.08783 26.4817 5.53927 26.4797 5.85508 26.3188C6.17864 26.152 10.6542 21.6717 10.8208 21.3478C10.9002 21.181 10.9419 20.9988 10.9429 20.8141C10.9439 20.6294 10.9042 20.4467 10.8267 20.2791C10.6122 19.9201 10.3094 19.6223 9.94704 19.414C9.7867 19.3273 9.60738 19.2818 9.42513 19.2814C9.24289 19.2811 9.06341 19.326 8.90274 19.4121Z"
              fill="#364957"
              className='dark:fill-white'
            />
          </svg>
          <h1 className='text-lg font-medium dark:text-white'>Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-8 max-w-6xl mx-auto pb-5 pt-1 px-7">
      <figure className="md:w-[43%] bg-[#EFEEE9] dark:bg-[#0A0A0CCC] px-6 py-6 flex items-center justify-center border border-black dark:border-white dark:border-2 rounded-md">
        <Image
          height={100}
          width={100}
          src={coverImage}
          alt={title}
          className="w-full md:h-[453px] rounded-md object-fill"
          unoptimized
        />
      </figure>

      <div className="md:w-[57%] space-y-[18px] dark:text-white">
        <h1 className="font-bold text-2xl md:text-3xl capitalize">
          {title}
        </h1>

        {/* Display Price or Free status */}
        <p className="text-xl md:text-2xl font-bold">
          {price ? `৳${price}` : "Free"}
        </p>

        <div className="flex items-center gap-x-2">
          {[1, 2, 3, 4, 5].map((value, index) => (
            <svg
              key={index}
              className={`w-8 h-[30px] ${rating + 0.5 > value ? "text-[#FAAF00] dark:text-yellow-300" : "text-gray-300"
                }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
        </div>

        <div className="space-y-[11px] text-gray-700 dark:text-white ">
          <p>
            <span className="font-semibold">Email:</span> {AuthorEmail}
          </p>
          <p>
            <span className="font-semibold">Owner:</span> {owner}
          </p>
          <p>
            <span className="font-semibold">Writer:</span> {author}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {genre}
          </p>
          <p>
            <span className="font-semibold">Condition:</span> {condition}
          </p>
          <p>
            <span className="font-semibold">Exchange:</span> {exchangeStatus}
          </p>
          <p>
            <span className="font-semibold">Published:</span> {publishYear}
          </p>
          <p>
            <span className="font-semibold">Total Pages:</span> {totalPage}
          </p>
          <p>
            <span className="font-semibold">Location:</span> {location}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> {rating}/5
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-x-2 md:gap-x-3 flex-wrap">
          {/* Add to Cart / Free Button */}
          {price ? (
            <button
              onClick={handleAddToCart} // Use the new handleAddToCart
              type="button"
              className="flex items-center btn_1 text-xs md:text-base gap-0.5 px-2 py-1.5 w-28 justify-center text-white rounded-md transition dark:bg-[#0A0A0C]"
            >
              {loadingCart ? ( // Use loadingCart from useCart
                <svg
                  class="animate-spin [animation-duration:1.3s]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    filerule="evenodd"
                    clipRule="evenodd"
                    d="M14.4304 0.0323927C14.0002 0.172039 13.7522 0.420298 13.6321 0.825659C13.5643 1.05258 13.5527 1.58013 13.5527 4.33426C13.5527 7.98251 13.5488 7.93596 13.9208 8.30835C14.4187 8.80487 15.5812 8.80487 16.0792 8.30835C16.4511 7.93596 16.4473 7.98251 16.4473 4.33426C16.4473 0.804324 16.4415 0.742259 16.1547 0.400903C15.9145 0.115792 15.6568 0.0207556 15.0775 0.00523939C14.8614 -0.00695113 14.6447 0.00214369 14.4304 0.0323927ZM24.4026 3.89593C24.1643 4.00648 23.7574 4.38857 21.816 6.33779C20.0316 8.12797 19.4872 8.70595 19.4 8.89602C19.3276 9.05362 19.2902 9.2251 19.2905 9.39857C19.2909 9.57205 19.3289 9.74338 19.4019 9.9007C19.5376 10.1916 19.9832 10.6494 20.2835 10.8065C20.5877 10.9655 21.0391 10.9636 21.3549 10.8026C21.6785 10.6358 26.1541 6.15547 26.3207 5.83157C26.4001 5.66482 26.4417 5.4826 26.4427 5.29788C26.4437 5.11317 26.404 4.93051 26.3265 4.7629C26.1121 4.40396 25.8092 4.10611 25.4469 3.89787C25.2865 3.81116 25.1072 3.7656 24.925 3.76526C24.7427 3.76492 24.5633 3.80982 24.4026 3.89593ZM22.2559 13.5858C21.9939 13.6581 21.7571 13.8017 21.5719 14.0009C21.3065 14.3597 21.2232 15.0889 21.3898 15.6029C21.5022 15.952 21.785 16.2352 22.1338 16.3477C22.3702 16.4253 22.7557 16.435 25.6406 16.435C28.4093 16.435 28.9189 16.4233 29.1475 16.3554C29.719 16.1848 29.998 15.7348 30 14.9842C30 14.2375 29.7152 13.7894 29.1242 13.611C28.9247 13.5509 28.2989 13.5392 25.6484 13.5431C23.8698 13.547 22.343 13.5664 22.2559 13.5858ZM20.3339 19.3811C20.0277 19.5207 19.5763 19.963 19.4194 20.2772C19.3393 20.4342 19.2957 20.6073 19.2916 20.7836C19.2876 20.9599 19.3233 21.1348 19.3961 21.2954C19.5395 21.6154 24.0422 26.1384 24.3968 26.3188C24.8986 26.5767 25.4139 26.4507 25.9332 25.9425C26.4447 25.4421 26.5803 24.899 26.3207 24.3928C26.1405 24.0379 21.6223 19.5304 21.3026 19.3869C21.1498 19.3207 20.9853 19.286 20.8188 19.285C20.6524 19.284 20.4874 19.3167 20.3339 19.3811ZM14.5059 21.342C14.2442 21.4158 14.0076 21.56 13.822 21.759C13.5546 22.1197 13.5527 22.1449 13.5527 25.6322C13.5527 28.4096 13.5643 28.9197 13.6321 29.1485C13.8026 29.7207 14.254 30 15 30C15.7459 30 16.1973 29.7207 16.3678 29.1485C16.488 28.7374 16.486 22.5018 16.364 22.143C16.3264 21.9983 16.2577 21.8636 16.1627 21.7484C16.0676 21.6331 15.9485 21.5401 15.8137 21.4758C15.6006 21.3594 15.4766 21.3303 15.1104 21.3167C14.9086 21.3046 14.706 21.313 14.5059 21.342Z"
                    fill="#ffffff"
                  />
                  <path
                    filerule="evenodd"
                    clipRule="evenodd"
                    d="M4.83402 3.86487C4.5279 4.00452 4.07647 4.44673 3.91953 4.76093C3.83948 4.918 3.79581 5.09111 3.79179 5.2674C3.78776 5.44369 3.82348 5.61861 3.89628 5.77918C4.03965 6.0992 8.54237 10.6222 8.89693 10.8026C9.39873 11.0605 9.91411 10.9344 10.4334 10.4263C10.9448 9.92589 11.0805 9.38282 10.8208 8.8766C10.6407 8.52167 6.12245 4.01421 5.80276 3.87069C5.65 3.80447 5.48545 3.76982 5.31899 3.76882C5.15252 3.76782 4.98757 3.80049 4.83402 3.86487ZM0.85443 13.6129C0.282873 13.7933 0 14.2491 0 14.9842C0.00193748 15.7348 0.280935 16.1847 0.852493 16.3554C1.08112 16.4233 1.59067 16.4349 4.35934 16.4349C7.24425 16.4349 7.62981 16.4252 7.86618 16.3477C8.03981 16.2905 8.19761 16.1934 8.32684 16.064C8.45607 15.9347 8.55313 15.7767 8.61018 15.6029C8.7768 15.0889 8.69349 14.3596 8.42805 13.9989C8.32166 13.8831 8.19656 13.7861 8.058 13.7118L7.79256 13.5644L4.4349 13.5528C1.73211 13.545 1.03268 13.5567 0.85443 13.6129ZM8.90274 19.4121C8.66443 19.5227 8.25756 19.9047 6.3162 21.854C4.53177 23.6442 3.98734 24.2221 3.90016 24.4122C3.82771 24.5698 3.79037 24.7413 3.7907 24.9148C3.79104 25.0882 3.82904 25.2596 3.90209 25.4169C4.03772 25.7078 4.48334 26.1655 4.78365 26.3226C5.08783 26.4817 5.53927 26.4797 5.85508 26.3188C6.17864 26.152 10.6542 21.6717 10.8208 21.3478C10.9002 21.181 10.9419 20.9988 10.9429 20.8141C10.9439 20.6294 10.9042 20.4467 10.8267 20.2791C10.6122 19.9201 10.3094 19.6223 9.94704 19.414C9.7867 19.3273 9.60738 19.2818 9.42513 19.2814C9.24289 19.2811 9.06341 19.326 8.90274 19.4121Z"
                    fill="#ffffff"
                  />
                </svg>
              ) : (
                "Add to Cart"
              )}
            </button>
          ) : (
            <button
              type="button"
              className="flex items-center btn_1 text-xs md:text-base gap-0.5 px-2 py-1.5 w-28 justify-center text-white rounded-md transition dark:bg-[#0A0A0C]"
            >
              Free
            </button>
          )}

          {/* Exchange Button */}
          <button
            onClick={addToBook}
            type="button"
            className="flex items-center btn_1 text-xs md:text-base gap-0.5 px-2 py-1.5 w-28 justify-center text-white rounded-md transition dark:bg-[#0A0A0C]"
          >
            {loadingExchange ? (
              <svg
                class="animate-spin [animation-duration:1.3s]"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  filerule="evenodd"
                  clipRule="evenodd"
                  d="M14.4304 0.0323927C14.0002 0.172039 13.7522 0.420298 13.6321 0.825659C13.5643 1.05258 13.5527 1.58013 13.5527 4.33426C13.5527 7.98251 13.5488 7.93596 13.9208 8.30835C14.4187 8.80487 15.5812 8.80487 16.0792 8.30835C16.4511 7.93596 16.4473 7.98251 16.4473 4.33426C16.4473 0.804324 16.4415 0.742259 16.1547 0.400903C15.9145 0.115792 15.6568 0.0207556 15.0775 0.00523939C14.8614 -0.00695113 14.6447 0.00214369 14.4304 0.0323927ZM24.4026 3.89593C24.1643 4.00648 23.7574 4.38857 21.816 6.33779C20.0316 8.12797 19.4872 8.70595 19.4 8.89602C19.3276 9.05362 19.2902 9.2251 19.2905 9.39857C19.2909 9.57205 19.3289 9.74338 19.4019 9.9007C19.5376 10.1916 19.9832 10.6494 20.2835 10.8065C20.5877 10.9655 21.0391 10.9636 21.3549 10.8026C21.6785 10.6358 26.1541 6.15547 26.3207 5.83157C26.4001 5.66482 26.4417 5.4826 26.4427 5.29788C26.4437 5.11317 26.404 4.93051 26.3265 4.7629C26.1121 4.40396 25.8092 4.10611 25.4469 3.89787C25.2865 3.81116 25.1072 3.7656 24.925 3.76526C24.7427 3.76492 24.5633 3.80982 24.4026 3.89593ZM22.2559 13.5858C21.9939 13.6581 21.7571 13.8017 21.5719 14.0009C21.3065 14.3597 21.2232 15.0889 21.3898 15.6029C21.5022 15.952 21.785 16.2352 22.1338 16.3477C22.3702 16.4253 22.7557 16.435 25.6406 16.435C28.4093 16.435 28.9189 16.4233 29.1475 16.3554C29.719 16.1848 29.998 15.7348 30 14.9842C30 14.2375 29.7152 13.7894 29.1242 13.611C28.9247 13.5509 28.2989 13.5392 25.6484 13.5431C23.8698 13.547 22.343 13.5664 22.2559 13.5858ZM20.3339 19.3811C20.0277 19.5207 19.5763 19.963 19.4194 20.2772C19.3393 20.4342 19.2957 20.6073 19.2916 20.7836C19.2876 20.9599 19.3233 21.1348 19.3961 21.2954C19.5395 21.6154 24.0422 26.1384 24.3968 26.3188C24.8986 26.5767 25.4139 26.4507 25.9332 25.9425C26.4447 25.4421 26.5803 24.899 26.3207 24.3928C26.1405 24.0379 21.6223 19.5304 21.3026 19.3869C21.1498 19.3207 20.9853 19.286 20.8188 19.285C20.6524 19.284 20.4874 19.3167 20.3339 19.3811ZM14.5059 21.342C14.2442 21.4158 14.0076 21.56 13.822 21.759C13.5546 22.1197 13.5527 22.1449 13.5527 25.6322C13.5527 28.4096 13.5643 28.9197 13.6321 29.1485C13.8026 29.7207 14.254 30 15 30C15.7459 30 16.1973 29.7207 16.3678 29.1485C16.488 28.7374 16.486 22.5018 16.364 22.143C16.3264 21.9983 16.2577 21.8636 16.1627 21.7484C16.0676 21.6331 15.9485 21.5401 15.8137 21.4758C15.6006 21.3594 15.4766 21.3303 15.1104 21.3167C14.9086 21.3046 14.706 21.313 14.5059 21.342Z"
                  fill="#ffffff"
                />
                <path
                  filerule="evenodd"
                  clipRule="evenodd"
                  d="M4.83402 3.86487C4.5279 4.00452 4.07647 4.44673 3.91953 4.76093C3.83948 4.918 3.79581 5.09111 3.79179 5.2674C3.78776 5.44369 3.82348 5.61861 3.89628 5.77918C4.03965 6.0992 8.54237 10.6222 8.89693 10.8026C9.39873 11.0605 9.91411 10.9344 10.4334 10.4263C10.9448 9.92589 11.0805 9.38282 10.8208 8.8766C10.6407 8.52167 6.12245 4.01421 5.80276 3.87069C5.65 3.80447 5.48545 3.76982 5.31899 3.76882C5.15252 3.76782 4.98757 3.80049 4.83402 3.86487ZM0.85443 13.6129C0.282873 13.7933 0 14.2491 0 14.9842C0.00193748 15.7348 0.280935 16.1847 0.852493 16.3554C1.08112 16.4233 1.59067 16.4349 4.35934 16.4349C7.24425 16.4349 7.62981 16.4252 7.86618 16.3477C8.03981 16.2905 8.19761 16.1934 8.32684 16.064C8.45607 15.9347 8.55313 15.7767 8.61018 15.6029C8.7768 15.0889 8.69349 14.3596 8.42805 13.9989C8.32166 13.8831 8.19656 13.7861 8.058 13.7118L7.79256 13.5644L4.4349 13.5528C1.73211 13.545 1.03268 13.5567 0.85443 13.6129ZM8.90274 19.4121C8.66443 19.5227 8.25756 19.9047 6.3162 21.854C4.53177 23.6442 3.98734 24.2221 3.90016 24.4122C3.82771 24.5698 3.79037 24.7413 3.7907 24.9148C3.79104 25.0882 3.82904 25.2596 3.90209 25.4169C4.03772 25.7078 4.48334 26.1655 4.78365 26.3226C5.08783 26.4817 5.53927 26.4797 5.85508 26.3188C6.17864 26.152 10.6542 21.6717 10.8208 21.3478C10.9002 21.181 10.9419 20.9988 10.9429 20.8141C10.9439 20.6294 10.9042 20.4467 10.8267 20.2791C10.6122 19.9201 10.3094 19.6223 9.94704 19.414C9.7867 19.3273 9.60738 19.2818 9.42513 19.2814C9.24289 19.2811 9.06341 19.326 8.90274 19.4121Z"
                  fill="#ffffff"
                />
              </svg>
            ) : (
              <>
                <TbExchange className="hidden md:block text-xl" /> Exchange
              </>
            )}
          </button>

          <button onClick={() => setModalOpen(true)} className="flex items-center btn_2 text-xs md:text-base gap-0.5 px-2 py-1.5 text-white rounded-md transition">
            <Summarize className="hidden md:block text-xl" />
            Summary
          </button>

          {/* Read Button */}
          <button
            onClick={() => router.push(`/read/${_id}`)}
            className="flex items-center btn_2 gap-1 px-2 py-2 text-white text-xs md:text-base rounded-md transition dark:bg-[white] dark:text-black"
          >
            <AiOutlineRead className="hidden md:block text-xl" />
            Read
          </button>

          {/* Edit Button */}
          <button
            onClick={() => {
              if (AuthorEmail !== session?.user?.email) return toast.error(`Only owner can edit`);
              router.push(`/update/${_id}`);
            }}
            className={
              AuthorEmail === session?.user?.email
                ? 'flex items-center btn_2 gap-1 px-2 py-2 text-xs md:text-base text-white rounded-md transition dark:bg-white dark:text-black '
                : 'hidden'
            }
          >
            <FaEdit className="hidden md:block text-xl" />
            Edit
          </button>
        </div>
      </div>

      <BookSummaryModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} book={Book} />
    </div>
  );
}