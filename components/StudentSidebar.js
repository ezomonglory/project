import Image from "next/image"
import React, { useEffect, useState } from "react"
import Navlink from "./Navlink"
import { useRouter } from "next/navigation"
import SidebarBtn from "./SidebarBtn"

const StudentSidebar = ({ setOpenModal }) => {
    const router = useRouter()
    const [name, setName] = useState("")


    return (
        <div className=" bg-white  flex flex-col space-y-[24px] relative w-full  h-full px-[24px] py-[48px] " >
            <div className="flex justify-between items-center">
                <Image src="/image/new logo 1.png" alt="logo" width={114} height={32} />
                <div className="md:hidden" onClick={() => {
                    setOpenModal(false)
                }}>
                    <Image src="/image/Xicon.svg" width={20} height={20} alt="x" />
                </div>
            </div>

            <div className="flex flex-col space-y-[16px] pt-[24px]  ">
                <Navlink href="/students">
                    <SidebarBtn tru={true} icon="user Check.svg" text="Attendance" href="/students" />
                </Navlink>
                <Navlink href="/students/course">
                    <SidebarBtn tru={true} icon="Notebook.svg" text="Courses" href="/students/course" />
                </Navlink>

                <Navlink href="#">
                    <SidebarBtn tru={true} icon="Notebook.svg" text="Profile" href="" />
                </Navlink>
            </div>

            <hr className="h-[1px] bg-[#e7e7ed]  md:hidden w-full " />

            <div className="flex flex-col space-y-[24px] px-[16px] md:absolute bottom-4  ">


                <div className='  cursor-pointer  flex items-center gap-[8px] '
                    onClick={() => {
                        router.push("/")
                    }}
                >

                    <h1 className=' text-[#9e9e9e] medium '>Logout</h1>
                </div>


            </div>
        </div>
    )
}


export default StudentSidebar
