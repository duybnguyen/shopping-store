import "./Navbar.scss";

const Navbar = () => {
  
  return (

    <div className="navbar-container">
      <header>
        <h2 className="left">Fashion</h2>
        <h2 className="right">ist</h2>
      </header>

      <div className="search-container">
        <img src="" alt="" />
        <input type="text" className="search" />
      </div>

      <div className="words-container">
        <h3>Products</h3>

        <h3>About</h3>

        <img src="" alt="" className="bag" />
      </div>

    </div>
  )
};

export default Navbar