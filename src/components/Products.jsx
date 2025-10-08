import { useContext } from 'react'
import './Products.css'
import { cartContext } from '../App'



export const Products = ({ product }) => {

    const {cart, setCart} = useContext(cartContext)
    const name = product.name.length>16 ? product.name.substring(0, 15) + ".." : product.name

    const addToCart = () => {
       setCart([...cart, product])
    }

    const removeCart = () => {
        setCart(cart.filter((c)=>c.id !== product.id))
    }
  return (
    <div className="products">
      <div className="img">
        <img src={product.pic} alt={product.pic} />
      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <p>₹{product.amt}</p>
        {cart.includes(product) ?
         (<button className="remove-btn" onClick={removeCart}>Remonve From Cart</button>) : 
         (<button onClick={addToCart}>Add To Cart</button>)}
      </div>
    </div>
  )
}

