import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";
import leftArrowIcon from "../../assets/left-arrow.png";
import cartDownIcon from "../../assets/carat-down.png"
import Navbar from "../Navbar/Navbar";
import "./Product.scss";

const Product = () => {
  const [quantity, setQuantity] = useState(1)
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => setShowDropdown(prev => !prev)

  const location = useLocation();
  const { item } = location.state || {};

  console.log(item)

  if (!item) {
    return <div>No item data found</div>;
  }

  return (
    <div className="product-container">
      <Navbar />
      <div className="back-container">
        <Link to="/products">
          <img src={leftArrowIcon} alt="left arrow icon" />
          <p>Back</p>
        </Link>
      </div>

      <div className="product">
        <img src={item.image} alt={item.title} />

        <div className="title-container">
          <h2>{item.title}</h2>
          <p>{item.description}</p>

          <div className="rating-container">
            <div className="rating">
              <p>{item.rating.rate}</p>
              <StarRatings
                rating={item.rating.rate}
                numberOfStars={5}
                starRatedColor="#F7E733"
                starDimension="15px"
                starSpacing="1px"
              />
            </div>
            <p>
              Total ratings: <span>{item.rating.count}</span>
            </p>
          </div>
        </div>

        <div className="purchase-container">
          <p className="price">${item.price}</p>
          <p>Free Returns</p>
          <p className="stock">In Stock</p>

          <p>Free shipping on orders above $50</p>

          <div className="dropdown" onClick={toggleDropdown}>
            <div className="toggle-container">
              <p>Quantity: {quantity}</p>
              <img
                src={cartDownIcon}
                alt="carat down icon"
                className={showDropdown ? "rotate" : "unrotate"}
              />
            </div>

            {showDropdown && (
              <div className="content">
                <p onClick={() => setQuantity(1)}>1</p>
                <p onClick={() => setQuantity(2)}>2</p>
                <p onClick={() => setQuantity(3)}>3</p>
                <p onClick={() => setQuantity(4)}>4</p>
                <p onClick={() => setQuantity(5)}>5</p>
              </div>
            )}
          </div>
          <div className="button-container">
            <button>Add to Cart</button>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
