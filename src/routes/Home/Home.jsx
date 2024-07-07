import "./Home.scss"
import Navbar from "../Navbar/Navbar"

const Home = () => {

  return (
    <div className="home-container">

      <Navbar />
      <div className="hero">
        <h1>redefining fashion.</h1>
        <div className="button-container">
          <button>SHOP NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Home