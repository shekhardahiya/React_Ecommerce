import "./header.component.css";
import Modal from "react-bootstrap/Modal";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "../Products/products.component";
import cartContext, { CartContext } from "../Context/cartContext";
import { Button } from "bootstrap";
import Cart from "../Cart/cart.component";

export default function Header() {
  const cartCtx = useContext(CartContext);
  let [item, setItem] = useState(0);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    if (cartCtx.count.items.length == 0) {
      setItem(0);
    }
    let c = 0;
    cartCtx.count.items.map((ele) => {
      c = c + ele.count;
      setItem(c);
    });
  });

  return (
    <div className="shadow">
      <Modal contentClassName="ccc" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My Cart ({item}) </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart onClick={setShow}></Cart>
        </Modal.Body>
        {/* <Modal.Footer>
          <div className="row">
          <button className="btn btn-danger  col-md-12" onClick={handleClose}>Proceed To Checkout</button>

          </div>
        </Modal.Footer> */}
      </Modal>

      <div className="row top">
        <div className="col-md-2 offset-10">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <Link class="nav-item nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-item nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div className="row">
          <div className="col-md-3 offset-1">
            <img src="./static/images/logo.png" alt="" />
          </div>
          <div className="col-md-4 offset-4">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link class="nav-item nav-link" to="/">
                  Home
                </Link>
                <Link class="nav-item nav-link" to="/products">
                  Products
                </Link>
                <button
                  class="nav-item nav-link right cartIcon"
                  onClick={handleShow}
                >
                  {" "}
                  <i class="fa fa-shopping-cart cartIcon"></i> Items {item}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
