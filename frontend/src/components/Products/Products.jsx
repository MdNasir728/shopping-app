import "./Products.css";
import { ProductCard } from "../Index";
import FetchData from "../hook/FetchData";

const Products = () => {
  let product = FetchData("/api/products?populate=*");

  return (
    <div className="app__product flex__center section__padding">
      <div className="app__product-heading">
        <h3>Best Seller Products</h3>
        <p>speaker There are many variations passages</p>
      </div>
      <div className="app__product-content flex__center">
        {product.map((item, i) => (
          <ProductCard
            key={item.id+i}
            value="product"
            id={item.id}
            item={item}
            name={item.attributes.name}
            price={item.attributes.price}
            image={
              process.env.REACT_APP_API_KEY +
              item.attributes.image.data[0].attributes.url
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
