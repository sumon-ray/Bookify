"use client";
import * as React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MdDelete } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import lottieImage from "../../../..//../public/image/404.json";
import Lottie from "lottie-react";
import LoadingSpinner from "./LoadingSpinner";
import Header from "./Header";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const sortingOptions = [
  { label: " Low to High Page", value: "totalPage_asc" },
  { label: " High to Low Page", value: "totalPage_desc" },
];

function getStyles(option, selectedOption, theme) {
  return {
    fontWeight:
      selectedOption === option.value
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

export default function MyBooks() {
  const [sortOrder, setSortOrder] = React.useState("");
  const theme = useTheme();
  const queryClient = useQueryClient();

  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleSortChange = (event) => {
    const { value } = event.target;
    setSortOrder(value);
  };

  const { data: session, status } = useSession();

  // Fetch books
  const { data, isLoading, error } = useQuery({
    queryKey: ["myBooks"],
    queryFn: async () => {
      const res = await axios.get(`https://bookify-server-lilac.vercel.app/books?email=${session?.user?.email}`)
      return res.data;
    },
    staleTime: 5 * 60 * 1000,
    enabled: !!session?.user?.email
  });

  // console.log(data)

  const deleteBookMutation = useMutation({
    mutationFn: async (bookId) => {
      const response = await axios.delete(
        `https://bookify-server-lilac.vercel.app/book/${bookId}`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myBooks"]);
      setSnackbar({
        open: true,
        message: "Book deleted successfully!",
        severity: "success",
      });
    },
    onError: (error) => {
      console.error("Error deleting book:", error);
      setSnackbar({
        open: true,
        message: "Failed to delete the book.",
        severity: "error",
      });
    },
  });

  const sortedBooks = React.useMemo(() => {
    if (!data) {
      return [];
    }

    // console.log("Books data:", data);

    const booksCopy = [...data];

    if (sortOrder === "totalPage_asc") {
      booksCopy.sort((a, b) => (a.totalPage || 0) - (b.totalPage || 0));
    } else if (sortOrder === "totalPage_desc") {
      booksCopy.sort((a, b) => (b.totalPage || 0) - (a.totalPage || 0));
    }

    console.log("Sorted Books:", booksCopy);

    return booksCopy;
  }, [data, sortOrder]);

  if (isLoading || status === 'loading') return <LoadingSpinner />;
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Error fetching books</p>
      </div>
    );

  return (
    <section className="pb-8 md:pb-12 px-5 md:px-0">
      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      {/* Header */}
      <Header />

      {/* Sorting Dropdown */}
      <div className="flex items-center justify-between my-4 pt-4 pb-5">
        <h1 className="text-xl font-bold text-[18.61px] text-[#000000] dark:text-gray-300">
          My Books
        </h1>
        <div className=" outline-2 outline-[#a1a5a8b1] border rounded-md ">
          <FormControl
            className="dark:bg-[#272727CC] text-black"
            sx={{ width: 200 }}
            size="small"
          >
            <Select
              className=" dark:bg-[#272727CC] text-black dark:text-white"
              displayEmpty
              value={sortOrder}
              onChange={handleSortChange}
              input={
                <OutlinedInput sx={{ border: "", outline: "#a1a5a8b1" }} />
              }
              renderValue={(selected) => {
                if (selected === "") {
                  return (
                    <p className="flex dark:text-gray-300 items-center font-medium gap-x-1">
                      Sort by Total Pages
                    </p>
                  );
                }
                const selectedLabel = sortingOptions.find(
                  (option) => option.value === selected
                )?.label;
                return selectedLabel || "Sort by Total Pages";
              }}
              MenuProps={{
                PaperProps: {
                  className: "dark:bg-[#272727CC] text-black dark:text-white ", // Tailwind dark mode background
                  sx: {
                    color: "black", // Keep this for the text color inside the menu
                    "& .MuiMenuItem-root": {
                      // padding: "10px",
                      "&:hover": {
                        backgroundColor: "", // Hover background
                      },
                    },
                  },
                },
              }}
              inputProps={{ "aria-label": "Sort by Total Pages" }}
              sx={{
                "& .MuiSelect-select": {
                  border: "black",
                  outline: "#a1a5a8b1",
                  "&:focus": {
                    border: "black",
                    outline: "#a1a5a8b1",
                  },
                },
                "& .MuiSelect-icon": {
                  color: "#a1a5a8b1",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value="">
                <p>Select Sorting</p>
              </MenuItem>
              {sortingOptions.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  style={getStyles(option, sortOrder, theme)}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {sortedBooks.length > 0 ? (
          sortedBooks.map((book) => (
            <div
              key={book._id}
              className="bg-white dark:bg-[#272727CC] rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 relative overflow-hidden"
            >
              <Link
                href={`/details/${book._id}`}
                className="block rounded-lg "
              >
                <div className="relative w-full h-[250px] md:h-[250px] lg:h-[350px]">
                  <Image
                    src={book?.coverImage}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                    height={250}
                    width={150}
                    alt={book?.title || "Book Cover"}
                  />
                </div>
                <div className="p-4 opacity-0 transition-opacity duration-300 hover:opacity-100 absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50">
                  <h1 className="font-bold text-lg md:uppercase text-white" title={book?.title}>
                    {book?.title
                      ? book.title.length > 20
                        ? `${book.title.slice(0, 20)}...`
                        : book.title
                      : ""}
                  </h1>
                  <p className="text-gray-300 text-sm">
                    Total Pages: {book?.totalPage || "N/A"}
                  </p>
                  <div className="flex items-center mt-2">
                    <Tooltip title="Delete">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#364957",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                            cancelButtonText: "No, cancel!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              deleteBookMutation.mutate(book._id);
                              Swal.fire(
                                "Deleted!",
                                "Your book has been deleted.",
                                "success"
                              );
                            }
                          });
                        }}
                        className="text-[#364957] hover:text-red-700 bg-white rounded-full p-1 shadow-md"
                        aria-label="Delete Book"
                      >
                        {deleteBookMutation.isLoading ? (
                          <LoadingSpinner />
                        ) : (
                          <MdDelete className="text-xl" />
                        )}
                      </button>
                    </Tooltip>
                    
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center">
            <Lottie
              animationData={lottieImage}
              aria-label="Lottie animation"
              loop
              className="w-48 h-48"
              autoplay
            />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              No books found
            </h2>
            <p className="text-gray-500">Wish to add some!</p>
          </div>
        )}
      </div>
    </section>
  );
}
