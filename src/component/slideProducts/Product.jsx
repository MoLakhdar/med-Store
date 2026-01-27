import React, { useContext } from 'react'
import { FaStar,FaRegStarHalfStroke  } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { FaShare } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import  {CartContext}  from '../context/CartContext';
import { FaCheck } from "react-icons/fa";
import toast from 'react-hot-toast';

function Product({item}) {
  
  const navigate = useNavigate()
  const {cartItems,addToCart , favorites ,addFav,removeFav}=useContext(CartContext)

  const isInCart = cartItems.some(i => i.id === item.id);
  const handelToCart = ()=>{
    addToCart(item)
    toast.success(
      <div className='toast_wrapper'>
        <img src={item.images[0]} alt="" className='toast_img' />
        <div className='toast_content'>
          <strong>{item.title} </strong><br />
          added To Cart
          <div className="btn" onClick={()=>navigate('/cart')}>View Cart</div>
        </div>

      </div>
      ,{duration : 3500}
    )

  }
  
  // Favorites 
  const isInFav = favorites.some(i=> i.id === item.id)
  const handelToFav =() =>{
    if(isInFav){
      removeFav(item.id)
      toast.error(`${item.title} remove from favorites`)
    }else{
      addFav(item)
    toast.success(`${item.title} add To favorites`)
    }
    
  }

  
  return (
    <div className={`product ${isInCart ? 'in-cart' :''} `}>
      <Link to={`/products/${item.id}`}>
      <span className='status_cart'><FaCheck />in Cart</span>
      <div className='img_product'>
        <img src={item.images[0]} />
      </div>
      <p className='name_product'>{item.title}</p>
      <div className='stars'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
      </div>

      <p className='price'><span>${item.price}</span></p>
      </Link>

      <div className="icons">
        <span className='btn_addto_cart' onClick={handelToCart}><TiShoppingCart /></span>
        <span className={`${isInFav ? "in-fav" : ""}`} onClick={handelToFav}><FaRegHeart /></span>
        <span><FaShare /></span> 
      </div>

    </div>

  )
}

export default Product