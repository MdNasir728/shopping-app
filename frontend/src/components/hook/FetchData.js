import  { useState, useEffect } from 'react'
import axios from "axios";


const FetchData = (url) => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_API_KEY}${url}`, {
            headers: {
              Authorization: "bearer" + process.env.REACT_APP_STRAPI_TOKEN,
            },
          })
          .then((res) => {
            setProduct(res.data.data);
          });
      }, [url]);

  return (
    product
  )
}

export default FetchData
