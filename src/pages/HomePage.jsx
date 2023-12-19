import { useEffect, useState } from "react";
import Product2 from "../components/Product2";
import axios from "axios";
import { Link } from "react-router-dom";
import { VITE_BACKEND_URL } from "../App";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const getProducts = async() => {
    try {
        setIsLoading(true);
        const response = await axios.get(`${VITE_BACKEND_URL}/api/products/`);
        console.log(response.data);
        setProducts(response.data);
        setIsLoading(false);
    } catch (error) {
        console.log(error);            
    }

}

useEffect(() => {
    getProducts();
}, [])


  return (
    <div>
      <h2>Welcome to pottery made by Ellen</h2>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product, index) => (
            <Product2 key={index} product={product} getProducts={getProducts} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;