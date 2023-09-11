import Image from "next/image"
import React from "react"
import SidebarBtn from "./SidebarBtn"
import Navlink from "./Navlink"

const Sidebar = ({setOpenModal}) => {

    return (
        <div className=" bg-white  flex flex-col space-y-[36px] relative w-full  md:w-[250px] xl:w-[300px] h-full px-[24px] py-[48px] " >
            <div className="flex justify-between items-center">
                <Image src="/image/new logo 1.png" alt="logo" width={114} height={32} />
                <div className="md:hidden" onClick={()=> {
                    setOpenModal(false)
                }}>
                    <Image src="/image/Xicon.svg" width={20} height={20} alt="x" />
                </div>
            </div>

            <div className="flex flex-col space-y-[16px]  ">
                <Navlink href="/admin/Student">
                    <SidebarBtn icon="/image/User Id.svg" text="Student" href="/admin/Student" />

                </Navlink>
                <Navlink href="/admin/Attendance">
                    <SidebarBtn icon="/image/User Id.svg" text="Attendance" href="/admin/Attendance" />
                </Navlink>
                <Navlink href="/admin/Course">
                    <SidebarBtn icon="/image/Notebook.svg" text="Course Management" href="/admin/Course" />
                </Navlink>
            </div>


            <div className="flex flex-col space-y-[16px] absolute bottom-[10px]  ">
                <div className="flex space-x-[16px] pl-[8px] cursor-pointer">
                    <div className="bg-gray-600 w-[20px] h-[20px] rounded-full">
                    </div>
                    <h2 className="medium">Ezomon GLory</h2>
                </div>

                <div className="cursor-pointer">
                    <SidebarBtn icon="/image/User Id.svg" text="Logout" />
                </div>

            </div>
        </div>
    )
}


export default Sidebar
