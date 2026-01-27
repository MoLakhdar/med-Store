
import { Link } from 'react-router-dom'
import Med from '../../img/med_store.png'
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import './header.css'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import SearchBox from './SearchBox';



export default function () {
  const { cartItems ,favorites} = useContext(CartContext)
  return (
    <div className='top_header'>
      <div className="container">
        <Link className='logo' to="/"><img src={Med} alt="logo" /></Link>

       <SearchBox />

        <div className="header_icons">
          <div className="icon">
           <Link to="/favorites"> <FaRegHeart />
            <span className='count'>{favorites.length}</span>
            </Link>
          </div>
          <div className="icon">
           <Link to="/cart">
             <TiShoppingCart />
            <span className='count'>{cartItems.length}</span>
           </Link>
          </div>
        </div>
      </div>


    </div>
  )
}
