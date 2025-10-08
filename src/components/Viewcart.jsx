import './Viewcart.css'
import { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import emptyCart from '../assets/emptycart.png'
import { cartContext } from '../App'


export const Viewcart = () => {

  const {cart, setCart} = useContext(cartContext)
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0)) 
  }, [cart])
  
  const handleRemoveCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  }

  return (
    <>
      <div className="cart-container">
        <h1>My Cart</h1>
        {cart.map((product)=>(
          <>
          <div className="cart-items" key={product.id}>
          <div className="img">
            <img src={product.pic} alt="image" />
          </div>
          <div className="cart-details">
            <h3>{product.name}</h3>
            <p>₹{product.amt}</p>
            <button className="cart-remove-btn" onClick={()=>handleRemoveCart(product.id)}>Remove</button>
          </div>
          </div>
          </>
        ))}
          {cart.length > 0 ? (<h2>Total Price ₹{total}</h2>) : (
            <div className="empty-cart-container">
            <img src={emptyCart} className="empty-cart" />
            <h2 className="empty-msg">Your Cart is empty</h2>
             <Link to={"/"}><button className="go-home-btn">Shop Now</button></Link> 
            </div>
          )}
        </div>
    </>
  )
}
