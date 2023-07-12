import React, { useContext } from "react";
import "./Cart.css";
import { AiOutlineMinus, AiOutlinePlus, AiFillDelete } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { context } from "../utils/Context";
import { useNavigate } from "react-router-dom";
const Cart = ({ setCart }) => {
  const { subTotal, cartItems, onRemove, handleCartProductCount } =
    useContext(context);
  const Navigate = useNavigate();
  return (
    <div className="app__cart">
      <div>
        <div className="app__cart-close">
          <h6>Your Cart</h6>
          <GrClose
            style={{ cursor: "pointer" }}
            onClick={() => setCart(false)}
          />
        </div>
        {cartItems.map((item) => (
          <div className="app__cart-wrapper" key={item.id}>
            <div className="app__cart-wrapper_img">
              <img
                src={
                  process.env.REACT_APP_API_KEY +
                  item?.attributes?.image?.data[0].attributes.url
                }
                alt=""
              />
            </div>
            <div className="app__cart-wrapper_content">
              <div>
                <h1
                  onClick={() => {
                    Navigate(`/product/${item.id}`);
                    setCart(false);
                  }}
                >
                  {item.attributes.name}
                </h1>
                <AiFillDelete
                  onClick={() => onRemove(item)}
                  size={25}
                  color="red"
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="quantity">
                <div className="">
                  <AiOutlineMinus
                    onClick={() => handleCartProductCount("dec", item)}
                  />
                  <span className="quantity-count">
                    {item.attributes.count}
                  </span>
                  <AiOutlinePlus
                    onClick={() => handleCartProductCount("inc", item)}
                  />
                </div>
                <p style={{ fontSize: 25, fontWeight: 500 }}>
                  ${item.attributes.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="app__cart-subtotal">
          <h6>Subtotal:</h6>
          <p>${subTotal}</p>
        </div>
        <div className="app__cart-checkout flex__center">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
