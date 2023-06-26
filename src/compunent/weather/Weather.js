import React from 'react';
import { UserContex } from '../../contex/UesContex';
import { useQuery } from 'react-query';
import Cityweather from '../cityWeather/Cityweather';
import Search from '../search/Search';
import { useState } from 'react';


const Weather = () => {
    const [city,setCity]=useState('dhaka');
const url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=32ba0bfed592484379e51106cef3f204`
  const getcode=async()=>{
const res=await fetch(url)
    const data=await res.json();
    return data
}
const {data,error,isLoading}=useQuery(['city-api',city],()=>getcode())

    return (
        <UserContex.Provider value={{data,error,isLoading}}>
            <div className=' h-[100vh] flex bg'>
                <div className='w-[80%] px-10 pt-28'>
             <Cityweather></Cityweather>
                </div>
                <div className='[w-30%]'>
                    <Search setCity={setCity} getcode={getcode}></Search>
                </div>
        
           </div>
            </UserContex.Provider>
    );
};

export default Weather;