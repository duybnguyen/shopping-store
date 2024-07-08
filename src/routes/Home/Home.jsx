import "./Home.scss"
import Navbar from "../Navbar/Navbar"
import { Link } from "react-router-dom"

const Home = () => {

  return (
    <div className="home-container">
      <Navbar />
      <div className="hero">
        <h1>redefining fashion.</h1>
        <div className="button-container">
          <Link to="/products" className="shop">SHOP NOW</Link>
        </div>
      </div>
    </div>
  );
}

export default Home