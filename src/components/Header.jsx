import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import cartlogo from '../assets/cartlogo.png'
import './Header.css'
import { useContext } from "react"
import { cartContext } from "../App";

export const Header = () => {
   
  const {cart} = useContext(cartContext)

  return (
    <>
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}><img src={cartlogo} /></Link>
      </div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Cart"}><FaShoppingCart className="cart-logo" />{cart.length > 0 ? cart.length : ""}</Link>
        </li>
      </ul>
    </div>
    </>
  )
}
