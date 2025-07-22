import React, { useEffect, useState } from 'react'
import rgbToHex from './utile';
function SingleColor({index,weight,rgb}) {
    const [alert , setAlert]=useState(false)
    const bcg=rgb.join(',')
    const hex = rgbToHex(...rgb)
    const hexValue=`#${hex}`

    useEffect(()=>{
     const timeout=  setTimeout(() => {
        setAlert(false);
      }, 3000);
      return ()=> clearTimeout(timeout)
    },[alert])
    // to clear clipboard after certain timeperiod
    


  return (
    <article className={`color ${index > 10 && 'color-light'}`} 
    style={{backgroundColor: `rgb(${bcg})`}}
    
    onClick={()=>{
        setAlert(true);
        // to copy text from any form
        navigator.clipboard.writeText(hexValue)
    }}
    >
       <p className='percent-value'>{weight}%</p>
       <p className='color-value'>{hexValue}</p>
       {alert && <p className="alert" s>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor;




