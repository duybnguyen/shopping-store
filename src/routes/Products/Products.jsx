import { useState, useEffect } from "react"

const Product = () => {
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
  return 
}

export default Product