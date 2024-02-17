'use client'
import React from "react"

const Buttons = () => {
    return(
        <div>
            <div className="flex justify-center pt-[150px] gap-[30px]">
                <button className="hover:text-white hover:bg-slate-700 h-[40px] w-[100px] rounded-[10px] font-light text-[20px]">Madrid</button>
                <button className="hover:text-white hover:bg-slate-700 h-[40px] w-[100px] rounded-[10px] font-light text-[20px]">Sydney</button>
                <button className="hover:text-white hover:bg-slate-700 h-[40px] w-[100px] rounded-[10px] font-light text-[20px]">Rome</button>
                <button className="hover:text-white hover:bg-slate-700 h-[40px] w-[100px] rounded-[10px] font-light text-[20px]">Accra</button>
                <button className="hover:text-white hover:bg-slate-700 h-[40px] w-[100px] rounded-[10px] font-light text-[20px]">Salvador</button>
            </div>
            <div className="flex justify-center pt-[60px]">
                <button  className="bg-yellow h-[40px] w-[300px] rounded-[10px] text-[20px] font-normal">Let's train</button>
           </div>
           <p className="text-center font-light text-sm pt-3">12-14 APRIL 2024</p>
           <div className="flex justify-between p-[30px] pt-[100px] ">
                  <div>
                    <h5 className="text-[30px]">World Katate Federation</h5>
                    <p className="text-[20px]">World Sports Fitness</p>
                  </div>
                <div className="flex gap-4">
                    <img className="h-[60px] w-[60px]" src="fb.png"/>
                    <img className="h-[60px] w-[60px]" src="insta.jpg"/>
              </div>
           </div>
        </div>
    )
}
export default Buttons