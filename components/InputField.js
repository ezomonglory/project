import React from "react"

const InputField = ({label, type}) => {
    return(
        <label className="flex flex-col gap-y-[8px] w-full">
            <h2 className="text-[#505050] text-[14px]   leading-[22px] "> {label} </h2>
            <input type={type} placeholder={`Enter ${label}`}  className="border-[1px] rounded-md border-[#DADADA] p-[16px] text-[14px] leading-[22px] md:text-[16px] text-[#A8A8A8] md:leading-[24px] "  />
        </label>
    )
}

export default InputField