import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { Courses } from '../../data'
import { useRouter } from 'next/router'
import CourseModal from '../../components/CourseModal'
import StudentHeader from '../../components/StudentHeader'


const Course = () => {

    const Router = useRouter()
    const [open, setOpen] = useState(false)

    const Attendance = [
        {
            serialNumber: 1,
            courseCode: 'CS101',
            courseTitle: 'Introduction to Computer Science',
            credit: "3 Credit",
            semester: "1st Sem."

        },
        {
            serialNumber: 2,
            courseCode: 'ENG202',
            courseTitle: 'Advanced English Composition',
            credit: "4 Credit",
            semester: "1st Sem."
        },
        {
            serialNumber: 3,
            courseCode: 'MAT150',
            courseTitle: 'Calculus I',
            credit: "5 Credit",
            semester: "1st Sem."
        },
        {
            serialNumber: 4,
            courseCode: 'PHY110',
            courseTitle: 'Physics for Engineers',
            credit: "4 Credit",
            semester: "1st Sem."
        },
        {
            serialNumber: 5,
            courseCode: 'HIS220',
            courseTitle: 'World History: 20th Century',
            credit: "3 Credit",
            semester: "1st Sem."
        },
        {
            serialNumber: 6,
            courseCode: 'BIO101',
            courseTitle: 'Introduction to Biology',
            credit: "4 Credit",
            semester: "1st Sem."
        },
        // {
        //     serialNumber: 7,
        //     courseCode: 'CHEM120',
        //     courseTitle: 'General Chemistry',
        //     credit: "5 Credit" ,
        //     semester: "1st Sem."
        // },
        // {
        //     serialNumber: 8,
        //     courseCode: 'PSY201',
        //     courseTitle: 'Introduction to Psychology',
        //     credit: "3 Credit" ,
        //     semester: "1st Sem."
        // },
        // {
        //     serialNumber: 9,
        //     courseCode: 'ART110',
        //     courseTitle: 'Introduction to Art and Design',
        //     credit: "3 Credit" ,
        //     semester: "1st Sem."
        // },
        // {
        //     serialNumber: 10,
        //     courseCode: 'ECON301',
        //     courseTitle: 'Microeconomics',
        //     credit: "4 Credit" ,
        //     semester: "1st Sem."
        // }
    ];





    return (
        <div>

            <Head>
                <title>Attend X</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='bg-[#F4F4F4] py-[16px] px-[20px] md:p-0 '>

                {open ? <CourseModal text="delete" texting="removal" color="bg-red-600" setOpen={setOpen} icon="/image/Danger Circle.svg" /> :

                    <>
                        
                        <StudentHeader />
                        
                     <div className=' md:px-[128px] mt-[40px]'>
                     <div className='pb-[16px] md:pb-[32px] flex justify-between items-center mt-[32px] md:mt-0'>
                            <h1 className='text-[#141414] font-[500] text-[18px]  md:text-[30px] leading-[28px]  md:leading-[38px] medium '> Courses </h1>
                            <div className='hidden md:flex bg-[#183DA7] px-[16px] py-[8px]  space-x-[8px] text-white items-center rounded-md cursor-pointer' onClick={() => {
                                Router.push("/students/AddCourse")
                            }} >
                                <Image src="/image/Frame.svg" height={20} width={20} alt="qr" /> <span>Add Course</span>
                            </div>
                        </div>




                        <div className='w-full h-[80vh] bg-transparent  md:bg-white overflow-scroll scroll-hidden overflow-x-scroll scroll-hidden'>
                            <table className='w-[900px] bg-transparent'>
                                <thead className='bg-gray-200 md:bg-white w-full'>
                                    <tr>
                                        <td className='text-[14px] md:text-[16px] medium'>#</td>
                                        <td className='text-[14px] md:text-[16px] medium'>Semester</td>
                                        <td className='text-[14px] md:text-[16px] medium'>Course Code</td>
                                        <td className='text-[14px] md:text-[16px] medium'>Course Title</td>
                                        <td className='text-[14px] md:text-[16px] medium'>Credit</td>
                                        <td className='text-[14px] md:text-[16px] medium'></td>

                                    </tr>
                                </thead>


                                <tbody >
                                    {Attendance.map((Attendance, index) => (
                                        <tr key={index} className=''>
                                            <td className='text-[14px] md:text-[16px]'>{Attendance.serialNumber}</td>
                                            <td className='text-[14px] md:text-[16px]'>{Attendance.semester}</td>
                                            <td className='text-[14px] md:text-[16px]'>{Attendance.courseCode}</td>
                                            <td className='text-[14px] md:text-[16px]'>{Attendance.courseTitle}</td>
                                            <td className='text-[14px] md:text-[16px]'>{Attendance.credit}</td>
                                            <td className=''>
                                                <div className='text-[12px] md:text-[12px] px-[12px] py-[3px] text-[#C60000]  border-[0.5px] border-[#FFE3E3]  medium rounded-md cursor-pointer  inline-block' onClick={() => {
                                                    setOpen(true)
                                                }} >

                                                    Delete
                                                </div>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>


                            </table>

                        </div>

                        <div className='fixed right-[20px] items-center justify-center flex bottom-[20%] bg-[#183DA7] rounded-full w-[48px] h-[48px] md:hidden' onClick={() => {
                            Router.push("/students/AddCourse")
                        }}>
                            <Image src="/image/Frame.svg" alt="plus" width={24} height={24} />
                        </div>
                     </div>
                    </>


                }
            </main>
        </div>
    )
}

export default Course