"use client";
import * as React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { IoAdd } from "react-icons/io5";
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
  { label: "Total Pages: Low to High", value: "totalPage_asc" },
  { label: "Total Pages: High to Low", value: "totalPage_desc" },
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

  const { data, isLoading, error } = useQuery({
    queryKey: ["myBooks"],
    queryFn: async () => {
      const res = await axios.get(
        `https://bookify-server-lilac.vercel.app/books?email=abcd@gmail.com`
      );
      return res.data;
    },
    staleTime: 5 * 60 * 1000,
  });

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
    if (!data) return [];

    console.log("Books data:", data);

    const booksCopy = [...data];

    if (sortOrder === "totalPage_asc") {
      booksCopy.sort((a, b) => (a.totalPage || 0) - (b.totalPage || 0));
    } else if (sortOrder === "totalPage_desc") {
      booksCopy.sort((a, b) => (b.totalPage || 0) - (a.totalPage || 0));
    }

    console.log("Sorted Books:", booksCopy);

    return booksCopy;
  }, [data, sortOrder]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
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

      {/* Header Section */}
      <div className="bg-[#EFEEE9] rounded-md p-5 md:p-2 flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-20">
        <div className="space-y-3 pt-5 md:pt-0">
          <h3 className="text-xl md:text-5xl font-bold">
            Falling in love <br />
            one page at a time.
          </h3>
          <p className="text-balance">
            Lost in the pages, where every book is a new adventure <br /> and
            love for stories grows deeper with each turn.
          </p>
          <Link href="/dashboard/addBook" className="inline-block">
            <button className="flex items-center justify-center gap-0.5 bg-[#364957] text-white font-medium px-4 py-1.5 rounded-lg hover:bg-[#2c3e50] transition">
              <IoAdd className="text-white text-lg" />
              Add Book
            </button>
          </Link>
        </div>

        <figure>
          <Image
            src="https://i.postimg.cc/zvnbzvs0/Mybookimg.gif"
            alt="MyBook Banner"
            width={520}
            height={270}
            className="h-[270px] w-[520px] object-cover rounded-md"
          />
        </figure>
      </div>

      {/* className=" border border-[#a1a5a8b1]  focus:border-[#a1a5a8b1] !hover:text-white outline-none" */}

      {/* Sorting Dropdown */}
      <div className="flex items-center justify-between pt-4 pb-5">
        <h1 className="text-xl font-bold">My Books</h1>
        <div className="bg-gray-100 rounded-md p-2">
          <FormControl sx={{ width: 200 }} size="small">
            <Select
              className=" " // Ensure the background doesn't change
              displayEmpty
              value={sortOrder}
              onChange={handleSortChange}
              input={
                <OutlinedInput
                  sx={{ border: "#a1a5a8b1", outline: "#a1a5a8b1" }}
                />
              }
              renderValue={(selected) => {
                if (selected === "") {
                  return (
                    <em className="flex items-center font-medium gap-x-1">
                      Sort by Total Pages
                    </em>
                  );
                }
                const selectedLabel = sortingOptions.find(
                  (option) => option.value === selected
                )?.label;
                return selectedLabel || "Sort by Total Pages";
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Sort by Total Pages" }}
              sx={{
                "& .MuiSelect-select": {
                  border: "#a1a5a8b1", // Remove border
                  outline: "#a1a5a8b1", // Remove outline
                  "&:focus": {
                    border: "#a1a5a8b1", // Remove focus border
                    outline: "#a1a5a8b1", // Remove focus outline
                  },
                },
                "& .MuiSelect-icon": {
                  color: "#a1a5a8b1", // Set your desired icon color
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Remove the default outline
                },
              }}
            >
              <MenuItem disabled value="">
                <em>Select Sorting</em>
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
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
        {sortedBooks.length > 0 ? (
          sortedBooks.map((book) => (
            <div
              key={book._id}
              className="w-auto h-auto bg-[#EFEEE9] rounded-md shadow-md hover:shadow-lg transition relative"
            >
              <Link
                href={`/details/${book._id}`}
                className="w-auto h-auto bg-[#EFEEE9] rounded-md "
              >
                <div className="space-y-3">
                  <Image
                    src={book?.coverImage}
                    className="w-full h-[210px] rounded-t-md"
                    height={210}
                    width={150}
                    alt={book?.title || "Book Cover"}
                  />
                  <div className="text-left pl-2 pb-2">
                    <h1 className="font-bold md:uppercase" title={book?.title}>
                      {book?.title
                        ? book.title.length > 13
                          ? `${book.title.slice(0, 13)}...`
                          : book.title
                        : ""}
                    </h1>
                    <p className="text-gray-600 text-sm">
                      {book?.author || "Unknown Author"}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Total Pages: {book?.totalPage || "N/A"}
                    </p>
                  </div>
                </div>
              </Link>
              <Tooltip title="Delete">
                <button
                  onClick={(e) => {
                    e.preventDefault(); // Prevent link navigation
                    if (confirm("Are you sure you want to delete this book?")) {
                      deleteBookMutation.mutate(book._id);
                    }
                  }}
                  className="absolute bottom-1 right-2 text-[#364957] hover:text-red-700 bg-white rounded-full p-1 shadow-md"
                  aria-label="Delete Book"
                >
                  {deleteBookMutation.isLoading ? (
                    <CircularProgress size={20} />
                  ) : (
                    <MdDelete className="text-xl" />
                  )}
                </button>
              </Tooltip>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">
            No books available. Please add some!
          </p>
        )}
      </div>
    </section>
  );
}
