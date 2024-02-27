import React from 'react';
import { useState } from 'react';

const InputTask = () => {
    const [txt,setTxt]=useState('');
    const handleClick=(event)=>{
        event.preventDefault();

    }
    return (
        <div>
          <form>
        <label> Enter whatever you want</label>
        <input type="text" onChange={(e)=>{setTxt(e.target.value)}}/>
       <input onClick={handleClick} type="submit" />
       <h1>{txt}</h1>
          </form>
        </div>
    );
}

export default InputTask;