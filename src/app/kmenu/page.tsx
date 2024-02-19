'use client'
import React from "react"
import { PiBookOpenText } from "react-icons/pi";

const Menu = () => {
    return(
        <div>
            <div className="flex gap-[10px] pt-[20px] justify-end">
                     <div>
                           <button className="bg-yellow w-[40px] h-[40px] rounded justify-center "><PiBookOpenText className="pl-[10px] text-[30px]"/></button>
                     </div>
                     <div className="pr-[30px]">
                           <button className="bg-yellow font-normal text-[20px] w-[130px] h-[40px] rounded">Kiai</button>
                     </div>
             </div>
             <div className="flex items-end flex-col gap-y-[10px] pt-[20px] pr-[30px]">
                <div className="bg-black h-[220px] w-[350px] p-[15px] rounded">
                    <p className="text-white text-[30px]">Timings</p>
                    <div className="pt-[20px]">
                        <p className="text-white text-[15px] font-thin">Weekdays  <br />9 AM - 10 PM</p>
                        <p className="text-white text-[15px] font-thin pt-[10px]">Weekends <br /> 9 AM - 5PM</p>
                    </div>
                </div>
                <div>
                    <div className="bg-black h-[150px] w-[350px] p-[15px] rounded-t">
                        <p className="text-white text-[30px]">Location</p><br />
                        <p className="text-white text-[15px] font-thin">28710 Wall Street <br /> Wixom, MI 48393</p>
                    </div>
                    <img className="h-[200px] w-[350px] rounded-b" src="location.png"/>
                </div>
                <button className="bg-yellow text-[20px] h-[40px] w-[350px] rounded">Pierre Mouele</button>
             </div>

        </div>
    )
}
export default Menu
