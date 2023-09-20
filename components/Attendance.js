import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Courses } from '../data'
import { BounceLoader } from 'react-spinners'
import { useRouter } from 'next/navigation'
import Button from './Button'
import Link from 'next/link'


const Attendance = ({ setLoad, load, selectedStudent, setSelectedCourse }) => {
    const router = useRouter()
    const selectRef = useRef()
    const [data, setData] = useState({ name: '' });

    const [name, setName] = useState("")
    console.log(selectedStudent)

    const getMonth = (time) => {
        // console.log(time)
        const tie = new Date(parseInt(time))
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const month = tie.getMonth()
        const day = tie.getDay()
        const year = tie.getFullYear()
        return months[month]
    }

    const getYear = (time) => {
        // console.log(time)


        const tie = new Date(parseInt(time))

        const month = tie.getMonth()
        const day = tie.getDay()
        const year = tie.getFullYear()
        // console.log({ month, day, year })
        return year
    }

    const getDay = (time) => {
        // console.log(time)
        const tie = new Date(parseInt(time))

        const month = tie.getMonth()
        const day = tie.getDay()
        const year = tie.getFullYear()
        // console.log({ month, day, year })
        return day
    }

    const getHour = (time) => {
        // console.log(time)
        const tie = new Date(parseInt(time))
        const hour = tie.getHours()
        return hour
    }

    const getMins = (time) => {
        // console.log(time)
        const tie = new Date(parseInt(time))
        const mins = tie.getMinutes()
        console.log(mins.toLocaleString().length)
        if (mins.toLocaleString().length === 1) {
            return `0${mins}`
        } else {
            return mins
        }

    }

    return (


        <div>


            <div className='w-full h-[70vh] bg-transparent  md:bg-white overflow-scroll scroll-hidden'>
                {load ? <div className='flex items-center justify-center h-full w-full'>
                    <BounceLoader color="#183DA7" />
                </div> :
                    <>
                        <table className='hidden md:table'>
                            <tbody >
                                {selectedStudent?.map((Attendance, index) => (
                                    <tr key={index} className='hidden md:table-row'>
                                        <td className='text-[14px] md:text-[16px]'><div className='flex gap-[16px] items-center'>
                                            <Image src="/image/File.svg" alt='file' width={20} height={20} /> {Attendance.course_title}
                                        </div></td>
                                        <td className='text-[14px] md:text-[16px]'><span>{getMonth(Attendance.timeStamp)}</span>{" "}
                                            <span>{getDay(Attendance.timeStamp)}</span>,
                                            <span>{getYear(Attendance.timeStamp)}</span>
                                        </td>
                                        <td className='text-[14px] md:text-[16px]'>
                                            <span>{getHour(Attendance.timeStamp)}:</span>
                                            <span>{getMins(Attendance.timeStamp)}</span></td>
                                        <td className='' onClick={() => {
                                            router.push("/admin/Attendance/1")
                                        }}>
                                            <div className='text-[12px] md:text-[12px] px-[12px] py-[3px] text-[#183DA7]  border-[0.5px] border-[#183DA7] rounded-md cursor-pointer  inline-block' >

                                                open
                                            </div>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>


                        </table>

                        <Link
                            href={{
                                pathname: "/admin/Attendance/Report",
                                query: data
                            }}
                            className='hidden md:block'
                        >
                            <div className='w-[150px] mt-[32px]'>
                                <Button text="Generate Report" />

                            </div>
                        </Link>

                    </>
                }

                <div className='flex flex-col md:hidden gap-y-4  w-full h-full'>
                    {selectedStudent?.map((Attendance, i) => (

                        <div className='flex justify-between items-center border-[0.5px] border-transparent border-t-[#D9D9D9] pt-[8px]' key={i}>
                            <div className='flex flex-col gap-y-2 text-black' >
                                <h1 className='text-[14px] text-[#000]'> {Attendance.course_title} </h1>
                                <h1 className='text-[14px] text-[#505050]'> <span>               {getMonth(Attendance.timeStamp)}</span>{" "}
                                    <span>{getDay(Attendance.timeStamp)}</span>,
                                    <span>{getYear(Attendance.timeStamp)}</span>
                                </h1>
                                <h1 className='text-[14px] text-[#505050]'>     <span>{getHour(Attendance.timeStamp)}:</span>
                                    <span>{getMins(Attendance.timeStamp)}</span> </h1>

                            </div>

                            <div className='text-[12px] md:text-[12px] px-[12px] py-[3px] text-[#183DA7]  border-[0.5px] border-[#183DA7] rounded-md cursor-pointer  inline-block'
                                onClick={() => {
                                    router.push("/admin/Attendance/1")
                                }}
                            >

                                open
                            </div>
                        </div>
                    ))}

                    <Link
                        href={{
                            pathname: "/admin/Attendance/Report",
                            query: data
                        }}
                    >
                        <div className='w-[150px] mt-[32px]'>
                            <Button text="Generate Report" />

                        </div>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Attendance