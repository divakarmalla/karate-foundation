/* eslint-disable @next/next/no-img-element */
'use client'
import React from "react"
import { PiBookOpenText } from "react-icons/pi";
import { Modal } from 'react-responsive-modal'

import Body from "./body"
import Buttons from "./bbuttons"
import Colors from "./bcolors"

const Karate = () => {
   const [open, setOpen] = React.useState(false);

   const Back = (
      <div className="min-h-fit min-h-screen">
          <div className="flex gap-[10px] p-[30px] justify-end">
                   <div>
                         <button className="bg-yellow w-[40px] h-[40px] rounded justify-center "><PiBookOpenText className="pl-[10px] text-[30px]"/></button>
                   </div>
                   <div>
                         <button className="bg-yellow font-normal text-[20px] w-[130px] h-[40px] rounded">Kiai</button>
                   </div>
           </div>
           <div className="flex items-end flex-col gap-y-[10px] p-[30px]">
              <div className="bg-black h-[220px] w-[350px] p-[15px] rounded">
                  <p className="text-white text-[30px]">Timings</p>
                  <div className="p-[10px] grid gap-y-[10px]">
                      <p className="text-white text-[15px] font-thin">Weekdays  <br />9 AM - 10 PM</p>
                      <p className="text-white text-[15px] font-thin">Weekends <br /> 9 AM - 5PM</p>
                  </div>
              </div>
              <div>
                  <div className="bg-black h-[150px] w-[350px] p-[15px] rounded-t">
                      <p className="text-white text-[30px]">Location</p><br />
                      <p className="text-white text-[15px] font-thin">28710 Wall Street <br /> Wixom, MI 48393</p>
                  </div>
                  <img alt="location" className="h-[200px] w-[350px] rounded-b" src="location.png"/>
              </div>
              <button className="bg-yellow text-[20px] h-[40px] w-[350px] rounded">Pierre Mouele</button>
           </div>

      </div>
  );

  if (open) {
   return (
      <Modal open={open} onClose={() => setOpen(false)}>
            {Back}
      </Modal>
   )
  }

   return(
    <div>
      <div className="flex justify-between p-[30px]">
         <h1 className="text-[40px]">ØKF</h1>
               <div className="flex gap-[10px]">
                     <div>
                           <button className="bg-yellow w-[40px] h-[40px] rounded justify-center "><PiBookOpenText className="pl-[10px] text-[30px]"/></button>
                     </div>
                     <div>
                           <button className="bg-yellow font-normal text-[20px] w-[130px] h-[40px] rounded" onClick={() => setOpen(true)}>Lets train</button>
                     </div>
               </div>
      </div>
       <div className="">
          <div className="grid gap-y-3 pt-[100px]">
               <div className="bg-yellow pt-[10px] w-[1280px]"></div>
               <div className="bg-yellow pt-[10px] w-[1280px]"></div>
               <div className="bg-yellow pt-[10px] w-[1280px]"></div>
          </div>
          <div className="flex justify-center text-[175px] font-normal absolute inset-0 top-[115px]">
               <h1 className="">KARATE</h1>
          </div>
       </div>
       <div className="grid gap-[30px] p-[150px]">
            <p className="text-[20px] text-center">We empower strength across countries</p>
            <div className="flex justify-center gap-[40px]">
               <img alt="belt-color" className="h-[50px] w-[70px] rounded-[10px]" src="ci-1.png"/>
               <img alt="belt-color" className="h-[50px] w-[70px] rounded-[10px]" src="ci-2.jpg"/>
               <img alt="belt-color" className="h-[50px] w-[70px] rounded-[10px]" src="ci-3.png"/>
               <img alt="belt-color" className="h-[50px] w-[70px] rounded-[10px]" src="ci-4.png"/>
               <img alt="belt-color" className="h-[50px] w-[70px] rounded-[10px]" src="ci-5.png"/>
               <img alt="belt-color" className="h-[50px] w-[70px] rounded-[10px]" src="ci-6.png"/>
            </div>
       </div>
       <Colors />
       <div className="flex justify-center gap-[5px] pt-[200px]">
          <img alt="gallery" className="h-[300px] w-[500px] rounded-[10px]" src="ci-1.png"/>
          <img alt="gallery" className="h-[300px] w-[30px] hover:w-[500px] rounded-[10px]" src="ci-3.png"/>
          <img alt="gallery" className="h-[300px] w-[30px] hover:w-[500px] rounded-[10px]" src="ci-2.jpg"/>
          <img alt="gallery" className="h-[300px] w-[30px] hover:w-[500px] rounded-[10px]" src="ci-4.png"/>
          <img alt="gallery" className="h-[300px] w-[30px] hover:w-[500px] rounded-[10px]" src="ci-5.png"/>
          <img alt="gallery" className="h-[300px] w-[30px] hover:w-[500px] rounded-[10px]" src="ci-6.png"/>
          <img alt="gallery" className="h-[300px] w-[30px] hover:w-[500px] rounded-[10px]" src="book.png"/>
       </div>
      <div> <Body /> </div>
      
      <div> <Buttons /> </div>

    </div>
   )
}
export default Karate