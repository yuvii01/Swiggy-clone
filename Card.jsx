import React, { useContext } from 'react';
import { FcRating } from "react-icons/fc";
import { MainContext } from '../Context/Context';

const Card = (props) => {
    const {num1} = useContext(MainContext);
    return (
        <div style={{transform : `translateX(${-num1 *100}%)`}}  className={ ` cursor-pointer overflow-hidden  duration-1000 rounded-lg grow-1 h-auto shrink-0`}>
   <div className='relative '>
   <img src={`/images/${props.image}`} className=' relative h-[160px] w-[270px]  hover:scale-110 duration-200 ' alt="" />
  
   <div className='absolute font-bold text-white text-2xl z-[9999] bottom-2 left-2  '>
    {props.offer}
</div>

<div className='absolute h-full w-full top-0 ovarlay'>

</div>
   </div>
  <div>

     
   <div className='text-black font-semibold text-lg mt-3   '>
{props.title}
</div>

<div className='flex gap-4 font-semibold'>
<div className='flex items-center gap-2'>
<FcRating /> {props.rating} 
</div>
<div>
    {props.minTime}-{props.maxTime} mins
</div>
</div>

<div>
    {props.name}
</div>

<div>
    {props.place}
</div>
  </div>
</div>
    );
}

export default Card;
