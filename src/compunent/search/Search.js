import React from 'react';
import { useContext } from 'react';
import { UserContex } from '../../contex/UesContex';

const Search = ({setCity,getcode}) => {
       const submit=(e)=>{
 e.preventDefault();

 const name=e.target[0].value;
 setCity(name);
 getcode()
 e.target.reset();



  }
      const {data,error,isLoading,url}=useContext(UserContex);
      
      
    return (
        <div>
             <div className='bg-pink-400 h-[100vh] '>
                <div className=' '>
                    <form className=' flex ml-4' onSubmit={submit}>
                        <input className='w-[70%] py-3 px-4 outline-none pla'placeholder='Search any city Name'id='input'></input>
                        <button type='submit' className=' px-8 py-3 bg-blue-400'>Search</button>
                    </form>
                </div>
                <div></div>
               </div>
        </div>
    );
};

export default Search;