import {  createContext, useState } from "react"


export const CartContext = createContext({})

export const  CartProvider = ({children})=>{
  const [cart,setCart] = useState([])

  function handleAddItemtoCart(name,price){
    const items = {name,price};
    setCart([...cart, items]); 
  }

  function handleRemoveItemToCart(clickItem){
    const filterCart = cart.filter(
      (cartItem) => cart.indexOf(cartItem) !==clickItem
    )
    setCart(filterCart)
  }
  function clearItemToCart(){
    setCart([])
  }
return(
  <CartContext.Provider value={{cart,handleAddItemtoCart,handleRemoveItemToCart,clearItemToCart}}>
{children}
  </CartContext.Provider>
)
}