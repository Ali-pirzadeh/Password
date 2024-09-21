import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import "./page.css"


export const Page = () => {
    const[type , setType] = useState("password")
    const[icon , setIcon] = useState(FaRegEyeSlash)



    const seeHandeler = () =>{
        if(type === 'password'){
            setType("text")
            setIcon(FaRegEye)
        }else{
            setType("password")
            setIcon(FaRegEyeSlash)
        }
    }

  return (
<>
    <div className='wraper'>
        <div className='input-fields'>
            <input  type={type} placeholder='password' />
            <h3 onClick={seeHandeler}>{icon}</h3>
        </div>
    </div>
</>  
)
}
