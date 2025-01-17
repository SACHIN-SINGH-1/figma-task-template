import { Img, Text } from "../../components";
import React from "react";

export default function SuccessStoriesSection() {
return (
    
    <>
    {/* success stories section */}

<div className="mt-[46px] flex self-stretch md:flex-col grey-bg">
<div className="flex flex-1 flex-col items-start justify-center gap-3 bg-light_green-400_4c py-[60px] pl-[98px] pr-14 md:self-stretch md: p-5">
<Text
size="textmd"
as="p"
className="text-[40px] font-normal leading-[50px] !text-light_green-600 md:text-[38px] sm:text-[36px]">
<span className="font-bold text-light_green-600 green-font">
<>
Success
<br/>
</>
</span>
<span className="text-black-900" >Stories</span>
</Text>
<Text as="p" className="w-[100%] self-center text-[13px] font-light leading-[19px] !text-gray-600 md:w-full">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
anim id est laborum.
</Text>
</div>
<Img
src="images/img_himachal_fieldwork.png"
alt="Himachal"
className="h-[376px] w-[33%] object-contain md:w-full"/>
</div>

</>

);
}