import React from "react";
import { Link, useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";
import leftArrowIcon from "../../assets/leftArrow.png";
import Navbar from "../Navbar/Navbar";
import "./Product.scss";

const Product = () => {
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
                starDimension="20px"
                starSpacing="5px"
              />
            </div>
            <p>{item.rating.count}</p>
          </div>
        </div>

        <div className="purchase-container">
          <p>${item.price}</p>
          <p>In Stock</p>
          <p>Quantity</p>
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
