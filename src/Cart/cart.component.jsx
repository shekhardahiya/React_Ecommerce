import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/cartContext";
import "./cart.component.css";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  let [cartProducts, setCartProducts] = useState([]);

  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  useEffect(() => {
    setCartProducts(cartCtx.count.items);
  }, []);
  let am = 0;
  let finalAmountcalc = cartCtx.count.items.map((e) => {});

  let allCartProducts = cartCtx.count.items.map((cartProduct) => {
    console.log("called");

    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <img
              src={"./" + cartProduct.product.imageURL}
              alt=""
              height="100px"
              width="100px"
            />
          </div>
          <div className="col-md-6">
            {cartProduct.product.name} <br />
            <button
              className="btn btn-danger inc"
              onClick={() => removeItem(cartProduct)}
            >
              -
            </button>{" "}
            {cartProduct.count}
            {"     "}
            <button
              className="btn btn-danger inc"
              onClick={() => addProduct(cartProduct)}
            >
              +
            </button>{" "}
            {"  "}X {' '}Rs. {cartProduct.product.price}{" "}
          </div>
          <div className="col-md-2">
          {' '}Rs. {cartProduct.product.price * cartProduct.count}
          </div>

          {/* <button type="button" class="btn btn-danger btn-circle btn-sm">-</button> */}
        </div>
      </div>
    );
  });

  function addProduct(cartproduct) {
    console.log(cartproduct);
    setCartProducts([...cartProducts, cartproduct]);
    console.log(cartProducts);

    cartCtx.addItem(cartproduct.product);
  }

  function removeItem(cartProduct) {
    cartCtx.removeItem(cartProduct.product);
  }

  return (
    <div>
      {allCartProducts}
      <div className="modal-footer">
        {cartCtx.count.items.length > 0 && (
          <button
            className="btn btn-danger  col-md-12"
            onClick={() => navigate(`/`)}
          >
            Proceed To Checkout
          </button>
        )}
        {cartCtx.count.items.length == 0 && (
          <p className="text-center text-primary">
            No Items in your cart. Your favourite items are just a click away
          </p>
        )}
      </div>
    </div>
  );
}
