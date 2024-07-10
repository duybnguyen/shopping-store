import "./Navbar.scss";
import searchIcon from '../../assets/search-icon.png'
import cartIcon from '../../assets/cart-icon.png'
import { Link } from "react-router-dom";
const Navbar = () => {
  
  return (

    <div className="navbar-container">
      <Link to="/" className="logo">
        <h2 className="left">Fashion</h2>
        <h2 className="right">ist</h2>
      </Link>

      <div className="search-container">
        <img src={searchIcon} alt="search icon" />
        <input type="text" className="search" placeholder="Search store"/>
      </div>

      <div className="words-container">
        <Link to="/products">Products</Link>

        <Link to="/about">About</Link>

        <img src={cartIcon} alt="cart icon" className="cart"/>
      </div>

    </div>
  )
};

export default Navbar