import React from 'react'

function Categories({category,filterItems}) {
  return (
    <div className="btn-container">
        {category.map((item,index)=>{
           return (
           <button className="filter-btn"
            type='button'
            key={index}
            onClick={()=> filterItems(item)}
            >
            {item}
            </button>
           )
        })}
    </div>
  )
}

export default Categories
