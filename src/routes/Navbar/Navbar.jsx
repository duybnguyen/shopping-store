import "./Navbar.scss";
import searchIcon from '../../assets/searchIcon.png'
import cartIcon from '../../assets/cartIcon.png'
const Navbar = () => {
  
  return (

    <div className="navbar-container">
      <header>
        <h2 className="left">Fashion</h2>
        <h2 className="right">ist</h2>
      </header>

      <div className="search-container">
        <img src={searchIcon} alt="search icon" />
        <input type="text" className="search" placeholder="Search store"/>
      </div>

      <div className="words-container">
        <h3>Products</h3>

        <h3>About</h3>

        <img src={cartIcon} alt="cart icon" className="cart"/>
      </div>

    </div>
  )
};

export default Navbar