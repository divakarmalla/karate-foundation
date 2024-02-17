'use client'
import React from "react"
import Body from "./body"
import Buttons from "./bbuttons"
import Colors from "./bcolors"
import { PiBookOpenText } from "react-icons/pi";

const Karate = () => {
   return(
    <div>
      <div className="flex justify-between p-[20px]">
         <h1 className="text-[40px] pl-[30px]">ØKF</h1>
               <div className="flex gap-[10px] pt-[20px]">
                     <div>
                           <button className="bg-yellow w-[40px] h-[40px] rounded justify-center "><PiBookOpenText className="pl-[10px] text-[30px]"/></button>
                     </div>
                     <div className="pr-[30px]">
                           <button className="bg-yellow font-normal text-[20px] w-[130px] h-[40px] rounded">Let's train</button>
                     </div>
               </div>
      </div>
       <div className="pt-[150px]">
          <div className="grid gap-y-3">
               <div className="bg-yellow pt-[10px] w-[1280px]"></div>
               <div className="bg-yellow pt-[10px] w-[1280px]"></div>
               <div className="bg-yellow pt-[10px] w-[1280px]"></div>
          </div>
          <div className="flex justify-center text-[175px] absolute inset-x-0 top-[145px] font-normal">
               <h1>KARATE</h1>
          </div>
       </div>
       <div className="pt-[150px]">
            <p className="text-[20px] text-center">We empower strength across countries</p>
            <div className="flex justify-center gap-[40px] pt-[30px]">
               <img className="h-[50px] w-[70px] rounded-[10px]" src="ci-1.png"/>
               <img className="h-[50px] w-[70px] rounded-[10px]" src="ci-2.jpg"/>
               <img className="h-[50px] w-[70px] rounded-[10px]" src="ci-3.png"/>
               <img className="h-[50px] w-[70px] rounded-[10px]" src="ci-4.png"/>
               <img className="h-[50px] w-[70px] rounded-[10px]" src="ci-5.png"/>
               <img className="h-[50px] w-[70px] rounded-[10px]" src="ci-6.png"/>
            </div>
       </div>
       <Colors />
       <div className="flex justify-center gap-[5px] pt-[200px]">
          <img className="h-[300px] w-[500px] rounded-[10px]" src="ci-1.png"/>
          <img className="h-[300px] w-[30px] hover:w-[500px] rounded-[10px]" src="ci-3.png"/>
          <img className="h-[300px] w-[30px] hover:w-[500px] rounded-[10px]" src="ci-2.jpg"/>
          <img className="h-[300px] w-[30px] hover:w-[500px] rounded-[10px]" src="ci-4.png"/>
          <img className="h-[300px] w-[30px] hover:w-[500px] rounded-[10px]" src="ci-5.png"/>
          <img className="h-[300px] w-[30px] hover:w-[500px] rounded-[10px]" src="ci-6.png"/>
          <img className="h-[300px] w-[30px] hover:w-[500px] rounded-[10px]" src="book.png"/>
       </div>
      <div> <Body /> </div>
      
      <div> <Buttons /> </div>
      
    </div>
   )
}
export default Karate