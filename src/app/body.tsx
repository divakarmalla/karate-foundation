'use client'
import React from "react"

const Body = () => {
    return(
        <div>
            <div className=" flex p-[90px] gap-[350px]">
                <p className="text-[25px]">Shotokan World Karate Feaderation is <br /> 
                an organization that follows and <br />
                forges the traditional forms of <br />
                Shotokan karate as orginated by <br />
                Master Bichin Funakoshi (1868-1957), <br />
                developed ans taught by Kancho <br />Harolazu kanazawa
                </p>
                <h2 className="font-[400px] text-[45px] text-end">Discipline <br />from the past</h2>
            </div>
            <div className="grid gap[40px] p-[100px]">
                <div className="grid gap-[100px]">
                <div className="bg-black h-[100px] w-[1350px] text-[45px] p-[20px] text-center text-white origin-center rotate-12"><h1>SHOTOKAN KARATE - PIERRE * SHOTOKAN KARATE</h1></div>
                </div>
                <div className="bg-yellow h-[100px] w-[1350px] text-[45px] p-[20px] text-center origin-bottom -rotate-12"><h1>UPCOMING - EVENTS & TOURS * UPCOMING EVENTS</h1></div>
            </div>
        </div>
    )
}
export default Body