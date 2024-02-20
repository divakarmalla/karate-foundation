'use client'
import React from "react"

const Country = () => {
    return(
        <div className="grid gap-[70px] p-[150px]">
            <div className="flex justify-center gap-[40px]">
               <img className="h-[50px] w-[70px] rounded-[10px]" src="ci-1.png"/>
               <img className="h-[50px] w-[70px] rounded-[10px]" src="ci-2.jpg"/>
               <img className="h-[50px] w-[70px] rounded-[10px]" src="ci-3.png"/>
               <img className="h-[50px] w-[70px] rounded-[10px]" src="ci-4.png"/>
               <img className="h-[50px] w-[70px] rounded-[10px]" src="ci-5.png"/>
               <img className="h-[50px] w-[70px] rounded-[10px]" src="ci-6.png"/>
            </div>
            <div className="flex justify-center gap-[20px]">
                <div className="grid gap-y-[15px]">
                    <div className="bg-black h-[340px] w-[400px] p-[15px] rounded">
                        <p className="text-white text-[30px]">Locations</p>
                            <div className="p-[10px] grid gap-y-[10px]">
                                <p className="text-white text-[15px] font-thin">201 Hawthorn<br />Melnourne</p>
                                <p className="text-white text-[15px] font-thin">Opera House<br />Sydney</p>
                                <p className="text-white text-[15px] font-thin">Gabba <br />Adelaide</p>
                            </div>
                    </div>
                    <button className="bg-yellow text-[20px] h-[40px] w-[400px] rounded">Australia</button>
                </div>
                <div>
                    <div className="bg-black h-[150px] w-[400px] p-[15px] rounded-t">
                        <p className="text-white text-[30px]">Chris</p><br />
                        <p className="text-white text-[15px] font-thin">+61 000<br />chris@email.com</p>
                    </div>
                    <img className="h-[250px] w-[400px] rounded-b" src="karateboy.png"/>
                </div>
            </div>
        </div>
    )
}
export default Country