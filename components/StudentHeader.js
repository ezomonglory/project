import Image from 'next/image'
import React, { useState } from 'react'
import Navlink from './Navlink'
import { useRouter } from 'next/navigation'
import StudentSidebar from './StudentSidebar'

const StudentHeader = ({ }) => {

    const [open, setOpen] = useState(false)


    const router = useRouter()

    return (


        <>

            <div className=' space-x-[32px] items-center justify-between md:py-[20px] md:px-[20px] bg-[#F4F4F4]  border-[0.5px] border-b-[#D9D9D9] border-transparent hidden md:flex'>
                <div className='flex space-x-[32px] items-center'>
                    <Image src="/image/studlogo.svg" width={114} height={32} alt="logo" />
                    <div className='flex space-x-[16px]  '>
                        <Navlink href="/students">
                            <h1 className=' text-[16px] medium ' >Attendance</h1>
                        </Navlink>

                        <Navlink href="/students/course">
                            <h1 className=' text-[16px] medium '>Course</h1>
                        </Navlink>
                    </div>
                </div>

                <div className='  cursor-pointer  flex items-center gap-[8px] '
                    onClick={() => {
                        router.push("/SignIn")
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M7.625 5.83333C7.63509 4.02081 7.71546 3.03922 8.35578 2.3989C9.08802 1.66667 10.2665 1.66667 12.6236 1.66667L13.4569 1.66667C15.8139 1.66667 16.9924 1.66667 17.7247 2.3989C18.4569 3.13113 18.4569 4.30964 18.4569 6.66667L18.4569 13.3333C18.4569 15.6904 18.4569 16.8689 17.7247 17.6011C16.9924 18.3333 15.8139 18.3333 13.4569 18.3333L12.6236 18.3333C10.2665 18.3333 9.08802 18.3333 8.35578 17.6011C7.71546 16.9608 7.63509 15.9792 7.625 14.1667" stroke="#C60000" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M12.623 10L1.78971 10M1.78971 10L4.70638 7.5M1.78971 10L4.70638 12.5" stroke="#C60000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <h1 className='text-[#C60000] medium '>Logout</h1>
                </div>
            </div>


            <div className='flex justify-between items-center w-full md:hidden  bg-[#F4F4F4]  border-[0.5px] border-b-[#D9D9D9] border-transparent py-[32px] px-[16px] cursor-pointer '>
                <div className={` fixed h-screen w-full z-50 top-0 animation  ${open ? "right-[0%] " : "right-[100%]"}`}>
                    <StudentSidebar setOpenModal={setOpen} />
                </div>

                <div className='flex justify-between items-center w-full'>
                    <Image src="/image/new logo 1.png" alt="logo" width={114} height={32} />

                    <Image src="/image/harmburger.svg" width={32} height={32} alt="menu" onClick={() => {
                        setOpen(true)
                    }} />

                </div>

            </div>
        </>

    )
}

export default StudentHeader