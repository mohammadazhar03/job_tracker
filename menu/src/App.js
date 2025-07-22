import React, { useState } from 'react'
import items from './data.js';
import Menu from './Menu.js'
import Categories from './Categories.js'

const allcategories = ['all' , ...new Set(items.map((item)=> item.category))]
console.log(allcategories)
function App() {
   const [menuItem,setMenuItem]=useState(items);
   const [categories,setCategories]=useState(allcategories);

  const filterItems=(category)=>{
    if(category == 'all'){
      return setMenuItem(items)
    }

    const newItem = items.filter((item)=> item.category === category )
    return setMenuItem(newItem);
  }
   return (
    <main>

      <section className="menu section">
          <div className="title">
            <h2>Our menu</h2>
            <div className="underline"></div>
          </div>

          <Categories category={categories} filterItems={filterItems}/>
          <Menu items={menuItem}/>
      </section>
    </main>
   )
}

export default App
