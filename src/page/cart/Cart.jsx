import React, { useContext } from 'react'
import { CartContext } from '../../component/context/CartContext'
import { FaTrashAlt } from "react-icons/fa";
import './cart.css'
import PageTransition from '../../component/PageTransition';
function Cart() {
    const {cartItems , increaseQuantity , lackofQuantity ,removeCart} = useContext(CartContext)

    const total = cartItems.reduce((acc, item)=> acc + item.price *item.quantity ,0)
  return (
   <PageTransition>
     <div className='checkout'>
       <div className="oderSummary">
        <h1>oder Summary</h1>
         <div className="items">
            {cartItems.length === 0 ?(
             <p>Your Cart is empty.</p>
             ):(
             cartItems.map((item,index)=> (
                <div className="item_cart">
                    <div className="image_name">
                        <div className="item_img">
                            <img src={item.images[0]} alt="" />
                        </div>

                        <div className="content">
                            <h4>{item.title}</h4>
                            <p className='price_item'>${item.price}</p>

                            <div className='quantity_control'>
                                <button onClick={()=>lackofQuantity(item.id)}>-</button>
                                <span className='quantity'>{item.quantity}</span>
                                <button onClick={()=>increaseQuantity(item.id)}>+</button>

                            </div>
                        </div>
                            
                    </div>
                        <button onClick={()=>removeCart(item.id)} className="delete_item"><FaTrashAlt /></button>
                </div>
             )) 
            )

            }
        </div>

        <div className="buttom_summary">
            <div className='shop_table'>
                <p>Total :</p>
                <span className='total_check'>${total.toFixed(2)}</span>

            </div>
            <div className="button_div">
                <button type='submit'> Place Order </button>
            </div>
        </div>
       </div>

    </div>
   </PageTransition>
  )
}

export default Cart