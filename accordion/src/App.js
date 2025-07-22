import React, { useState } from 'react'
import data from './data';
import SingleQuestion from './SingleQuestion';
function App() {
const [questions,setQusetions]=useState(data);


  return (
     <main>
        <div className="container">
          <h3>Question and Answers about login</h3>
      <section className='info'>
      {data.map((question)=>{
        return <SingleQuestion key={question.id} {...question}/>
      })}  
      </section>
      </div>
    </main>
  )
}

export default App
