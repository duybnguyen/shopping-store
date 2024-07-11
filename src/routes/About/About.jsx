import "./About.scss"
import Navbar from "../Navbar/Navbar"


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
          <a href="https://fakestoreapi.com/" target="blank" rel="noreferrer"></a>Fake Store API.
        </p>
      </div>
    </div>
  );
}

export default About