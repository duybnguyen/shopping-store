import "./About.scss"
import Navbar from "../Navbar/Navbar"


const About = () => {
  
  return (
  <div className="about-container">
    <Navbar />
    <p>
      This is a fictional store and none of the products displayed here exist.
    </p>
    <p>
      Products' information and images: Fake Store API.
    </p>
  </div>
  )
}

export default About