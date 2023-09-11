import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Courses } from '../data'
import { useRouter } from 'next/router'


const Attendance = ({ setOpenModal, openModal, selectedCourse, setSelectedCourse }) => {
    const Router = useRouter()
    const selectRef = useRef()    


    return (


        <div>
           

            <div className='w-full h-[70vh] bg-transparent  md:bg-white overflow-scroll scroll-hidden'>
                <table className='hidden md:table'>
                    <tbody >
                        {selectedCourse?.Attendance.map((Attendance, index) => (
                            <tr key={index} className='hidden md:table-row'>
                                <td className='text-[14px] md:text-[16px]'><div className='flex gap-[16px] items-center'>
                                    <Image src="/image/File.svg" alt='file' width={20} height={20} /> {Attendance.name}
                                </div></td>
                                <td className='text-[14px] md:text-[16px]'>{Attendance.date}</td>
                                <td className='text-[14px] md:text-[16px]'>{Attendance.time}</td>
                                <td className='' onClick={() => {
                                    Router.push("/admin/Attendance/1")
                                }}>
                                    <div className='text-[12px] md:text-[12px] px-[12px] py-[3px] text-[#183DA7]  border-[0.5px] border-[#183DA7] rounded-md cursor-pointer  inline-block' >

                                        open
                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>


                </table>


                <div className='flex flex-col md:hidden gap-y-4  w-full h-full'>
                    {selectedCourse?.Attendance.map((Attendance, i) => (

                        <div className='flex justify-between items-center border-[0.5px] border-transparent border-t-[#D9D9D9] pt-[8px]' key={i}>
                            <div className='flex flex-col gap-y-2 text-black' >
                                <h1 className='text-[14px] text-[#000]'> {Attendance.name} </h1>
                                <h1 className='text-[14px] text-[#505050]'> {Attendance.date} </h1>
                                <h1 className='text-[14px] text-[#505050]'> {Attendance.time} </h1>

                            </div>

                            <div className='text-[12px] md:text-[12px] px-[12px] py-[3px] text-[#183DA7]  border-[0.5px] border-[#183DA7] rounded-md cursor-pointer  inline-block' 
                            onClick={()=> {
                                Router.push("/admin/Attendance/1")
                            }}
                            >

                                open
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Attendance