import React, { use, useEffect, useState } from 'react'
import data from './data';
import {FaQuoteRight , FaAngleDoubleLeft ,FaAngleDoubleRight} from 'react-icons/fa';
function App() {
  const [people,setPeople]=useState(data);
  const [index,setIndex]=useState(0);


//   Alternate _ 1
    const nextSlide=()=>{
        setIndex((oldIndex)=>{
            let index=oldIndex+1;
            if(index > people.length-1){
                index=0;
            }
            return index;  
        })
    }
const prevSlide=()=>{
    setIndex((oldIndex)=>{
        let index = oldIndex-1;
        if(index < 0){
            index=people.length-1;
        }
        return index;
    })
}

useEffect(()=>{
   let slider= setInterval(() => {
    setIndex((oldIndex)=>{
        let index=oldIndex+1;
        if(index > people.length-1){
            index=0;
        }
        return index
    })
        
    }, 3000);
    return()=>{
     clearInterval(slider)
    } 
},[index])


// Alternate _ 2
const nxtSlide = () => {
    setIndex((oldIndex) => {
      const result = (oldIndex + 1) % people.length;
      return result;
    });
  };
  const prvSlide = () => {
    setIndex((oldIndex) => {
      const result = (oldIndex - 1 + people.length) % people.length;
      return result;
    });
  };
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        const result = (oldIndex + 1) % people.length;
        return result;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);



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
      let position = 'nextSlide';
      if(personIndex===index){
        position='activeSlide'
      }if(personIndex === index-1 || (index===0 && personIndex === people.length-1)){
        position='lastSlide'
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
      <button onClick={prvSlide} className='prevImage'><FaAngleDoubleLeft/></button>
      <button onClick={nxtSlide} className=' nextImage'><FaAngleDoubleRight/></button>
      </div>
    </section>
  )
}

export default App
