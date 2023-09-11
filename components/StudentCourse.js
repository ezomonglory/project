import React from 'react'

import { useEffect, useRef, useState } from 'react'
import { Courses } from '../data'
import Image from 'next/image'




const StudentCourse = () => {

    const [selectedCourse, setSelectedCourse] = useState()
    const selectRef = useRef(null)

    useEffect(() => {
        setSelectedCourse(Courses[0])
    }, [])
    return (

        <div className=' h-screen'>
            <div className='md:flex border-transparent border-[1px] border-b-[#D9D9D9]  w-full hidden'>
                {Courses.map((course, i) => (
                    <h1 className={`mr-[40px] cursor-pointer   ${selectedCourse?.name === course.name ? "text-[#183DA7] border-[0.5px] border-transparent border-b-[#183DA7] pb-[10px] medium  " : 'text-[#9E9E9E]  pb-[10px] '} `} key={i} onClick={() => {
                        setSelectedCourse(course)
                    }} >{course.name}</h1>
                ))}
            </div>

            <div className='block md:hidden' >
                <select ref={selectRef} className='w-[95px] bg-transparent outline-none border-transparent p-2 text-[14px]' onClick={() => {

                    Courses.forEach((course, i) => {
                        if (Number(selectRef.current.value) === i) {
                            setSelectedCourse(course)
                        }
                    })

                }} >
                    {Courses.map((course, i) => {

                        return (
                            <option className='' key={course?.name} value={i}
                            >{course?.name}</option>
                        )
                    }
                    )
                    }
                </select>
            </div>

            <h1 className='text-[#141414] font-[500] text-[18px] medium  md:text-[30px] leading-[28px]  md:leading-[38px] pb-[16px] pt-[40px] md:pb-[32px] '> {selectedCourse?.number} Student </h1>

            {selectedCourse?.students.length > 0 ?
                <div className='w-full h-[70vh] bg-white overflow-scroll scroll-hidden'>
                    <table>
                        <thead>
                            <tr>
                                <td className='text-[14px] md:text-[16px]'>#</td>
                                <td className='text-[14px] md:text-[16px]'>Full Name</td>
                                <td className='text-[14px] md:text-[16px]'>Matriculation No.</td>
                            </tr>
                        </thead>

                        <tbody>
                            {selectedCourse?.students.map((student, index) => (
                                <tr key={index}>
                                    <td className='text-[14px] md:text-[16px]'>{student.sn}</td>
                                    <td className='text-[14px] md:text-[16px]'>{student.name}</td>
                                    <td className='text-[14px] md:text-[16px]'>{student.matno}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                :
                <div className='flex w-full h-[60vh] items-center justify-center '>
                    <div className='flex flex-col items-center justify-center space-y-[24px]'>
                        <Image src="/image/Teacher.svg" className='hidden md:block' width={430} height={300} alt="teacher" />
                        <Image src="/image/Teacher.svg" className='block md:hidden' width={330} height={250} alt="teacher" />
                        <p className='text-[#505050] font-[500] text-center '>Hello Glory, currently no students have <br />
                            enrolled in this course.</p>
                    </div>
                </div>}
        </div>
    )
}

export default StudentCourse