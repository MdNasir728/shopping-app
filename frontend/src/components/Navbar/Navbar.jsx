import "./Navbar.css";

import React, { useContext, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Cart } from "../../components/Index";
import { context } from "../utils/Context";

const Navbar = () => {
  const [cart, setCart] = useState(false);
  const { cartTotalItems } = useContext(context);
  return (
    <>
      <div className="app__navbar">
        <div className="app__navbar-logo flex__center">
          <h1>AM.SHOP</h1>
        </div>
        <div className="app__navbar-content flex__center">
          <div onClick={() => setCart(true)}>
            <FaShoppingBag
              color="red"
              size={25}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="cartTotalItems flex__center">{cartTotalItems}</div>
        </div>
        <div className="shopping_cart">{cart && <Cart setCart={setCart} />}</div>
      </div>
    </>
  );
};

export default Navbar;
