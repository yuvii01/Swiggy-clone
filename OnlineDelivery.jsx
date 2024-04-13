import React, { useContext } from 'react';
import Card from './Components/Card';
import { MainContext } from './Context/Context';

const OnlineDelivery = () => {
    const {TopRestChain} = useContext(MainContext);
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='text-3xl font-bold  mb-[20px]'>
               Restaurants with online food delivery in Jaipur 
            </div>

            <div>
<button>Filter</button>
            </div>
            <div className='flex flex-wrap gap-5 my-[50px] '>
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

export default OnlineDelivery;
