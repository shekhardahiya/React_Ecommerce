import "./products.component.css";
import React, { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { CartContext } from "../Context/cartContext";

export const cartContext = React.createContext({ count: 0 });

export default function Products() {
  const cartCtx = useContext(CartContext);
  let [products, setProducts] = useState([]);
  let [allProductsdata, setProductsall] = useState([]);
  let [categories, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  let [counters, setCartitems] = useState({ count: 100 });

  useEffect(() => {
    let productData = axios.get("http://localhost:5000/products");
    productData.then((response) => {
      console.log(response.data);
      setProducts(response.data);
      setProductsall(response.data);
    });
    let categorydata = axios.get("http://localhost:5000/categories");
    categorydata.then((response) => {
      console.log(response.data);
      setCategory(response.data);
    });
  }, []);

  let allProducts = products.map((product) => {
    return (
      <div key={product.id} className="col-md-3">
        <div className="card cardSize">
          <h6 class="text-justify itemName">{product.name}</h6>
          <div className="image">
            <img
              src={"./" + product.imageURL}
              alt=""
              height="150px"
              width="150px"
            />
          </div>
          <div className="card-footer description">{product.description}</div>
          <div className="row price">
            <div className="col-md-6 mrp"> MRP: {' '}Rs.{product.price}</div>
            <div className="col-md-6">
              {" "}
              <button
                className="btn btn-danger"
                onClick={() => addToCart(product)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
  function addToCart(product) {
    console.log(product);
    axios
      .post("http://localhost:5000/addToCart", product.id)
      .then((response) => {
        console.log(response);
        console.log(product);
        cartCtx.addItem(product);
      });
  }
  function filterBasedOnCategory(categoryId) {
    setSelectedCategory(categoryId);
    setProducts(allProductsdata);
    if (categoryId != selectedCategory) {
      let data = allProductsdata.filter((e) => e.category === categoryId);
      setProducts(data);
    } else {
      setSelectedCategory(null);
    }
  }

  function getFilteredList() {
    console.log(selectedCategory);
    if (!selectedCategory) {
      return products;
    }
    return products.filter((item) => item.category === selectedCategory);
  }

  let allCategories = categories.map((category) => {
    return (
      <button
        key={category.id}
        className={
          category.id == selectedCategory ? "highlightedButton" : "normalButton"
        }
        onClick={() => filterBasedOnCategory(category.id)}
      >
        {" "}
        {category.name}
      </button>
    );
  });

  return (
    <div className="row">
      <div className="col-md-3 categorySection">
        <div className="row">{allCategories}</div>
      </div>

      <div className="col-md-9">
        <div className="row">{allProducts}</div>
      </div>
    </div>
  );
}
