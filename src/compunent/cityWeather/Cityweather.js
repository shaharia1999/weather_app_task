import React from 'react';
import img from "../../image/lightning-bolts.jpg"
import { useContext } from 'react';
import { UserContex } from '../../contex/UesContex';
import dateDay from '../../Day';
import '../../App.css'

const Cityweather = () => {
    const {data,error,isLoading}=useContext(UserContex);
     const city=data?.city.name;
     const days=data?.list.slice(0,5)
    const celcious=Math.round(days?.[0].main.temp-273.15)
    const weather=(data?.list[0].weather[0].main)
    

    const date=dateDay;
   
    
   
   

    return (
        <div className=' text-white '>
            {isLoading?<p>loading</p>:<></>}
             <div className='
                bg-[{img}]  flex    w-[100%] justify-center items-center'>
                <div className='flex     w-[100%] justify-center items-center'>{
                    isLoading?<h1 className='text-7xl font-bold mr-6'>00 &#8451;</h1>:<h1 className='text-7xl font-bold mr-6'>{celcious} &#8451;</h1>
                }
                    {/* <h1 className='text-7xl font-bold mr-6'>{celcious}</h1> */}
                    {
                        isLoading?<h2 className='text-4xl font-semibold mr-3'>City</h2>:
                             <h2 className='text-4xl font-semibold mr-3'>{city}</h2>
                    }
                    {/* <h2 className='text-4xl font-semibold mr-3'>{city}</h2> */}
                    {
                        isLoading? <h6 className='text-1xl'>Weather</h6>: <h6 className='text-1xl'>{weather}</h6>
                    }
                   
                </div>
             </div>
             <div className=' w-[100%] grid grid-cols-5  h-[300px] gap-2 pt-16'>
                {
                  days?.map((data)=><div className='bg-[#0000002a] px-4 py-3'>
                    <p className='text-center text-[26px] font-semibold'>{Math.round(data.main.temp-273.15)}&#8451;</p>
                    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}></img>
                    <p className='text-center text-[22px]'>{data.weather[0].main}</p>
                    <div className='flex justify-between mt-8'>
                        <p>{Math.round(data.main.temp_min-273.15)}&#8451;</p>
                     <p>{Math.round(data.main.temp_max-273.15)}&#8451;</p>
                    
                    </div>
                    
                     
                    </div>)  
                }
              {date.map((bar)=><p className='bg-[#0000002a] px-2 py-1'>{bar.toString()}</p>)}
                {/* <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div> */}

             </div>
        </div>
    );
};

export default Cityweather;