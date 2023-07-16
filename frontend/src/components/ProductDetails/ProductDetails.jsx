import React, { useState, useContext } from "react";
import "./ProductDetails.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
// import { ProductCard } from "../Index";
import { useParams } from "react-router-dom";
import FetchData from "../hook/FetchData";
import { context } from "../utils/Context";

const ProductDetails = () => {
  const [num, setNum] = useState(0);
  const { count, handleCount, onAdd } = useContext(context);
  const { id } = useParams();
  let product = FetchData(`/api/products/${id}?populate=*`);
  let imgurl =
    process.env.REACT_APP_API_KEY +
    product?.attributes?.image?.data[num].attributes?.url;

  return (
    <>
      <div className="app__detail section__padding">
        <div className="app__detail-img">
          <img className="app__detail-img_main" src={imgurl} alt="" />
          <div className="img_option">
            <img
              src={
                process.env.REACT_APP_API_KEY +
                product?.attributes?.image?.data[0].attributes?.url
              }
              alt=""
              onMouseOver={() => setNum(0)}
            />
            <img
              src={
                process.env.REACT_APP_API_KEY +
                product?.attributes?.image?.data[1].attributes?.url
              }
              alt=""
              onMouseOver={() => setNum(1)}
            />
            <img
              src={
                process.env.REACT_APP_API_KEY +
                product?.attributes?.image?.data[2].attributes?.url
              }
              alt=""
              onMouseOver={() => setNum(2)}
            />
            <img
              src={
                process.env.REACT_APP_API_KEY +
                product?.attributes?.image?.data[3].attributes?.url
              }
              alt=""
              onMouseOver={() => setNum(3)}
            />
          </div>
        </div>
        <div className="app__detail-content">
          <h1>{product?.attributes?.name}</h1>
          <img
            src={
              "https://cdn.iconscout.com/icon/free/png-256/free-star-rating-five-compare-review-best-33662.png"
            }
            alt=""
          />
          <h6>Details: </h6>
          <p>{product?.attributes?.details}</p>
          <p className="price">${product?.attributes?.price}</p>
          <div className="quantity flex__center">
            <h6>Quantity: </h6>
            <div>
              <AiOutlineMinus
                onClick={() => handleCount('dec')}
              />
              <span className="quantity-count">{count}</span>
              <AiOutlinePlus onClick={() => handleCount('inc')} />
            </div>
          </div>
          <div className="content_button">
            <button className="btn1" onClick={() => onAdd(product, count)}>
              Add to cart
            </button>
            <button className="btn2">Buy now</button>
          </div>
        </div>
      </div>
      {/* <div className="app__mayLike section__padding ">
        <div className="mayLike-heading">
          <h4>You May Also Like</h4>
        </div>
        <div className="mayLike-content">
          <div className="content-card_wrapper">
            <ProductCard value="productdetail" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProductDetails;
