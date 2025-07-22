// import React from 'react'
// import { useState } from 'react';

// function App() {
//   const [name,setName]=useState('')
//   const [list,setList]=useState([]);
//   const [isEditing,setIsEditing]=useState(false);
//   const [editId,setEditId]=useState(null);


//   const editItem =(index)=>{
//     const newEdit = list[index]
//     setIsEditing(true)
//     setEditId(index);
//     setName(newEdit)
//   }

//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     if(!name) return;

//     if(isEditing){
//       setList(prevList=>{
//         const newList= [...prevList];
//         newList[editId]=name;
//         return newList;
//       })

//       setName('');
//       setEditId(null);
//       setIsEditing(false);
//     }
//     else{
//       setList([...list,name]);
//       setName('')
//     }
//   }

//   // const delItem=(indexToRemove)=>{
//   //     setList(prevList => prevList.filter((_,index)=> index!==indexToRemove))
//   // }

//   const delItem=(indexToRemove)=>{
//     const newList=[...list]
//     newList.splice(indexToRemove,1)
//     setList(newList)
//   }

  

//   return (
//     <section className="container">
//       <h3>Gorcery Bud</h3>
//       <form onSubmit={handleSubmit}>
//         <input type="text" 
//         value={name}
//         onChange={(e)=> setName(e.target.value)}/>
//         <button type="submit">submit</button>
//       </form>
//         <div>
//           {list.map((item,index)=>{
//             return (
//               <article key={index}>
//                 <p>{item}</p>
//                 <button onClick={()=>delItem(index)}>del</button>
//                 <button onClick={()=> editItem(index)}>edit</button>
//               </article>
            
            
//             )
//           })}
//         </div>
//     </section>
//   )
// }

// export default App


import React, { useState } from 'react'

function App() {
  const [item,setItem]=useState('')
  const [list,setList]=useState([])
  const [isEditing,setIsEditing]=useState(false);
  const [editIndex,setEditIndex]=useState(null)

  // const removeItem =(indexToRemove)=>{
  //   setList((prevList)=>{
  //     return prevList.filter((_,index)=> index !== indexToRemove)
  //   })
  // }

  const removeItem=(indexToRemove)=>{
      const newList=[...list];
      newList.splice(indexToRemove,1);
      setList(newList) 
  }

  const editItem =(index)=>{
 
    const newEdit= list[index];
    setIsEditing(true);
    setEditIndex(index);
    setItem(newEdit)


  }
  
  const handleSubmit=(e)=>{
  e.preventDefault();
  if(!item) return;
  if(isEditing){
    setList((prevList)=>{
      const newEdit=[...prevList];
      newEdit[editIndex]=item;
      return newEdit;
    });
    setIsEditing(false)
    setEditIndex(null)
    setItem('')

    

  }else{
    setList([...list,item])
    setItem('')
  }
    
  }
  return (

    <section className='container'>
      <form action="forGrocery" 
      onSubmit={handleSubmit}>
        <h2>Grocery Items</h2>
        <input type="text" 
        value={item}
        onChange={(e)=> setItem(e.target.value)}/>
        <button type="submit">submit</button>
      </form>
      
      <div>
        {list.map((items,index)=>{
          return (
            <article key={index} className='items'>
            <p>{items}</p>
            <button onClick={()=> editItem(index)}>Edit</button>
            <button onClick={()=> removeItem(index)}>remove</button>
          </article>
          )
        })}
      </div>

    </section>
  )
}

export default App
