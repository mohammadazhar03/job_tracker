import React, { useEffect, useState } from 'react'
import people from './data';
import {FaQuoteRight,FaChevronCircleRight,FaChevronCircleLeft} from "react-icons/fa";

function Review() {
  const [index,setIndex]=useState(0);
  const {id,name,job,image,text}=people[index];
  console.log(people)
  
// checking number weather greater than one or less than one
  const checkNumber =(number)=>{
    if(number > people.length-1){
      return 0;
    }
    if(number < 0){
      return people.length-1;
    }
    return number;
  }
  // for preperson scroll 
  const prePerson =()=>{
    setIndex((index)=>{
      let newIndex = index-1;
      return checkNumber(newIndex)
    })
  }
  // for nextPreson Scroll
  const nextPerson =()=>{
    setIndex((index)=>{
      let newIndex= index+1;
      return checkNumber(newIndex)
    })
  }

  const randomPerson=()=>{
    let randomNumber= Math.floor(Math.random() * people.length);

    if(randomNumber === index){

      randomNumber = index+1;
    }
    setIndex(checkNumber(randomNumber))
  }

  return (
  <article className='review'>
    <div className="img-container">
    <img className="person-img" src={image} alt={name} />
    <span className="quote-icon">
      <FaQuoteRight/>
    </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div>
      <button className="prev-btn" onClick={prePerson}><FaChevronCircleLeft/></button>
      <button className="next-btn" onClick={nextPerson}><FaChevronCircleRight/></button>
    </div>
      <button className='random-btn' onClick={randomPerson}>surprise me</button>
  </article>

  )
}

export default Review
