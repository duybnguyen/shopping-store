import { useState, useEffect } from "react"
import { CubeSpinner } from "react-spinners-kit"
import Navbar from "../Navbar/Navbar"
import "./Products.scss"
import StarRatings from "react-star-ratings"

const Products = () => {
  const [storeItems, setStoreItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getStoreItems = async () => {
      setLoading(true)
      try {
        const items = await fetch(`https://fakestoreapi.com/products`, {mode: "cors"})
        const response = await items.json()
        console.log(response)
        setStoreItems(response)
     } catch (error) {
        console.log(`Error while fetching data: ${error}`)
      } finally {
        setLoading(false)
      }
    }

    getStoreItems()

  }, [])
  return (
    <div className="products-container">
      <Navbar />
      {loading ? (
        <CubeSpinner />
      ) : (
        <div className="item-container">
          <h2>Shop</h2>
          <p>Home {">"} Products</p>
          <select name="filter" id="filter">
            <option value="all">All</option>
            <option value="jewelry">Jewelry</option>
            <option value="mens">Men's Clothing</option>
            <option value="womens">Women's Clothing</option>
          </select>

          {storeItems.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.image} alt="product image" />
              <h3>{item.title}</h3>
              <p>{item.rating.count}</p>
              <StarRatings
                rating={item.rating.rate}
                numberOfStars={5}
                name="rating"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products