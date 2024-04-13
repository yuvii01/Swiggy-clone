import React, { useContext, useEffect, useRef, useState } from 'react';
import { MainContext } from './Context/Context';
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const MenuItems = () => {
    const {category } = useContext(MainContext);
const [num, setNum] = useState(1);

// var right = useRef();
    // const MoveSlider = ()=>{
        
    // }
//    useEffect(
//     ()=>{
//       if(num>0  && num < (category.length)-7){

//       }
//     },[num]
//    )

   useEffect(
    ()=>{
setNum(0)

    },[]
   )
const prev = (e)=>{
    if(num >= (category.length)-7){
        e.target.style.color = "gray"
        return 
    }
    e.target.style.color = "black"
    setNum(num +3)
}
const increase = (e)=>{
   if(num <= 0){
    e.target.style.color = "gray"
    return
   }
   e.target.style.color = "black"
    setNum(num -3)
}
    return (
        <div className='mx-auto max-w-[1200px] overflow-hidden my-[40px] border-b-2 pb-[50px]'>
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
    category.map(
        (data)=>{
            
return <div style={{transform : `translateX(${-num *100}%)`}} className={` cursor-pointer   duration-500 h-[190px] w-[150px] rounded-full grow-1 shrink-0`}>
    <img src={`/images/${data.image}`} className='hover:scale-110 duration-200 h-full w-full' alt="" />
</div>
        }
    )
}
            </div>
        </div>
    );
}

export default MenuItems;
