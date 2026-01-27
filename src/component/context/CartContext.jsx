import React, { createContext, useEffect, useState } from 'react'
export const CartContext = createContext();

export default function CartProvider({children}) {
  // Favorites
  const[favorites ,setFavorites]=useState(()=> {
      const savedFav = localStorage.getItem('favoritesItems')
      return savedFav ? JSON.parse(savedFav) : []
    })

    const addFav = (item) =>{
      setFavorites((prev)=>{
        if(prev.some((i)=> i.id === item.id)) return prev;
        return [...prev ,item]
      })
    }

    useEffect(()=>{
      localStorage.setItem('favoritesItems',JSON.stringify(favorites))
    },[favorites])

    const removeFav = (id)=>{
      setFavorites((prev)=>prev.filter((i)=> i.id !== id))
    }








  // cart
    const[cartItems ,setCartItems]=useState(()=> {
      const savedCart = localStorage.getItem('cartItems')
      return savedCart ? JSON.parse(savedCart) : []
    })
    //increaseQuantity
    const increaseQuantity = (id)=>{
      setCartItems(prevItems =>prevItems.map(item =>item.id ===id ?
        {...item , quantity : item.quantity + 1} : item

      ))

    }

    //lackofQuantity

    const lackofQuantity = (id) =>{
      setCartItems(prevItems => prevItems.map(item =>item.id ===id && item.quantity >1?
        {...item , quantity :item.quantity -1 } : item
      )) 
    }

    //removeCart
    const removeCart = (id) =>{
      setCartItems(prevItems => prevItems.filter(item =>item.id !==id))
    }

    //addToCart

    const addToCart =(item)=>{
        setCartItems((prevItems)=>[...prevItems, {...item, quantity: 1}])
    }
    
    useEffect(()=>{
      localStorage.setItem('cartItems' ,JSON.stringify(cartItems))
    })

  return (
    <CartContext.Provider value={{cartItems, addToCart , increaseQuantity , lackofQuantity ,removeCart,addFav,favorites,removeFav}}>
        {children}
    </CartContext.Provider>
  )
}

