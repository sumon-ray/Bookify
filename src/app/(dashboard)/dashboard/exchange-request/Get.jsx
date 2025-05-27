"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import "./tab.css"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { AiFillMessage } from 'react-icons/ai';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import Modal from './(message)/Modal';
import Swal from 'sweetalert2';
import MoladGet from './(message)/MoladGet';


function Row({ row, refetch }) {

    const [open, setOpen] = React.useState(false);
    const exchangeUpdateData = {
        requesterName: row?.RequesterName,
        requesterEmail: row?.requesterEmail,
        requesterProfile: row?.requesterProfile,

        ownerName: row?.ownerName,
        ownerEmail: row?.ownerEmail,
        ownerProfile: row?.OwnerProfile,

        ownerBooksIds: row?.ownerBooks?.map(book => book?._id),
        requesterBooksIds: row?.requesterBooks?.map(book => book?._id),
        id: row?._id,
        status: row?.status
    }

    const approve = async function () {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#364957",
                cancelButtonColor: "#364957CC",
                confirmButtonText: "Approve"
            }).then(result => {
                if (result?.isConfirmed) {
                    axios.put(`https://bookify-server-lilac.vercel.app/exchange`, exchangeUpdateData)
                        .then(res => {
                            if (res?.data?.message) {
                                Swal.fire({
                                    title: "Approved!",
                                    text: "The exchange request is approved.",
                                    icon: "success",
                                });
                                refetch()
                            }
                        })
                }
            })
            // post to not(requesterEmail, requesterName, takeBooks?.length    )
            // Sample data to post
            const dataApprove = {
                approverEmail: row?.ownerEmail,
                approverName: row?.ownerName,
                approvedEmail: row?.requesterEmail,
                approvedName: row?.RequesterName

            };
            // console.log("data for post ", dataApprove);
            axios.post('https://bookify-server-lilac.vercel.app/notification', dataApprove)
                .then(response => {
                    // console.log('Response:', response.data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } catch (error) {
            toast.error(error?.message)
        }
    }

    const DeleteApprove = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#364957",
            cancelButtonColor: "#364957CC",
            confirmButtonText: "Yes"
        }).then(result => {
            if (result?.isConfirmed) {
                axios.patch(`https://bookify-server-lilac.vercel.app/get-request-cancel?id=${row?._id}`)
                .then(res => {
                        if (res.data.modifiedCount) {
                            Swal.fire({
                                title: "canceled!",
                                text: "The exchange request is canceled.",
                                icon: "success",
                            });
                            refetch()
                        }
                    })
            }
        })
    }

    return (
        <React.Fragment>

            <TableRow className='dark:bg-[#272727]' sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell className='dark:text-white'>
                    {row.RequesterName}
                </TableCell>
                <TableCell align='right' className='relative'>
                   <MoladGet receiver={row} />

                </TableCell>
                <TableCell align='left' className='relative dark:text-white '><span className='absolute left-[34px] top-6'>{row?.requesterBooks?.length}</span></TableCell>
                <TableCell align='left' className='relative '><span className='absolute left-[3px] top-6 dark:text-white'>{row?.date?.toLocaleString()?.split('T')[0]}</span></TableCell>
                <TableCell align='left' className='relative'>
                    <Button className={`absolute left-[3px] top-3 ${row?.status === 'pending' ? 'bg-[#F5A52433] text-[#F5A524] dark:text-[#f5e024e3] dark:bg-[#F5A52466]' : 'bg-[#31C48D4D]  text-green-500 dark:text-green-900'}   rounded-full capitalize font-medium`}>
                        {row?.status}
                    </Button>
                </TableCell>
                <TableCell align='left' className='relative'>
                    <div className={`flex items-center gap-x-2 absolute ${row?.status === 'pending' ? 'left-[6px]' : 'left-[16px]'} top-3`}>
                        <Button onClick={DeleteApprove} className='bg-[#ffffff] text-red-500 border rounded-full capitalize font-medium dark:border-none'>
                            X
                        </Button>
                        {row?.status === 'pending' && <Button onClick={approve} className='bg-green-400  text-[#ffffff] rounded-full capitalize font-medium '>
                            Approve
                        </Button>
                        }
                    </div>
                </TableCell>
            </TableRow>

        </React.Fragment >
    );
}



export default function Get() {

    const { data: session, status } = useSession()
    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['exchange-request-get', session?.user?.email],
        queryFn: async () => {
            const res = await axios(`https://bookify-server-lilac.vercel.app/exchange-request?ownerEmail=${session?.user?.email}`)
            const data = await res.data
            const filter = data.filter(req=>req.status!=='approved')
            return filter
        },
        enabled: !!session?.user?.email
    })

    if (status === 'loading' || isLoading) {
        return <div className="flex justify-center w-full items-center min-h-[62.3vh]">
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
                        fill="#364957" className='dark:fill-[#ffffff]'
                    />
                    <path
                        filerule="evenodd"
                        clipRule="evenodd"
                        d="M4.83402 3.86487C4.5279 4.00452 4.07647 4.44673 3.91953 4.76093C3.83948 4.918 3.79581 5.09111 3.79179 5.2674C3.78776 5.44369 3.82348 5.61861 3.89628 5.77918C4.03965 6.0992 8.54237 10.6222 8.89693 10.8026C9.39873 11.0605 9.91411 10.9344 10.4334 10.4263C10.9448 9.92589 11.0805 9.38282 10.8208 8.8766C10.6407 8.52167 6.12245 4.01421 5.80276 3.87069C5.65 3.80447 5.48545 3.76982 5.31899 3.76882C5.15252 3.76782 4.98757 3.80049 4.83402 3.86487ZM0.85443 13.6129C0.282873 13.7933 0 14.2491 0 14.9842C0.00193748 15.7348 0.280935 16.1847 0.852493 16.3554C1.08112 16.4233 1.59067 16.4349 4.35934 16.4349C7.24425 16.4349 7.62981 16.4252 7.86618 16.3477C8.03981 16.2905 8.19761 16.1934 8.32684 16.064C8.45607 15.9347 8.55313 15.7767 8.61018 15.6029C8.7768 15.0889 8.69349 14.3596 8.42805 13.9989C8.32166 13.8831 8.19656 13.7861 8.058 13.7118L7.79256 13.5644L4.4349 13.5528C1.73211 13.545 1.03268 13.5567 0.85443 13.6129ZM8.90274 19.4121C8.66443 19.5227 8.25756 19.9047 6.3162 21.854C4.53177 23.6442 3.98734 24.2221 3.90016 24.4122C3.82771 24.5698 3.79037 24.7413 3.7907 24.9148C3.79104 25.0882 3.82904 25.2596 3.90209 25.4169C4.03772 25.7078 4.48334 26.1655 4.78365 26.3226C5.08783 26.4817 5.53927 26.4797 5.85508 26.3188C6.17864 26.152 10.6542 21.6717 10.8208 21.3478C10.9002 21.181 10.9419 20.9988 10.9429 20.8141C10.9439 20.6294 10.9042 20.4467 10.8267 20.2791C10.6122 19.9201 10.3094 19.6223 9.94704 19.414C9.7867 19.3273 9.60738 19.2818 9.42513 19.2814C9.24289 19.2811 9.06341 19.326 8.90274 19.4121Z"
                        fill="#364957" className='dark:fill-white'
                    />
                </svg>
                <h1 className='text-lg font-medium dark:text-white'>Loading...</h1>
            </div>
        </div>
    }

    return (
        <div>
            {
                !data?.length
                    ? <div div className='min-h-[71vh] flex items-center justify-center'>
                        <figure>
                            <Image unoptimized src={`https://res.cloudinary.com/dz1fy2tof/image/upload/v1729762552/book_3_vm307x.png`} height={100} width={100} className='size-80 md:size-96' />
                            <figcaption className='text-2xl font-black text-center'>You haven&apos;t received book  <br />exchange requests.</figcaption>
                        </figure>
                    </div>

                    : <TableContainer component={Paper} sx={{ width: '100%', position: "absolute", left: 0 }}>
                        <Table>
                            <TableHead>
                                <TableRow className='bg-[#EFEEE9] dark:bg-[#364957]'>
                                    <TableCell />
                                    <TableCell className='font-bold dark:text-white'>Name</TableCell>
                                    <TableCell className='font-bold dark:text-white'>Message</TableCell>
                                    <TableCell className='font-bold dark:text-white'>Books</TableCell>
                                    <TableCell className='font-bold dark:text-white'>Date</TableCell>
                                    <TableCell className='font-bold dark:text-white'>Status</TableCell>
                                    <TableCell className='font-bold dark:text-white'>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data?.map((row) => (
                                    <Row key={row.name} row={row} refetch={refetch} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
            }
        </div>
    );
}
