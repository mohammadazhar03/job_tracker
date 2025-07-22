import React from 'react'

function Menu({items}) {
    
    return <section className="section-center">
        
    {items.map((menuItem)=>{
        const {id,img,title,desc,price} = menuItem;
        return <article key={menuItem.id} className='menu-item'>
            <img className='photo' src={img} alt={img} />
            <div>
                <header className="item-info">
                    <h4>{title}</h4>
                    <h4 className='price'>${price}</h4>
                </header>
                <p className='item-text'>{desc}</p>
            </div>
        </article>
    })}
  </section>
}

export default Menu

