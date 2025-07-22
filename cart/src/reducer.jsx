import React from 'react'

const reducer =(state,action)=>{

    // for clearing the cart
    if(action.type === 'CLEAR_CART'){
        return ({...state,cart:[]})
    }
    // for removing the item
    if(action.type === 'REMOVE_ITEM'){
        return(
        {
            ...state,
            cart: state.cart.filter((cartItems)=> cartItems.id !== action.payload)
        }
    )
    }
    // for increasing amount 
    // if(action.type==='INCREASE'){
    //     const tempCart = state.cart.map((items)=>{
    //         if(items.id === action.payload){
    //             return {...items, amount: items.amount+1}
    //         }
    //         return items;
    //     })
    //     return {...state,cart:tempCart}
    // }
// for decreasing the amount
    // if(action.type==='DECREASE'){
    //     const tempCart = state.cart.map((items)=>{
    //        if(items.id === action.payload){
    //         return({
    //             ...items,
    //             amount : items.amount - 1
    //         })
    //        }
    //        return items;  
    //     }).filter((cartItems)=> cartItems.amount !==0)
    //     return ({...state,cart: tempCart})
    // }


    // Alternate: bundle of increase and Decrease

    if(action.type === 'TOGGLE_AMOUNT'){
        let tempCart = state.cart.map((cartItem)=>{
            if(cartItem.id === action.payload.id){
            if(action.payload.type === 'inc'){
                return {...cartItem,amount: cartItem.amount+1}
                }
            if(action.payload.type === 'dec'){
                return {...cartItem,amount: cartItem.amount -1}
            }
            }
            return cartItem;
        }).filter((cartItems)=> cartItems.amount !== 0)
        return {...state,cart:tempCart}
    }


// for getting the total amount and price 
    if(action.type==='GET_TOTAL'){
        let {total,amount}= state.cart.reduce((cartTotal,cartItem)=>{
            const {price,amount} = cartItem

            const totalItems=price*amount

            cartTotal.amount += amount;
            cartTotal.total += totalItems;
            return cartTotal
        },{
            amount:0,
            total:0,
        })
        total=parseFloat(total.toFixed(2));
        return {...state,total,amount}
    }
    if(action.type==='LOADING'){
        return {...state,loading:true}
    }
    if(action.type === 'DISPLAY_ITEM'){
        return {...state,cart:action.payload,loading:false}
    }
    return state;
}

export default reducer
