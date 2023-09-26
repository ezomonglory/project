import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Image from 'next/image'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from 'next/router';

const CourseModal = ({ Attendance, setLoad, courses, user, setAttendance, ID, text, icon, color, setOpen, texting }) => {

    const [btnLoad, setBtnLoad] = useState(false)
    const [check, setCheck] = useState([])
    const router = useRouter()


    console.log(ID)

    const deleteCourse = async () => {
        setBtnLoad(true)
        setLoad(true)
        await axios.delete(`https://attendx-2hi6.onrender.com/course/remove-course/${user.identity_number}/${ID}`).then((res) => {
            setOpen(false)
            console.log(res)
            window.localStorage.setItem("user", JSON.stringify(res.data.user))
            setLoad(false)
            setBtnLoad(false)
            // router.push("/admin/Course")
            window.location.reload()

        })
    }

    const AddCourse = async () => {
        setBtnLoad(true)
        const keyValues = []
        for (const [key, value] of Object.entries(Attendance)) {
            if (value === true) {
                keyValues.push({ "id": key })

            }
        }



        const data = {
            full_name: user.full_name,
            identity_number: user.identity_number,
            role: user.role,
            courses: keyValues
        }

        console.log(data)
        // const users = JSON.parse(window.localStorage.getItem("user"))
        // const newCourses = [data.courses]
        // users.courses = newCourses


        await axios.post("https://attendx-2hi6.onrender.com/course/add-course", data).then((res) => {
            console.log(res)
            console.log(res.data.user)
            setOpen(false)
            window.localStorage.setItem("user", JSON.stringify(res.data.user))              
            console.log(router.pathname)
            if (router.pathname === "/students/AddCourse") {
                window.location.href = "/students/course"
            }
            if (router.pathname === "/admin/AddCourse") {
                window.location.href = "/admin/Course"
            }
        }).catch((err) => {
            console.log(err)
        })
    }






    return (

        <div className='h-screen flex items-center justify-center bg-black px-[20px] '>
            <div className='bg-white  rounded-md md:w-[451px] md:h-[316px] flex flex-col space-y-[32px] py-[20px] px-[28px] mx-auto justify-center items-center'>
                <Image src={icon} width={40} height={40} alt="icon" className='mx-auto' />
                <div className=' flex flex-col space-y-[8px] '>
                    <h1 className=' text-black text-[20px] text-center '>You are about to {text} course</h1>
                    <p className='text-[#9E9E9E] text-[14px] text-center leading-[22px] ' >Are you certain you wish to delete this course? This action
                        will result in {texting} of the course’s attendance.</p>
                </div>

                <div className='flex  space-x-[24px]  '>
                    <div className='w-[150px] h-[40px]   cursor-pointer bg-[#fff] text-[#323232]  flex items-center justify-center text-center rounded-md leading-[24px] border-[0.5px] border-[#323232]  ' onClick={() => {
                        setOpen(false)
                    }}> Cancel </div>

                    {text === "delete" ? <div className={`w-[150px] h-[40px]  cursor-pointer  text-white  flex items-center justify-center text-center rounded-md leading-[24px]  ${color}`}
                        onClick={() => {
                            deleteCourse()
                        }}
                    >
                        {btnLoad ? <ClipLoader color="white" size={18} /> : `${text}`}
                    </div> : <div className={`w-[150px] h-[40px]  cursor-pointer  text-white  flex items-center justify-center text-center rounded-md leading-[24px]  ${color}`}
                        onClick={() => {
                            AddCourse()
                        }}
                    >
                        {btnLoad ? <ClipLoader color="white" size={18} /> : `${text}`}
                    </div>}

                </div>
            </div>
        </div>
    )
}

export default CourseModal