import { ArrowDownTrayIcon } from "@heroicons/react/16/solid"
import React from "react"
import Image from "next/image"

const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
<div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
<div>
<h1 className="text-[20px] font-bold uppercase text-[#55a6a5] md-[1rem]  ">
    About Me
    </h1>
    <h2 className="text-[25px] md:text-[36px] lg:text-[45px] md:leading-[3rem] leading-[3rem] capitalizemb-[3rem] 
    font-bold  text-white">
     Transforming  
      <span className="text-yellow-400">Vissions</span>
    </h2>
    <div className="mb-[3rem] flex items-center md:space-x-10">
<span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm "></span>

    <p className="text-[19px] text-slate-300 w-[80%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Repellat sunt possimus quaerat nobis,laboriosam 
         tenetur saepe quas nam animi, sequi eaque doloribus!
         </p>

    </div>
    <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[18px] 
 font-bold  uppercase bg-[#55e6a5] text-black flex items-center space-x-2 ">
  <p>Download Cv</p>
  <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black"/>
  
</button>
</div>
<div
 data-aos="fade-left"
className="lg:w-[500px] md:mx-0 mt=[ 2rem] lg:h-[500px] w-[300px] h-[300px] relative">
<Image 
   src="/images/7.jpg" 
   alt="user" 
   layout="fill"
   objectFit="contain"
   className="relative z-[11] w-[100%]  object-contain"/>
   <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]">

   </div>
</div>
</div>
    </div>
  )
}

export default About