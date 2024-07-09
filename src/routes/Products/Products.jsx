import { useState, useEffect } from "react";
import { CubeSpinner } from "react-spinners-kit";
import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar";
import caratIcon from "../../assets/carat-down.png";
import "./Products.scss";
import StarRatings from "react-star-ratings";

const Products = () => {
  const [storeItems, setStoreItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [itemsFilter, setItemsFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const toggleShowFilters = () => setShowFilters(prev => !prev);

  const setFilter = filter => {
    setItemsFilter(filter);
    setShowFilters(false);
  };

  useEffect(() => {
    const getStoreItems = async () => {
      setLoading(true);
      try {
        let filter = itemsFilter === "All" ? '' : itemsFilter.toLowerCase();
        const url = filter ? `https://fakestoreapi.com/products/category/${filter}` : `https://fakestoreapi.com/products`;
        const items = await fetch(url, {
          mode: "cors",
        });
        const response = await items.json();
        setStoreItems(response);
      } catch (error) {
        console.log(`Error while fetching data: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    getStoreItems();
  }, [itemsFilter]);

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
              <p>Home</p>
              <p className="carat-side">{">"}</p>
              <p>Products</p>
              <p className="carat-side">{">"}</p>

              <div className="filter">
                <div className="filter-toggle" onClick={toggleShowFilters}>
                  <p>{itemsFilter}</p>
                  <img src={caratIcon} alt="carat-icon" />
                </div>

                {showFilters && (
                  <div className="filter-options">
                    <p onClick={() => setFilter("All")}>All</p>
                    <p onClick={() => setFilter("Jewelery")}>Jewelery</p>
                    <p onClick={() => setFilter("Men's Clothing")}>Men's Clothing</p>
                    <p onClick={() => setFilter("Women's Clothing")}>Women's Clothing</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="items-container">
            {storeItems.length > 0 ? (
              storeItems.map((item) => (
                <div className="item" key={item.id}>
                  <Link to={`/products/${item.id}`} className="link">
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
                  </Link>
                </div>
              ))
            ) : (
              <p>No items found</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
