import React, {useRef} from "react"

// eslint-disable-next-line react/display-name
const InputField = React.forwardRef(({ label, type } , ref ) => {
    return (
        <label className="flex flex-col gap-y-[8px] w-full">
            <h2 className="text-[#505050] text-[14px]   leading-[22px] "> {label} </h2>
            <input type={type} placeholder={`Enter ${label}`} className="border-[1px] rounded-md border-[#DADADA] p-[16px] text-[14px] leading-[22px] md:text-[16px] text-[#A8A8A8] md:leading-[24px] "
                ref={ref}

            />
        </label>
    )
});

export default InputField