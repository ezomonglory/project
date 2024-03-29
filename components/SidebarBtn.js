import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"



const SidebarBtn = ({ text, icon, href, tru }) => {
    const router = useRouter()
    const image = icon

    console.log(href)

    return (
        <div className="flex space-x-[16px] py-[8px] items-center" current-link={router.pathname === href ? "page" : "null"} >
            {
                !tru && (<div className=" w-[20px] h-[20px] rounded-full  ">
                    <Image src={`${`/image/${image}`}`} className="" alt="logo" width={20} height={20} />
                </div>)
            }
            <h2 className={router.pathname === href ? "leading-[24px] text-[#183DA7] medium " : " medium leading-[24px] text-[#9E9E9E]"}>{text}</h2>
        </div>
    )
}


export default SidebarBtn
