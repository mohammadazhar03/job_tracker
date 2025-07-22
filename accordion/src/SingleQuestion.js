import React, { useState } from 'react'
import {FaMinus,FaPlus} from 'react-icons/fa';

function SingleQuestion({title,info}) {
    const [showInfo,setShowInfo]=useState(false)
return (
    <article className="question">
        <header>
            <h4>{title}</h4>
            <button className="btn" onClick={()=> setShowInfo(!showInfo)} > 
                
                {/* true hai to minus nai toh plus */}
                {showInfo ? <FaMinus/> : <FaPlus/> } </button>
        </header>

        {/* main logic for show hide*/}
        { showInfo && <p>{info}</p>} 
    </article>
)
}

export default SingleQuestion
