import react from "react"
import Image from "next/image"
import Link from 'next/link'

export default function SignupHeader({ login }) {
    return (
        <div className="w-full">
            <div className="block md:hidden mx-auto">
                <Image src="/image/new logo 1.png" className="mx-auto" width={114} height={32} alt="logo" />
            </div>

            <div className=" justify-between items-center pt-[40px] hidden md:flex">
                <Image src="/image/new logo 1.png" width={142} height={40} alt="logo" />
                <div className="flex gap-x-[16px] items-center">
                    <h2 className="font-[500px] leading-[24px] text-[#9E9E9E] "> {login ? "New to AttendX" : "Not new to AttendX?"} </h2>
                    <Link href={`${login ? "/" : "SignIn"}`}>
                        <div className="cursor-pointer bg-[#E2EAFE] medium font-[500] text-bold px-[16px] py-[6px] text-[#183DA7]"

                        >{login ? "Sign up" : "Sign in"} </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}


