import React, { useContext } from 'react';
import { RiArrowDownSLine } from "react-icons/ri";
import { MainContext } from '../Context/Context';


const Header = () => {

    const {navItems} = useContext(MainContext);
    return (
        <div className=' w-screen  h-[100px] py-5 sticky border shadow-lg   '>
         <div className='mx-auto max-w-[1200px]  flex justify-between items-center'>
<div className='flex  items-center gap-5'>
<div>
<img className='h-[50px]' src="/images/logo.png" alt="" /> </div> 
<div className='font-semibold underline'>
Other
</div>

<div className='text-gray-600  flex'>
   <div>
   Jaipur, Rajasthan, India  
   </div>

   <div className=' ps-3 text-[orange] pt-[5px]'>
   <RiArrowDownSLine />
   </div>
</div>
</div>


<div>
<ul className='flex gap-10 '>
{
    navItems.map(
        (d, i)=>{
            return <li className='cursor-pointer flex gap-3 text-xl items-center'>
                {d.name} {d.icon}
            </li>
        }
    )
}
</ul>
</div>
         </div>
        </div>
    );
}

export default Header;
