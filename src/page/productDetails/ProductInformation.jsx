import React, { useContext } from 'react'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import { FaRegStarHalfStroke } from 'react-icons/fa6'
import { TiShoppingCart } from 'react-icons/ti'
import { CartContext } from '../../component/context/CartContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function ProductInformation({product}) {
    const {cartItems ,addToCart ,favorites ,addFav,removeFav}=useContext(CartContext)
    const isInCart = cartItems.some(i => i.id === product.id);
     const navigate = useNavigate()

     const handelToCart = ()=>{
    addToCart(product)
    toast.success(
      <div className='toast_wrapper'>
        <img src={product.images[0]} alt="" className='toast_img' />
        <div className='toast_content'>
          <strong>{product.title} </strong><br />
          added To Cart
          <div className="btn" onClick={()=>navigate('/cart')}>View Cart</div>
        </div>

      </div>
      ,{duration : 3500}
    )

  }

    // Favorites 
  const isInFav = favorites.some(i=> i.id === product.id)
  const handelToFav =() =>{
    if(isInFav){
      removeFav(product.id)
      toast.error(`${product.title} remove from favorites`)
    }else{
      addFav(product)
    toast.success(`${product.title} add To favorites`)
    }
    
  }

    return (
        
        <div className="information">
            <h2 className='name'>{product.title}</h2>
            <div className='stars'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
            </div>
            <h2 className='price'>${product.price}</h2>
            <h5>availabilityStatus: <span>{product.availabilityStatus}</span></h5>
            <h5>brand: <span>{product.brand}</span></h5>

            <p className='desc'>description: {product.description}</p>
            <button className={`btn ${isInCart ? 'in-cart' :''}`}  onClick={handelToCart}>
                {isInCart ? "Item In Card:" : "Add To Card:"} <TiShoppingCart />
            </button>
            <div className='icons'>
                <span className={`${isInFav ? "in-fav" : ""}`} onClick={handelToFav}><FaRegHeart /></span>
            </div>
        </div>
    )
}

export default ProductInformation