import "./Navbar.scss";
import searchIcon from "../../assets/search-icon.png";
import cartIcon from "../../assets/cart-icon.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [itemsData, setItemsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const getStoreItems = async () => {
      try {
        const items = await fetch(`https://fakestoreapi.com/products`, {
          mode: "cors",
        });
        const response = await items.json();
        setItemsData(response);
        setFilteredData(response);
      } catch (error) {
        console.log(`Error while fetching data: ${error}`);
      }
    };

    getStoreItems();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);
    const filtered = itemsData
      .filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5);
    setFilteredData(filtered);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => setIsFocused(false), 200);
  };

  return (
    <div className="navbar-container">
      <Link to="/" className="logo">
        <h2 className="left">Fashion</h2>
        <h2 className="right">ist</h2>
      </Link>

      <div className="search-container">
        <div className="search-bar">
          <img src={searchIcon} alt="search icon" />
          <input
            type="text"
            className="search"
            placeholder="Search store"
            onChange={handleSearch}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        {search && isFocused && (
          <div className="filtered-search-container">
            {filteredData.map((item) => (
              <div className="item-container" key={item.id}>
                <Link
                  className="link"
                  to={`/products/${item.id}`}
                  state={{ item }}
                >
                  <img src={item.image} alt="item image" />
                  <div className="item-description">
                    <h2>{item.title}</h2>
                    <p>${item.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="words-container">
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <img src={cartIcon} alt="cart icon" className="cart" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
