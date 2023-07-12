import { createContext, useState } from "react";

export const context = createContext();

const Context = ({ children }) => {
  const [count, setCount] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalItems, setCartTotalItems] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  console.log(cartItems);

  const handleCount= (type)=>{
    if (type=== 'inc') {
      setCount( count + 1)
      
    }else if (type=== 'dec') {
      setCount(count === 1 ? count : count - 1)
      
    }
  }

  const onAdd = (product, count) => {
    let items = [...cartItems];
    let index = items?.findIndex((item) => item.id === product?.id);
    setSubTotal(
      (prevSubTotal) => prevSubTotal + product?.attributes?.price * count
    );
    setCartTotalItems(
      (prevCartTotalItems) => prevCartTotalItems + count
    );
    if (index !== -1) {
      items[index].attributes.count += count;
    } else {
      product.attributes.count = count;
      items = [...items, product];
    }
    setCartItems(items);
    setCount(1)
  };

  const onRemove = (product) => {
    let items = [...cartItems];
    items = items?.filter((item) => item.id !== product?.id);
    setCartItems(items);
    setSubTotal(
      (prevSubTotal) => prevSubTotal - product?.attributes?.price * product.attributes.count
    );
    setCartTotalItems(
      (prevCartTotalItems) => prevCartTotalItems - product.attributes.count
    );
  };

  const handleCartProductCount = (type, product) => {
    let items = [...cartItems];
    let index = items?.findIndex((item) => item.id === product?.id);
    if (type === "inc") {
      items[index].attributes.count += 1;
      setSubTotal(
        (prevSubTotal) => prevSubTotal + product?.attributes?.price
      );
      setCartTotalItems(
        (prevCartTotalItems) => prevCartTotalItems +=1
      );
    } else if (type === "dec") {
      if (items[index].attributes.count === 1) return;
      items[index].attributes.count -= 1;
      setSubTotal(
        (prevSubTotal) => prevSubTotal - product?.attributes?.price
      );
      setCartTotalItems(
        (prevCartTotalItems) => prevCartTotalItems -=1
      );
    }
    setCartItems(items);
  };

  return (
    <context.Provider
      value={{
        count,
        setCount,
        cartItems,
        cartTotalItems,
        setCartItems,
        subTotal,
        setSubTotal,
        handleCount,
        onAdd,
        onRemove,
        handleCartProductCount,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default Context;
