'use client'
import React from "react"

const Colors = () => {

    return(
        <div>
           <div className="flex snap-x snap-mandatory gap-y-[1000px] overflow-x-scroll">
                <div className="text-[40px]"><p>Start pure <br /> & Conquer</p></div>
                <div className="gap-7 flex ">
                    <div style={{backgroundImage:"radial-gradient(yellow,yellow,white,white)", height:"350px",width:"700px",borderRadius:"50%",}}></div>
                    <div style={{backgroundImage:"radial-gradient(orange,orange,white,white)", height:"350px",width:"700px",borderRadius:"50%",}}></div>
                    <div style={{backgroundImage:"radial-gradient(green,green,white,white)", height:"350px",width:"700px",borderRadius:"50%",}}></div>
                    <div style={{backgroundImage:"radial-gradient(blue,blue,white,white)", height:"350px",width:"700px",borderRadius:"50%",}}></div>
                    <div style={{backgroundImage:"radial-gradient(purple,purple,white,white)", height:"350px",width:"700px",borderRadius:"50%",}}></div>
                    <div style={{backgroundImage:"radial-gradient(red,red,white,white)", height:"350px",width:"700px",borderRadius:"50%",}}></div>
                    <div style={{backgroundImage:"radial-gradient(brown,brown,white,white)", height:"350px",width:"700px",borderRadius:"50%",}}></div>
                    <div style={{backgroundImage:"radial-gradient(brown,brown,white,white)", height:"350px",width:"700px",borderRadius:"50%",}}></div>
                    <div style={{backgroundImage:"radial-gradient(black,black,white,white)", height:"350px",width:"700px",borderRadius:"50%",}}></div>
                </div>
           </div>
        </div>
    )
}
export default Colors