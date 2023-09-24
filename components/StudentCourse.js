import React from 'react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { FadeLoader } from 'react-spinners'


const StudentCourse = () => {
    const [load, setLoad] = useState(false)
    const [selectedCourse, setSelectedCourse] = useState()
    const [courses, setCourses] = useState([])
    const [selectedStudent, setSelectedStudent] = useState()
    const [err, setErr] = useState()
    const selectRef = useRef(null)


    useEffect(() => {
        const user = JSON.parse(window.localStorage.getItem("user"))
        if (user) {
            setCourses(user.courses)
        }
    }, [])

    useEffect(() => {
        console.log(courses)
        setSelectedCourse(courses[0])
    }, [courses])

    useEffect(() => {
        if (selectedCourse) {
            getCourse(selectedCourse?.id)
        }
    }, [selectedCourse])


    useEffect(() => {
        console.log(selectedStudent)
    }, [selectedStudent])




    const getCourse = async (course) => {
        console.log("Course called")
        setLoad(true)
        await axios.get(`https://attendx-2hi6.onrender.com/course/${course}`).then((res) => {
            console.log("Course complete")
            setLoad(false)
            setErr(false)
            console.log(res.data)
            setSelectedStudent(res.data[0])
        }).catch((err) => {
            console.log("Course error")
            setErr(true)
            setLoad(false)
            console.log("error")
            console.log(err)
        })

    }


    return (

        <div className=' h-screen'>


            <div className='md:flex border-transparent border-[1px] border-b-[#D9D9D9]  w-full hidden mb-[32px]'>
                {courses?.map((course, i) => (
                    <h1 className={`mr-[40px] cursor-pointer   ${selectedCourse?.code === course.code ? "text-[#183DA7] border-[3px] border-transparent border-b-[#183DA7] pb-[10px]  " : 'text-[#9E9E9E]  pb-[10px] '} `}
                        key={i} onClick={() => {
                            // getCourse(course.id)
                            setSelectedCourse(course)
                        }} >{course.code}</h1>
                ))}
            </div>


            <div className='block md:hidden  w-full   pb-[16px]  ' >
                <div className='w-[100px] text-[14px] text-black  relative  border-transparent border-b-[#D9D9D9]'>
                    <div className='flex gap-[10px] border-b-[1px] py-2  '
                        onClick={() => {
                            window.document.querySelector(".DD").classList.toggle("hidden")
                            // selectRef.current.classList.toggle("hidden")
                            // selectRef.current.classList.add("hidden")
                        }}
                    >
                        <h1 className='text-[#505050] text-[16px] leading-[24px] medium ' >{selectedCourse?.code}</h1>
                        <Image src="/image/Alt Arrow Down.svg" height={20} width={20} alt="arrow-down" />
                    </div>

                    <hr className='bg-[#D9D9D9] absolute   left-[-16px] bottom-0 w-screen h-[2px] ' />


                    <div ref={selectRef} className='z-[99] border-[0.5px] text-[#505050] w-[170px] hidden absolute left-0 top-[15px] rounded-[4px] mt-[20px] DD bg-white p-[8px]  '>
                        {courses.map((course, i) => (
                            <h1 key={i} className={`border-[1px]  text-[16px] leading-[24px] text-[505050] medium border-b-[1px] p-[8px] border-transparent  w-[149px] mx-auto mb-[8px] ${i !== courses.length - 1 && ("border-b-[#D9D9D9]")} `}
                                onClick={() => {
                                    setSelectedCourse(course)
                                    getCourse(course.id)
                                    window.document.querySelector(".DD").classList.toggle("hidden")
                                }}
                            >
                                {course?.code}
                            </h1>
                        ))}
                    </div>
                </div>
                {/* <select  className='w-[50%] bg-red-500 outline-none border-transparent p-2 text-[14px]' onClick={() => {

                    courses?.forEach((course, i) => {
                        if (Number(selectRef.current.value) === i) {
                            setSelectedCourse(course)
                            getCourse(course.id)
                        }
                    })

                }} >
                    {courses?.map((course, i) => {

                        return (
                            <option className='' key={course?.code} value={i}
                            >{course?.code}</option>
                        )
                    }
                    )
                    }
                </select> */}
            </div>

            {selectedStudent?.students?.length > 0 ?
                <>
                    <h1 className='text-[#141414] font-[500] text-[20px] medium  md:text-[30px] leading-[28px]  md:leading-[38px] pb-[16px] pt-[15px] md:pt-[2px] md:pb-[24px]  '> {load ? " " : `${selectedStudent?.students?.length} Student`} </h1>


                    <div className='w-full h-[70vh] absolute md:static ml-[-16px] md:ml-0 md:bg-white overflow-scroll scroll-hidden'>
                        {load ? <div className=' mt-[-50px] flex items-center justify-center h-full w-full'>
                            <FadeLoader color="#183DA7" />
                        </div> :

                            <table className='bg-transparent'>
                                <thead className=''>
                                    <tr>
                                        <td className='text-[14px] bg-[F9F9F9] text-[#949494] medium md:text-[16px]'>#</td>
                                        <td className='text-[14px] bg-[F9F9F9] text-[#949494] medium md:text-[16px]'>Full Name</td>
                                        <td className='text-[14px] bg-[F9F9F9] text-[#949494] medium md:text-[16px]'>Matriculation No.</td>
                                    </tr>
                                </thead>

                                <tbody>
                                    {selectedStudent?.students.map((student, index) => (
                                        <tr key={index}>
                                            <td className='text-[14px] md:text-[16px]'>{index + 1}</td>
                                            <td className='text-[14px] md:text-[16px]'>{student.name}</td>
                                            <td className='text-[14px] md:text-[16px]'>{student.matric_number}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        }
                    </div>
                </>
                :
                load ? <div className='flex items-center justify-center h-full w-full'>
                    < FadeLoader color="#183DA7" />
                </div> :

                    <div className='flex w-full h-full items-center justify-center '>
                        {err ? <div>  <Image src="/image/Teacher.svg" className='hidden md:block' width={430} height={300} alt="teacher" /> <Image src="/image/Teacher.svg" className='block md:hidden' width={330} height={250} alt="teacher" />  <p className='text-[#505050] font-[500] text-center '>
                            An error occured please check if you are connected <br /> to the internet and try again</p> </div> : <div className='flex flex-col items-center justify-center space-y-[24px]'>
                            <Image src="/image/Teacher.svg" className='hidden md:block' width={430} height={300} alt="teacher" />
                            <Image src="/image/Teacher.svg" className='block md:hidden' width={330} height={250} alt="teacher" />
                            <p className='text-[#505050] font-[500] text-center '>
                                Hello, currently no students have <br />
                                enrolled in this course.</p>
                        </div>}
                    </div>
            }
        </div >
    )
}

export default StudentCourse