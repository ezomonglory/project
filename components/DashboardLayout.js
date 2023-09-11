import React, { useState } from 'react'
import Sidebar from './Sidebar'
import DashboardMobileHeader from './DashboardMobileHeader'
import Image from 'next/image'
import { useRouter } from 'next/router'
import StudentNoCourse from './StudentNoCourse'
import { Courses } from '../data'


const DashboardLayout = ({ children, openModal }) => {

    const [open, setOpen] = useState(false)
    const Router = useRouter()

    console.log(Router.pathname)
    

    return (
        <div className='flex  h-screen overflow-hidden w-full'>

            <div className='hidden md:block'>
                <Sidebar />
            </div>


            


            {(Courses.length === 0 && Router.pathname !== "/admin/AddCourse") ? <StudentNoCourse /> :
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