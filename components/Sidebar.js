import Image from "next/image"
import React, { useEffect, useState } from "react"
import SidebarBtn from "./SidebarBtn"
import Navlink from "./Navlink"
import { useRouter } from "next/navigation"

const Sidebar = ({ setOpenModal }) => {
    const router = useRouter()
    const [name, setName] = useState("")

    useEffect(() => {

        const data = JSON.parse(localStorage.getItem("user"))
        if (data) {
            setName(data.full_name)            
        }
    }, [])

    return (
        <div className=" bg-white  flex flex-col space-y-[36px] relative w-full  md:w-[250px] xl:w-[300px] h-full px-[24px] py-[48px] " >
            <div className="flex justify-between items-center">
                <Image src="/image/new logo 1.png" alt="logo" width={114} height={32} />
                <div className="md:hidden" onClick={() => {
                    setOpenModal(false)
                }}>
                    <Image src="/image/Xicon.svg" width={20} height={20} alt="x" />
                </div>
            </div>

            <div className="flex flex-col space-y-[16px]  ">
                <Navlink href="/admin/Student">
                <SidebarBtn icon="UserID.svg" text="Student" href="/admin/Student" />

                </Navlink>
                <Navlink href="/admin/Attendance">
                    <SidebarBtn icon="user Check.svg" text="Attendance" href="/admin/Attendance" />
                </Navlink>
                <Navlink href="/admin/Course">
                    <SidebarBtn icon="Notebook.svg" text="Course Management" href="/admin/Course" />
                </Navlink>
            </div>


            <div className="flex flex-col space-y-[16px] md:absolute bottom-4   ">
                <div className="flex space-x-[16px] pl-[8px] cursor-pointer">
                    <div className="bg-gray-600 w-[20px] h-[20px] rounded-full">
                    </div>
                    <h2 className="medium capitalize">{name}</h2>
                </div>

                <div className="cursor-pointer"
                    onClick={() => {
                        router.push("/")
                    }}
                >
                    <SidebarBtn icon="Logout 2.svg" text="Logout" />
                </div>

            </div>
        </div>
    )
}


export default Sidebar
