import Image from "next/image"
import React, { useEffect, useState } from "react"
import Navlink from "./Navlink"
import { useRouter } from "next/navigation"
import SidebarBtn from "./SidebarBtn"

const StudentSidebar = ({ setOpenModal }) => {
    const router = useRouter()
    const [name, setName] = useState("")


    return (
        <div className=" bg-white  flex flex-col space-y-[36px] relative w-full  h-full px-[24px] py-[48px] " >
            <div className="flex justify-between items-center">
                <Image src="/image/new logo 1.png" alt="logo" width={114} height={32} />
                <div className="md:hidden" onClick={() => {
                    setOpenModal(false)
                }}>
                    <Image src="/image/Xicon.svg" width={20} height={20} alt="x" />
                </div>
            </div>

            <div className="flex flex-col space-y-[16px]  ">
                <Navlink href="/students">
                    <SidebarBtn icon="user Check.svg" text="Attendance" href="/students" />
                </Navlink>
                <Navlink href="/students/course">
                    <SidebarBtn icon="Notebook.svg" text="Course" href="/students/course" />
                </Navlink>
            </div>


            <div className="flex flex-col space-y-[16px] md:absolute bottom-4   ">


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
        </div>
    )
}


export default StudentSidebar
