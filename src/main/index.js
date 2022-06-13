import "./style.css";
import axios from "axios";
import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    axios
      .get(
        "https://9a89f9d3-bf8d-4d1c-80e9-f9d039623ead.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러 발생:", error);
      });
  }, []);

  return (
    <div>
      <div id="banner">
        <img src="./images/banners/banner1.png" alt="" />
      </div>
      <h1>판매되는 상품들</h1>
      <div id="product-list">
        {products.map(function (product, index) {
          return (
            <div className="product-card">
              <Link className="product-link" to={`/products/${product.id}`}>
                <div>
                  <img className="product-img" src={product.imageUrl} />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="products-price">{product.price}원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
