import React, {useRef} from "react"

// eslint-disable-next-line react/display-name
const InputField = React.forwardRef(({ label, type } , ref ) => {
    return (
        <label className="flex flex-col gap-y-[8px] w-full">
            <h2 className="text-[#505050] text-[14px]   leading-[22px] "> {label} </h2>
            <input type={type} placeholder={`Enter ${label}`} className="border-[1px] rounded-md border-[#DADADA] p-[16px] text-[14px] leading-[22px] md:text-[16px] text-[#141414] md:leading-[24px] active:border-[#E2EAFE] focus:ring focus:ring-[#E2EAFE] focus:border-[#E2EAFE] focus:outline-none "
                ref={ref}

            />
        </label>
    )
});

export default InputField