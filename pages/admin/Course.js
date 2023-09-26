import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { useRouter } from 'next/router'
import CourseModal from '../../components/CourseModal'
import axios from 'axios'
import { FadeLoader } from 'react-spinners'
import StudentNoCourse from '../../components/StudentNoCourse'


const Course = () => {

    const Router = useRouter()
    const [open, setOpen] = useState(false)
    const [load, setLoad] = useState(false)
    const [ID, setID] = useState()
    const [user, setUser] = useState()
    const [err, setErr] = useState(false)
    const [called, setCalled] = useState(false)
    const [Attendance, setAttendance] = useState([])

    useEffect(() => {
        const user = JSON.parse(window.localStorage.getItem("user"))
        if (user) {
            console.log(user)
            setUser(user)
        }
    }, [])

    useEffect(() => {

        if (!called) {
            console.log("calling")
            getCourses()
        }
    }, [user])


    useEffect(() => {
        console.log("atten")
        console.log(Attendance.length)
        setLoad(false)
    }, [Attendance])


    const getCourses = async () => {
        const userArr = []
        setLoad(true)
        await axios.get("https://attendx-2hi6.onrender.com/course/all-courses").then((res) => {
            console.log(res.data)            
            res.data.forEach(course => {
                course.lecturers.forEach((lecturer) => {
                    if (user?.identity_number === lecturer.staff_id) {
                        console.log(course)
                        setCalled(!called)
                        userArr.push({ code: course.course_code, id: course._id })
                        setErr(false)
                        console.log("Called")
                        Attendance.push(course)
                        // setAttendance(...Attendance, course)
                        // setLoad(false)
                    }


                })
            });
            if (Attendance.length === 0) {                
            }
            if (userArr.length > 0) {
                const userData = JSON.parse(window.localStorage.getItem("user"))
                userData.courses = userArr
                window.localStorage.setItem("user", JSON.stringify(userData))
                setLoad(false)

            }
        }).catch((Err) => {
            setLoad(false)
            setErr(true)
        })
    }





    return (
        <div>

            <Head>
                <title>Attend X</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>

                {open ? <CourseModal ID={ID} setLoad={setLoad} user={user} Attendance={Attendance} setAttendance={setAttendance} text="delete" texting="removal" color="bg-red-600" setOpen={setOpen} icon="/image/Danger Circle.svg" /> :
                    <DashboardLayout>
                        <div className='pb-[16px] md:pb-[32px] md:flex justify-between items-center mt-[8px] md:mt-0 mb-[24px] '>
                            <h1 className='text-[#141414] font-[500] text-[20px]  md:text-[30px] leading-[28px]  md:leading-[38px] medium '> Courses Management </h1>
                          
                            <hr className='h-[1px] bg-[#d9d9d9] md:hidden w-full absolute w-full mt-[16px]  ml-[-16px]  ' />

                            <div className='hidden md:flex bg-[#183DA7] px-[16px] py-[8px]  space-x-[8px] text-white items-center rounded-md cursor-pointer' onClick={() => {
                                Router.push("/admin/AddCourse")
                            }} >
                                <Image src="/image/Frame.svg" height={20} width={20} alt="qr" /> <span>Add Course</span>
                            </div>
                        </div>




                        <div className=' absolute ml-[-16px] md:static md:ml-0  w-full h-[80vh] bg-transparent  md:bg-white overflow-scroll scroll-hidden overflow-x-scroll '>
                            {err ? <div>  <Image src="/image/Teacher.svg" className='hidden md:block' width={430} height={300} alt="teacher" /> <Image src="/image/Teacher.svg" className='block md:hidden' width={330} height={250} alt="teacher" />  <p className='text-[#505050] font-[500] text-center '>
                                An error occured please check if you are connected <br /> to the internet and try again</p> </div> : load ? <div className='flex items-center justify-center h-full w-full'>
                                    < FadeLoader color="#183DA7" />
                                </div> :
                                <table className=' w-[980px] md:w-full bg-transparent  md:mt-0   '>
                                    <thead className=' w-full'>
                                        <tr>
                                            <td className='text-[14px] text-[#8a8a8a] md:text-[16px]'>#</td>
                                            <td className='text-[14px] text-[#8a8a8a] md:text-[16px]'>Semester</td>
                                            <td className='text-[14px] text-[#8a8a8a] md:text-[16px]'>Course Code</td>
                                            <td className='text-[14px] text-[#8a8a8a] md:text-[16px]'>Course Title</td>
                                            <td className='text-[14px] text-[#8a8a8a] md:text-[16px]'>Credit</td>
                                            <td className='text-[14px] text-[#8a8a8a] md:text-[16px]'></td>

                                        </tr>
                                    </thead>


                                    <tbody >
                                        {Attendance?.length >= 1 && (Attendance?.map((Attendance, index) => (
                                            <tr key={index} className=''>
                                                <td className='text-[14px] md:text-[16px]'>{index + 1}</td>
                                                <td className='text-[14px] md:text-[16px]'>{Attendance.course_semester}</td>
                                                <td className='text-[14px] md:text-[16px]'>{Attendance.course_code}</td>
                                                <td className='text-[14px] md:text-[16px]'>{Attendance.course_title}</td>
                                                <td className='text-[14px] md:text-[16px]'>{Attendance.course_credit}</td>
                                                <td className=''>
                                                    <div className='text-[14px] px-[16px] py-[6px] text-[#C60000]  border-[0.5px] border-[#C60000] rounded-md cursor-pointer  inline-block' onClick={() => {
                                                        setID(Attendance.course_code)
                                                        setOpen(true)
                                                    }} >

                                                        Delete
                                                    </div>
                                                </td>

                                            </tr>
                                        )))}
                                    </tbody>
                                </table>
                            }
                        </div>

                        <div className='fixed right-[20px] items-center justify-center flex bottom-[20%] bg-[#183DA7] rounded-full w-[48px] h-[48px] md:hidden' onClick={() => {
                            Router.push("/admin/AddCourse")
                        }}>
                            <Image src="/image/Frame.svg" alt="plus" width={24} height={24} />
                        </div>

                    </DashboardLayout>
                }
            </main>
        </div>
    )
}

export default Course