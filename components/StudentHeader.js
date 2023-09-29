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

            <div className=' space-x-[32px] items-center justify-between md:py-[20px] md:px-[20px] bg-[#F4F4F4]  border-[0.5px] md:border-b-[#D9D9D9] border-transparent hidden md:flex'>
                <div className='flex space-x-[32px] items-center'>
                    <Image src="/image/studlogo.svg" width={114} height={32} alt="logo" />
                    <div className='flex space-x-[16px]  '>
                        <Navlink href="/students">
                            <h1 className=' text-[16px] medium text-[#9e9e9e] ' >Attendance</h1>
                        </Navlink>

                        <Navlink href="/students/course">
                            <h1 className=' text-[16px] medium text-[#9e9e9e] '>Courses</h1>
                        </Navlink>
                    </div>
                </div>



                <div className='flex items-center gap-[24px]' >

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6663 11.9999C23.6663 18.4432 18.443 23.6666 11.9997 23.6666C5.55635 23.6666 0.333008 18.4432 0.333008 11.9999C0.333008 5.5566 5.55635 0.333252 11.9997 0.333252C18.443 0.333252 23.6663 5.5566 23.6663 11.9999ZM15.4997 8.49992C15.4997 10.4329 13.9327 11.9999 11.9997 11.9999C10.0667 11.9999 8.49967 10.4329 8.49967 8.49992C8.49967 6.56692 10.0667 4.99992 11.9997 4.99992C13.9327 4.99992 15.4997 6.56692 15.4997 8.49992ZM11.9997 21.9166C14.081 21.9166 16.0127 21.2754 17.6077 20.1797C18.3123 19.6957 18.6133 18.7739 18.2037 18.0237C17.3546 16.4685 15.6049 15.4999 11.9996 15.4999C8.39431 15.4999 6.64464 16.4685 5.79551 18.0236C5.3859 18.7738 5.68696 19.6956 6.39146 20.1796C7.98656 21.2753 9.91822 21.9166 11.9997 21.9166Z" fill="#808080" />
                    </svg>

                    <div className='  cursor-pointer  flex items-center gap-[8px] '
                        onClick={() => {
                            router.push("/")
                        }}
                    >


                        <h1 className='text-[#9e9e9e] medium '>Logout</h1>
                    </div>
                </div>
            </div>


            <div className='flex justify-between items-center w-full md:hidden  bg-[#F4F4F4]  border-[0.5px] md:border-b-[#D9D9D9] border-transparent pt-[32px] px-[16px] cursor-pointer '>
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