import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import cartItems from './data'
import reducer from "./reducer";
const AppContext = React.createContext();
const url = '/api/react-useReducer-cart-project'
const initalState ={
    cart : cartItems,
    loading: false,
    amount: 0,
    total:0,
}
const AppProvider = ({children})=>{

const [state,dispatch]=useReducer(reducer,initalState)

const clearCart =()=>{
    dispatch({type: 'CLEAR_CART'})
}
const removeItem=(id)=>{
    dispatch({type: 'REMOVE_ITEM' , payload: id})
}
// const increaseItem=(id)=>{
//     dispatch({type:'INCREASE', payload:id})
// }
// const decreaseItem=(id)=>{
//     dispatch({type:'DECREASE',payload:id})
// }
const toggleAmount=(id,type)=>{
dispatch({type:'TOGGLE_AMOUNT', payload:{id,type}})
}
const fetchData = async () =>{
    dispatch({type:'LOADING'})
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({type:'DISPLAY_ITEM', payload: cart})
}
useEffect(()=>{
    fetchData();
},[])
useEffect(()=>{
    dispatch({type:'GET_TOTAL'})
},[state.cart])

   return (
   <AppContext.Provider value={{
    ...state,
    clearCart,
    removeItem,
    // increaseItem,
    // decreaseItem,
    toggleAmount,
   }}>
        {children}
    </AppContext.Provider>
   )
}


export const useGlobalContext = ()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider};