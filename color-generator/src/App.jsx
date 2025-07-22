import { useState } from 'react'
import values from 'values.js';
import SingleColor from './SingleColor';
function App() {
const [list,setList]=useState(new values('#f15025').all(10));
const [color,setColor]=useState('')
const [error,setError]=useState(false);

const handleSubmit=(e)=>{
e.preventDefault();
try{
const colors = new values(color).all(10);
setList(colors)
}catch{
setError(true)
alert('not Available')
}

}

  return (
    <>
    <section className='container'>
      <h3>color generator</h3>
      <form onSubmit={handleSubmit} >
      <input type="text" 
      value={color} 
      placeholder='#f15025'
      className={`${error ? 'error' : null}`}
      onChange={(e)=> setColor(e.target.value) }
      />
      <button className='btn' type='submit'>Submit</button>
    </form>

      </section>
    <section className='colors'>
    {list.map((color,index)=>{
      return <SingleColor 
      key={index}
      index={index}
      {...color}
      />
    })}
    
    </section>
    </>
  )
}

export default App;