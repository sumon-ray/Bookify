"use client";
import * as React from 'react';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import img from "../../../../assets/images/About/studying.png";
import Image from "next/image";
import { IoAdd } from "react-icons/io5";
import Link from "next/link";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FiFilter } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';


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

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function MyBooks() {
  const { data } = useQuery({
    queryKey: ["my books"],
    queryFn: async () => {
      const res = await axios(
        `https://bookify-server-lilac.vercel.app/books?email=${"abcd@gmail.com"}&genre=Fantasy`
      );
      const data = await res.data;
      return data;
    },
  });

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };



  return (
    <section className="pb-8 md:pb-12 px-5 md:px-0">
      <div className="bg-[#EFEEE9] rounded-md p-5 md:p-2 flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-20">
        <div className="space-y-3 pt-5 md:pt-0">
          <h3 className="text-xl md:text-5xl font-bold">
            Falling in love <br />
            one page at a time
          </h3>
          <p className="text-balance">
            Lost in the pages, where every book is a new adventure <br /> and
            love for stories grows deeper with each turn
          </p>
          <button className="flex items-center justify-center gap-0.5 bg-black text-white font-medium px-4 py-1.5 rounded-lg">
            <IoAdd className="text-white text-lg" />
            Add Book
          </button>
        </div>

        <figure>
          <Image
            height={10}
            width={300}
            className="h-[270px] w-[520px]"
            src={img}
            alt=""
          />
        </figure>
      </div>

      <div className="flex items-center justify-between pt-4 pb-5">
        <h1 className='text-xl font-bold'>My Books</h1>
        <div>
          <FormControl sx={{ width: 150 }} size="small">
            <Select
              multiple
              displayEmpty
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em className='flex items-center font-medium gap-x-1'><FiFilter /> Filter</em>;
                }

                return selected.join(',');
              }}
              MenuProps={MenuProps}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem disabled value="">
                <em>Placeholder</em>
              </MenuItem>
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 ">
        {data?.map((book, i) => (
          <Link
            href={`/details/${book?._id}`}
            key={i}
            className="w-auto h-auto bg-[#EFEEE9]  rounded-md "
          >
            <div className="space-y-3">
              <Image
                src={book?.coverImage}
                className="w-full h-[210px] rounded-t-md"
                height={150}
                width={200}
                alt={book?.title || 'Book Cover'}
              />
              <div className="text-left pl-2 pb-2 ">
                <h1 className="font-bold md:uppercase" title={book?.title}>
                  {book?.title.slice(0, 13)}...
                </h1>

                <div className='flex items-center justify-between pr-2'>
                  <h1 className="font-medium">{book?.owner}</h1>
                  <div><MdDelete className='text-xl' /></div>
                </div>

              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
