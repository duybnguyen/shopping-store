import "./About.scss"
import Navbar from "../Navbar/Navbar"
import githubIcon from "../../assets/github.png"


const About = () => {
  
  return (
    <div className="about-container">
      <Navbar />

      <div className="about-text">
        <p>
          This is a fictional store and none of the products displayed here
          exist.
        </p>
        <p>
          Products' information and images:{" "}
          <a href="https://fakestoreapi.com/" target="blank" rel="noreferrer">
            Fake Store API.
          </a>
        </p>
      </div>

      <a
        href="https://github.com/duynguyen-js/shopping-store"
        target="blank"
        rel="noreferrer"
        className="github"
      >
        <img src={githubIcon} alt="github icon" />
        <p>duynguyen-js</p>
      </a>
    </div>
  );
}

export default About