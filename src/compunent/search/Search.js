import React from 'react';
import { useContext } from 'react';
import { UserContex } from '../../contex/UesContex';

const Search = ({setCity,getcode}) => {
const submit=(e)=>{
 e.preventDefault();
 const name=e.target[0].value;
 setCity(name);
 e.target.reset();
  }
      const {data,error,isLoading,url}=useContext(UserContex);
      
      
    return (
        <div>
             <div className='bg-[#0000002a] h-[100vh] pt-20 px-4'>
                <div className=' '>
                    <form className=' flex ml-4' onSubmit={submit}>
                        <input className='w-[70%] py-3 px-4 outline-none pla'placeholder='Search any city Name'id='input'></input>
                        <button type='submit' className=' px-8 py-3 bg-[#252829] text-white border'>Search</button>
                    </form>
                </div>
                <div></div>
               </div>
        </div>
    );
};

export default Search;