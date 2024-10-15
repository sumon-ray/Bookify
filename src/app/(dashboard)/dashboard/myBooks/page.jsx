"use client";
import * as React from "react";
import { useQuery } from "@tanstack/react-query";
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

// Constants for the Select component
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

// Sorting options
const sortingOptions = [
  { label: "Pages: Low to High", value: "pages_asc" },
  { label: "Pages: High to Low", value: "pages_desc" },
];

// Utility function to apply styles (optional, can be customized)
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

  const handleSortChange = (event) => {
    const { value } = event.target;
    setSortOrder(value);
  };

  // Fetch books based on the selected sort order
  const { data, isLoading, error } = useQuery({
    queryKey: ["myBooks", sortOrder],
    queryFn: async () => {
      const sortQuery = sortOrder ? `&sort=${sortOrder}` : "";
      const res = await axios(
        `https://bookify-server-lilac.vercel.app/books?email=abcd@gmail.com${sortQuery}`
      );
      return res.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching books</p>;

  return (
    <section className="pb-8 md:pb-12 px-5 md:px-0">
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
          <button className="flex items-center justify-center gap-0.5 bg-[#364957] text-white font-medium px-4 py-1.5 rounded-lg">
            <IoAdd className="text-white text-lg" />
            Add Book
          </button>
        </div>

        <figure>
          <Image
            src="https://i.postimg.cc/zvnbzvs0/Mybookimg.gif"
            alt="MyBook Banner"
            width={520}
            height={270}
            className="h-[270px] w-[520px] bg-gray"
            // If you encounter issues with external images, consider adding 'unoptimized' or updating next.config.js
            // unoptimized
          />
        </figure>
      </div>

      {/* Sorting Dropdown */}
      <div className="flex items-center justify-between pt-4 pb-5">
        <h1 className="text-xl font-bold">My Books</h1>
        <div>
          <FormControl sx={{ width: 200 }} size="small">
            <Select
              displayEmpty
              value={sortOrder}
              onChange={handleSortChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return (
                    <em className="flex items-center font-medium gap-x-1">
                      Sort by Pages
                    </em>
                  );
                }
                const selectedLabel = sortingOptions.find(
                  (option) => option.value === selected
                )?.label;
                return selectedLabel || "Sort by Pages";
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Sort by Pages" }}
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
        {data?.map((book, i) => (
          <Link
            href={`/details/${book?._id}`}
            key={i}
            className="w-auto h-auto bg-[#EFEEE9] rounded-md"
          >
            <div className="space-y-3">
              <Image
                src={book?.coverImage}
                className="w-full h-[210px] rounded-t-md"
                height={210}
                width={200}
                alt={book?.title || "Book Cover"}
              />
              <div className="text-left pl-2 pb-2">
                <h1 className="font-bold md:uppercase" title={book?.title}>
                  {book?.title.length > 13
                    ? `${book?.title.slice(0, 13)}...`
                    : book?.title}
                </h1>
                <div className="flex items-center justify-between pr-2">
                  <h1 className="font-medium">{book?.owner}</h1>
                  <MdDelete className="text-xl" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
