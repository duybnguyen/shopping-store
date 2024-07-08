import { useState, useEffect } from "react";
import { CubeSpinner } from "react-spinners-kit";
import Navbar from "../Navbar/Navbar";
import "./Products.scss";
import StarRatings from "react-star-ratings";

const Products = () => {
  const [storeItems, setStoreItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getStoreItems = async () => {
      setLoading(true);
      try {
        const items = await fetch(`https://fakestoreapi.com/products`, {
          mode: "cors",
        });
        const response = await items.json();
        console.log(response);
        setStoreItems(response);
      } catch (error) {
        console.log(`Error while fetching data: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    getStoreItems();
  }, []);

  return (
    <div className="products-container">
      <Navbar />

      {loading ? (
        <div className="loading-spinner">
          <CubeSpinner size={50} frontColor="#ff6347" backColor="#4caf50" />
        </div>
      ) : (
        <>
          <div className="header-container">
            <h2 className="title">Shop</h2>

            <div className="filter-container">
              <p className="">Home {">"} Products</p>
              <select name="filter" id="filter">
                <option value="all">All</option>
                <option value="jewelry">Jewelry</option>
                <option value="mens">Men's Clothing</option>
                <option value="womens">Women's Clothing</option>
              </select>
            </div>
          </div>

          <div className="items-container">
            {storeItems.map((item) => (
              <div className="item" key={item.id}>
                <img src={item.image} alt="product image" />
                <h3>{item.title}</h3>

                <div className="item-details">
                  <p>${item.price}</p>
                  <div className="rating-container">
                    <p>{item.rating.rate}</p>
                    <StarRatings
                      rating={item.rating.rate}
                      numberOfStars={5}
                      className="rating"
                      starRatedColor="#F7E733"
                      starDimension="15px"
                      starSpacing="2px"
                    />
                  </div>
                </div>

                <div className="button-container">
                  <button>Buy Now</button>
                  <button>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
