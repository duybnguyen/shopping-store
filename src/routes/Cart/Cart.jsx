import "./Cart.scss";
import {
  getAllItemsFromLocalStorage,
  deleteItemFromLocalStorage,
  updateItemInLocalStorage,
} from "../../storage/storage";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import plusIcon from "../../assets/plus.png";
import minusIcon from "../../assets/minus.png";
import trashIcon from "../../assets/trash.png";
import { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getAllItemsFromLocalStorage());
  }, []);

  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce(
      (prev, current) => prev + current.price * current.count,
      0
    );
  };

  const navigateToItem = (id, item) => {
    navigate(`/products/${id}`, { state: { item } });
  };

  const deleteItemFromCart = (e, id) => {
    e.stopPropagation();
    deleteItemFromLocalStorage(id);
    setCartItems(getAllItemsFromLocalStorage());
  };

  const handleIncrement = (e, item) => {
    e.stopPropagation();
    const updatedItem = { ...item, count: item.count + 1 };
    updateItemInLocalStorage(updatedItem.id, updatedItem);
    setCartItems(getAllItemsFromLocalStorage());
  };

  const handleDecrement = (e, item) => {
    e.stopPropagation();
    if (item.count > 1) {
      const updatedItem = { ...item, count: item.count - 1 };
      updateItemInLocalStorage(updatedItem.id, updatedItem);
      setCartItems(getAllItemsFromLocalStorage());
    }
  };

  return (
    <div className="cart-container">
      <Navbar />
      <h2 className="header">Your Cart</h2>

      {cartItems.length > 0 ? (
        <div className="cart">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div
                className="cart-item"
                key={item.id}
                onClick={() => navigateToItem(item.id, item)}
              >
                <div className="item-image">
                  <img src={item.image} alt="item image" />
                  <div className="item-description">
                    <p className="title">{item.title}</p>
                    <p className="price">${item.price}</p>
                  </div>
                </div>

                  <div className="count-container">
                    <img src={minusIcon} alt="minus icon" onClick={(e) => handleDecrement(e, item)}/>
                    <p className="count">{item.count}</p>
                    <img src={plusIcon} alt="plus icon" onClick={(e) => handleIncrement(e, item)}/>
                  </div>

                  <img
                    src={trashIcon}
                    alt="delete item"
                    onClick={(e) => deleteItemFromCart(e, item.id)}
                    className="delete"
                  />

              </div>
            ))}
          </div>

          <div className="total-cost-container">
            {cartItems.map((item) => (
              <div className="total-cost" key={item.id}>
                <p>
                  <span>{item.title}</span> x{item.count}
                </p>
                <p className="money">${item.price}</p>
              </div>
            ))}
            <div className="total-container">
              <p className="total">Total: </p>
              <p className="money">${calculateTotal()}</p>
            </div>
            <Link to="/" className="checkout">Checkout</Link>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h3>Your cart is empty!</h3>
          <Link to="/products" className="back">Back to Shopping</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
