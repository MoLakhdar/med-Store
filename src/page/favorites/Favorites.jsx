import React, { useContext } from 'react'
import { CartContext } from '../../component/context/CartContext'
import Product from '../../component/slideProducts/Product'

function Favorites() {
  
  const {favorites} = useContext(CartContext)
  console.log(favorites)
  return (
    <div className="category_Favorites">
      <div className="container">
        <div className="top_slide">
          <h2>Your Favorites</h2>
        </div>
        {favorites.length === 0 ? (
          <p>No Favorites Product yet. </p>
        ) :(
          <div className="products">
            {favorites.map((item) => (
              <Product item={item} key={item.id}/>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Favorites