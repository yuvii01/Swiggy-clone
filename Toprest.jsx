import React, { useContext, useEffect, useRef, useState } from 'react';
import { MainContext } from './Context/Context';
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import Card from './Components/Card';


const Toprest = () => {
    const {TopRestChain, num1, setNum1} = useContext(MainContext);
   
    const prev = (e)=>{
       
        if(num1 >= (TopRestChain.length)-3){
            e.target.style.color = "gray"
            return 
        }
        e.target.style.color = "black"
        setNum1(num1 +4)
       
    }
    const increase = (e)=>{
       if(num1 <= 0){
        e.target.style.color = "gray"
        return
       }
       e.target.style.color = "black"
        setNum1(num1 -4)
    }




 
    return (
        <div className='mx-auto max-w-[1200px] overflow-hidden my-[40px] border-b-2 pb-[50px]   '>
            <div className='flex justify-between items-center px-[30px]'>
               <div className='text-3xl font-bold  my-[20px]'>
               What's on your Mind?
               </div>
               <div className='flex gap-5 text-3xl pe-[35px]'>
               <FaCircleArrowLeft onClick={increase} />
             
               <FaCircleArrowRight  onClick={prev} />
               </div>
            </div>

            <div className='flex gap-5 grow-1 shrink-0'>

{
    TopRestChain.map(
        (d)=>{
            
return <Card {...d}/>
        }
    )
}
            </div>
        </div>
    );
}

export default Toprest;
