"use client"
import { useState } from 'react';

export default function DetailsTab({ Book }) {

    const [open, setOpen] = useState(1);
    const { title, author, genre, condition, description, coverImage, exchangeStatus, publishYear, totalPage, location, rating } = Book || {}

    return (
        <div>
            <div className='max-w-6xl mx-auto'>

                <div className="text-sm font-medium text-center text-black border-b-2 border-[#ffffff]">
                    <ul className="flex flex-wrap justify-center -mb-px">
                        <li className="me-2" onClick={() => {
                            setOpen(1)
                        }}>
                            <p className={`inline-block p-4 ${open === 1 ? 'border-b-2 border-black rounded-t-lg' : ''}`}>Summary</p>
                        </li>
                        <li className="me-2" onClick={() => {
                            setOpen(2)
                        }}>
                            <p className={`inline-block p-4 ${open === 2 ? 'border-b-2 border-black rounded-t-lg' : ''}`}>Specification</p>
                        </li>
                        <li className="me-2" onClick={() => {
                            setOpen(3)
                        }}>
                            <p className={`inline-block p-4 ${open === 3 ? 'border-b-2 border-black rounded-t-lg' : ''}`}>Author</p>
                        </li>
                    </ul>
                </div>

                <div className='text-balance pt-4'>
                    <p className={open === 1 ? 'block text-center' : 'hidden'}>
                        {/* {description} */}
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error cupiditate, non natus quia, pariatur a corrupti voluptates, debitis quas enim iste ipsa atque vel reiciendis doloremque odit illum possimus placeat?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem id impedit laboriosam animi, aspernatur cum alias deserunt quidem delectus esse libero a, officiis qui? Voluptates sunt a sint ipsam blanditiis.
                    </p>

                    <div className={open === 2 ? 'block max-w-6x' : 'hidden'}>

                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                                   
                                </thead>
                                <tbody>
                                    <tr className='text-black'>
                                        <th className="px-6 w-[30%] py-4 font-medium whitespace-nowrap bg-[#EFEEE9]">
                                           Title
                                        </th>
                                        <td className="px-6 py-4 w-[70%] bg-white">{title}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                    </div>
                    
                    <p className={open === 3 ? 'block' : 'hidden'}>Coming soon</p>
                </div>

            </div>
        </div>
    )
}
