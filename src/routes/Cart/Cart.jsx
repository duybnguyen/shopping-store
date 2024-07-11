import "./Cart.scss"
import { useLocation } from "react-router-dom"


const Cart = () => {
  const location = useLocation()
  const cart = location.state?.cart || {}
  
  console.log(cart)

  return
}

export default Cart