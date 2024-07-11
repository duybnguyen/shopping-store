import { useLocation } from "react-router-dom"
import { getAllItemsFromLocalStorage, deleteItemFromLocalStorage } from "../../storage/storage"
import "./Checkout.scss"


const Checkout = () => {
  const cartItems = getAllItemsFromLocalStorage()

  console.log(cartItems)
  return 
}

export default Checkout