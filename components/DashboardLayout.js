import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import DashboardMobileHeader from './DashboardMobileHeader'
import Image from 'next/image'
import { useRouter } from 'next/router'
import StudentNoCourse from './StudentNoCourse'


const DashboardLayout = ({ children, openModal }) => {

    const [open, setOpen] = useState(false)
    const Router = useRouter()
    const [Courses, setCourses] = useState(false)

    useEffect(() => {
        console.log("herrre")
        const user = JSON.parse(window.localStorage.getItem("user"))
        if (user) {
            setCourses(user.courses)
        }
    }, [])

    useEffect(() => {
        console.log(Courses)
    }, [Courses])

    return (
        <div className='flex  h-screen overflow-hidden w-full'>

            <div className='hidden md:block'>
                <Sidebar />
            </div>





            {(Courses.length === 0 && Router.pathname !== "/admin/AddCourse") ?
                <div className={openModal ? 'bg-[#F4F4F4] w-full ' : ' bg-[#F4F4F4] w-full md:p-[40px] px-[16px]'}>
                    <div className='block md:hidden py-6 w-full'>
                        <DashboardMobileHeader />
                    </div>
                    <StudentNoCourse />
                </div>
                :
                <div className={openModal ? 'bg-[#F4F4F4] w-full ' : 'bg-[#F4F4F4] w-full md:p-[40px] px-[16px]'}>
                    <div className='block md:hidden py-6 w-full'>
                        <DashboardMobileHeader />
                    </div>
                    {children}
                </div>
            }


        </div>
    )
}

export default DashboardLayout