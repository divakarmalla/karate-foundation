/* eslint-disable @next/next/no-img-element */
'use client'
import React from "react"

const Buttons = () => {
    return(
        <div>
            <div className="flex justify-center gap-[30px]">
                <button className="hover:text-white hover:bg-slate-700 h-[40px] w-[100px] rounded-[10px] font-light text-[20px]">Madrid</button>
                <button className="hover:text-white hover:bg-slate-700 h-[40px] w-[100px] rounded-[10px] font-light text-[20px]">Sydney</button>
                <button className="hover:text-white hover:bg-slate-700 h-[40px] w-[100px] rounded-[10px] font-light text-[20px]">Rome</button>
                <button className="hover:text-white hover:bg-slate-700 h-[40px] w-[100px] rounded-[10px] font-light text-[20px]">Accra</button>
                <button className="hover:text-white hover:bg-slate-700 h-[40px] w-[100px] rounded-[10px] font-light text-[20px]">Salvador</button>
            </div>
            <div className="p-[50px]">
                    <div className="flex justify-center">
                        <button  className="bg-yellow h-[40px] w-[300px] rounded-[10px] text-[20px] font-normal">Lets train</button>
                    </div>
                    <p className="text-center font-light text-sm p-[10px]">12-14 APRIL 2024</p>
           </div>
           <div className="flex justify-between p-[30px] pt-[100px] ">
                  <div>
                    <h5 className="text-[30px]">World Katate Federation</h5>
                    <p className="text-[20px]">World Sports Fitness</p>
                  </div>
                <div className="flex gap-4">
                    <img alt="facebook" className="h-[60px] w-[60px]" src="fb.png"/>
                    <img alt="instagram" className="h-[60px] w-[60px]" src="insta.jpg"/>
              </div>
           </div>
        </div>
    )
}
export default Buttons