import { Link, useNavigate } from "react-router-dom";
import "./ProductCard.css";
import FetchData from "../hook/FetchData";
import { useContext } from "react";
import { context } from "../utils/Context";
const ProductCard = ({ item, value, name, price, image, id }) => {
  const { count, setCount, onAdd } = useContext(context);
  let classname = "app__productcard";
  classname += value === "product" ? " flex_wrap" : "";

  const navigate = useNavigate();

  return (
    <div className={classname}>
      <div className="app__productcard-card">
        <div
          onClick={() => navigate(`/product/${id}`)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {/* <Link
          to={`/product/${id}`}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }} */}
          {/* > */}
          <div className="app__productcard-card_img">
            <img src={image} alt="" />
          </div>
          <h1>{name}</h1>
        </div>
        {/* </Link> */}
        <div className="app__productcard-card_btn">
          <p>${price}</p>
          <button className="btn5" onClick={() => onAdd(item, count)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
