// import Head from 'next/head'
// import React, { useState } from 'react'
// import DashboardLayout from '../../components/DashboardLayout'
// import Button from '../../components/Button';
// import CourseModal from '../../components/CourseModal';
// import StudentHeader from '../../components/StudentHeader';

// const AddCourse = () => {

//     const [open, setOpen] = useState(false)

//     const Attendance = [
//         {
//             serialNumber: 1,
//             courseCode: 'CS101',
//             courseTitle: 'Introduction to Computer Science',
//             credit: "3 Credit",
//             semester: "1st Sem."

//         },
//         {
//             serialNumber: 2,
//             courseCode: 'ENG202',
//             courseTitle: 'Advanced English Composition',
//             credit: "4 Credit",
//             semester: "1st Sem."
//         },
//         {
//             serialNumber: 3,
//             courseCode: 'MAT150',
//             courseTitle: 'Calculus I',
//             credit: "5 Credit",
//             semester: "1st Sem."
//         },
//         {
//             serialNumber: 4,
//             courseCode: 'PHY110',
//             courseTitle: 'Physics for Engineers',
//             credit: "4 Credit",
//             semester: "1st Sem."
//         },
//         {
//             serialNumber: 5,
//             courseCode: 'HIS220',
//             courseTitle: 'World History: 20th Century',
//             credit: "3 Credit",
//             semester: "1st Sem."
//         },
//         {
//             serialNumber: 6,
//             courseCode: 'BIO101',
//             courseTitle: 'Introduction to Biology',
//             credit: "4 Credit",
//             semester: "1st Sem."
//         },
//         // {
//         //     serialNumber: 7,
//         //     courseCode: 'CHEM120',
//         //     courseTitle: 'General Chemistry',
//         //     credit: "5 Credit" ,
//         //     semester: "1st Sem."
//         // },
//         // {
//         //     serialNumber: 8,
//         //     courseCode: 'PSY201',
//         //     courseTitle: 'Introduction to Psychology',
//         //     credit: "3 Credit" ,
//         //     semester: "1st Sem."
//         // },
//         // {
//         //     serialNumber: 9,
//         //     courseCode: 'ART110',
//         //     courseTitle: 'Introduction to Art and Design',
//         //     credit: "3 Credit" ,
//         //     semester: "1st Sem."
//         // },
//         // {
//         //     serialNumber: 10,
//         //     courseCode: 'ECON301',
//         //     courseTitle: 'Microeconomics',
//         //     credit: "4 Credit" ,
//         //     semester: "1st Sem."
//         // }
//     ];



//     return (
//         <div>
//             <Head>
//                 <title>Attend X</title>
//                 <meta name="description" content="Generated by create next app" />
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>

//             <main className='bg-[#F4F4F4] py-[16px] px-[20px] md:p-0'>


//                 {open ? <CourseModal text="update" texting="updating" setOpen={setOpen} color="bg-[#183DA7]" icon="image/Notebook.svg" /> :

//                     <>

//                         <StudentHeader />

//                         <div className='md:px-[128px] mt-[32px] md:mt-[40px]'>
//                             <div className='pb-[16px] md:pb-[32px] flex justify-between items-center'>
//                                 <h1 className='text-[#141414] font-[500] text-[18px]  md:text-[30px] leading-[28px]  md:leading-[38px] medium  '> Add new course </h1>
//                             </div>


//                             <>
//                                 <div className='w-full h-[65vh] bg-transparent  md:bg-white overflow-scroll scroll-hidden overflow-x-scroll scroll-hidden'>
//                                     <table className='w-[900px] bg-transparent'>
//                                         <thead className='bg-gray-200 md:bg-white w-full'>
//                                             <tr>
//                                                 <td className='text-[14px] md:text-[16px]'><input type='checkbox' disabled /></td>
//                                                 <td className='text-[14px] md:text-[16px] medium'>Semester</td>
//                                                 <td className='text-[14px] md:text-[16px] medium'>Course Code</td>
//                                                 <td className='text-[14px] md:text-[16px] medium'>Course Title</td>
//                                                 <td className='text-[14px] md:text-[16px] medium'>Credit</td>

//                                             </tr>
//                                         </thead>


//                                         <tbody >
//                                             {Attendance.map((Attendance, index) => (
//                                                 <tr key={index} className=''>
//                                                     <td className='text-[14px] md:text-[16px]'><input type='checkbox' /></td>
//                                                     <td className='text-[14px] md:text-[16px]'>{Attendance.semester}</td>
//                                                     <td className='text-[14px] md:text-[16px]'>{Attendance.courseCode}</td>
//                                                     <td className='text-[14px] md:text-[16px]'>{Attendance.courseTitle}</td>
//                                                     <td className='text-[14px] md:text-[16px]'>{Attendance.credit}</td>

//                                                 </tr>
//                                             ))}
//                                         </tbody>


//                                     </table>


//                                 </div>


//                                 <div className='w-[150px] mt-[32px]' onClick={() => {
//                                     setOpen(true)
//                                 }}>
//                                     <Button text="Update Course" />
//                                 </div>
//                             </>
//                         </div>

//                     </>
//                 }
//             </main>
//         </div>
//     )
// }

// export default AddCourse


import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import Button from '../../components/Button';
import CourseModal from '../../components/CourseModal';
import axios from 'axios';
import StudentHeader from '../../components/StudentHeader';

const AddCourse = () => {


    const [open, setOpen] = useState(false)
    const [check, setCheck] = useState(false)
    const [checkBoxList, setCheckBoxList] = useState([])

    const checkRef = useRef()

    const [load, setLoad] = useState(false)
    const [selectedCourse, setSelectedCourse] = useState()
    const [User, setUser] = useState()
    // const [selectedStudent, setSelectedStudent] = useState()
    const [Attendance, setAttendance] = useState([])
    const [err, setErr] = useState()
    const selectRef = useRef(null)


    useEffect(() => {
        const user = JSON.parse(window.localStorage.getItem("user"))
        if (user) {
            setUser(user)
        }
    }, [])

    // useEffect(() => {
    //     console.log(courses)
    //     setSelectedCourse(courses[0])
    // }, [User])

    useEffect(() => {
        getCourse()
    }, [])




    useEffect(() => {
        updateArray()
    }, [Attendance])




    useEffect(() => {
        if (checkBoxList) {
            const Arr = Array.from(checkBoxList)
            console.log(checkBoxList)
            console.log(Arr)
            Arr?.forEach((box) => {
                if (box) {
                    console.log(box)
                }
            })
        }
    }, [checkBoxList])

    const updateArray = () => {
        Attendance.forEach((attend) => {
            setCheckBoxList((prev) => ({ ...prev, [attend._id]: false }))
        })
    }

    const handleChange = (e) => {
        const { id, checked } = e.target;
        setCheckBoxList((prevState) => ({
            ...prevState,
            [id]: checked,
        }));

    }

    const getCourse = async (course) => {
        console.log("Course called")
        setLoad(true)
        await axios.get(`https://attendx-2hi6.onrender.com/course/all-courses`).then((res) => {
            console.log("Course complete")
            setLoad(false)
            setErr(false)
            setAttendance(res.data)
            console.log(res.data)
        }).catch((err) => {
            console.log("Course error")
            setErr(true)
            setLoad(false)
            console.log("error")
            console.log(err)
        })

    }





    return (
        <div>
            <Head>
                <title>Attend X</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main >


                {open ? <CourseModal text="update" texting="updating" user={User} Attendance={checkBoxList} setOpen={setOpen} color="bg-[#183DA7]" icon="image/Notebook.svg" /> :

                    < >
                        <StudentHeader />

                      <div className='bg-[#F4F4F4] w-full md:p-[300px] px-[16px]'>
                      <div className='pb-[16px] md:pb-[32px] flex mt-[40px] justify-between items-center'>
                            <h1 className='text-[#141414] font-[500] text-[18px]  md:text-[30px] leading-[28px]  md:leading-[38px] medium  '> Add new course </h1>
                        </div>


                        <>
                            <div className='w-full flex  h-[65vh] bg-transparent  md:bg-red-500 overflow-scroll scroll-hidden overflow-x-scroll scroll-hidden '>
                                <table className='w-[900px] bg-transparent'>
                                    <thead className='bg-gray-200 w-full'>
                                        <tr>
                                            <td className='text-[14px] md:text-[16px]'><input type='checkbox' disabled /></td>
                                            <td className='text-[14px] md:text-[16px]'>Semester</td>
                                            <td className='text-[14px] md:text-[16px]'>Course Code</td>
                                            <td className='text-[14px] md:text-[16px]'>Course Title</td>
                                            <td className='text-[14px] md:text-[16px]'>Credit</td>

                                        </tr>
                                    </thead>


                                    <tbody >
                                        {Attendance?.map((Attendance, index) => (
                                            <tr key={index} className=''>
                                                <td className='text-[14px] md:text-[16px]'>
                                                    <input type='checkbox' ref={checkRef}
                                                        id={Attendance._id}
                                                        checked={checkBoxList[Attendance._id]}
                                                        onChange={(e) => { handleChange(e) }}
                                                    // onClick={() => {
                                                    //     checkChecked()
                                                    // }}
                                                    /></td>
                                                <td className='text-[14px] md:text-[16px]'>{Attendance.course_semester}</td>
                                                <td className='text-[14px] md:text-[16px]'>{Attendance.course_code}</td>
                                                <td className='text-[14px] md:text-[16px]'>{Attendance.course_title}</td>
                                                <td className='text-[14px] md:text-[16px]'>{Attendance.course_credit}</td>

                                            </tr>
                                        ))}
                                    </tbody>


                                </table>


                            </div>


                            <div className='w-[150px] mt-[32px]' onClick={() => {
                                setOpen(true)

                            }}>
                                <Button text="Update Course" />
                            </div>
                        </>
                      </div>
                    </>


                }
            </main>
        </div>
    )
}

export default AddCourse