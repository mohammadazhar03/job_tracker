import React, { use, useEffect, useState } from 'react'
import data from './data';
import {FaQuoteRight , FaAngleDoubleLeft ,FaAngleDoubleRight} from 'react-icons/fa';
function App() {
  const [people,setPeople]=useState(data);
  const [index,setIndex]=useState(0);

  //  agar index last hai toh first Index show hota agar first index hai to last index show hota
  useEffect(()=>{
    const oldIndex = people.length-1;
    if(index<0){
      setIndex(oldIndex);
    }
    if(index> oldIndex){
      setIndex(0);
    }
  },[index],[people])

  // Time Interval set kare apan ek ek slide ku aur return clearInterval karre kyu k 1 baar button dabate ki 3 baar slide ni hona bolke
  useEffect(()=>{
let slider = setInterval(() => {
  setIndex(index+1)
}, 3000);
return ()=> {
  clearInterval(slider);
}
  },[index])


  // main return function
  return(
    <section className='section'>
      <div className='title'>
        <h2><span>/</span>Reviews</h2>
      </div>
    <div className='section-center'>
      {people.map((data,personIndex)=>{
        const {id,image,name,title,quote}=data;


        // slides
      let position = "nextSlide";
      if(personIndex === index){
        position="activeSlide";
      }
      if(personIndex === index -1 || (index === 0 && personIndex === people.length -1)){
        position="lastSlide"
      }



       return( 
        <article className={position} key={id}>
          <img className='person-img' src={image} alt={image} />
          <h3 >{name}</h3>
          <p className='title' >{title}</p>
          <p className='text'>{quote}</p>
          <FaQuoteRight className='icon'/>
          </article>
       )
      })}
      <button onClick={()=> setIndex(index-1)} className='prevImage'><FaAngleDoubleLeft/></button>
      <button onClick={()=> setIndex(index+1)} className=' nextImage'><FaAngleDoubleRight/></button>
      </div>
    </section>
  )
}

export default App
