import React, { useEffect, useState } from "react";
import axios from "axios";

interface MyData {
  name: string;
  category: string;
  price: number;
}
interface IState {
  loading: boolean,
  product: MyData[],
  errorMsg: string
}
interface IProps {
  category: string,
  range: number
}
const Product: React.FC<IProps> = ({ category, range }) => {
  const url = "http://localhost:8000";
  const [state, setState] = useState<IState>({
    loading: false,
    product: [] as MyData[],
    errorMsg: "",
  });

  useEffect(() => {
    setState({ ...state, loading: true });
    axios.get(url)
      .then((res) =>
        setState({
          ...state,
          loading: false,
          product: res.data,
        })
      )
      .catch((err) =>
        setState({
          ...state,
          loading: false,
          errorMsg: err.message,
        })
      );
  }, []);

  const addToCart = async (item: MyData) => {
    const { name, category, price } = item;
    const response = await axios.post(url + '/cart', {
      name: name,
      category: category,
      price: price,
      quantity: 1,
      isBought: false
    })
    // console.log(response.data);
    alert('item added to cart')
  }

  // console.log(state)
  // console.log(category, range)
  const { loading, product, errorMsg } = state;

  return <div className="product-container">
    {errorMsg && <p>{errorMsg}</p>}
    {loading && <h1>Loading...</h1>}
    {category && range ?
      <div>
        {
          product.map((item, index) => {
            if (item.category === category && item.price < range) return <div className="card" key={index}>
              <div className="card-body">
                <h5 className="card-title">category: {item.category}</h5>
                <p className="card-text">Price:${item.price}</p>
                <a className="btn btn-primary" onClick={() => { addToCart(item) }}>add to cart</a>
              </div>
            </div>
          })
        }
      </div> : category ? <div>
        {
          product.map((item, index) => {
            if (item.category === category) return <div className="card" key={index}>
              <div className="card-body">
                <h5 className="card-title">category: {item.category}</h5>
                <p className="card-text">Price:${item.price}</p>
                <a className="btn btn-primary" onClick={() => { addToCart(item) }} >add to cart</a>
              </div>
            </div>
          })
        }
      </div> : range ? <div>
        {
          product.map((item, index) => {
            if (item.price < range) return <div className="card" key={index}>
              <div className="card-body">
                <h5 className="card-title">category: {item.category}</h5>
                <p className="card-text">Price:${item.price}</p>
                <a className="btn btn-primary" onClick={() => { addToCart(item) }} >add to cart</a>
              </div>
            </div>
          })
        }
      </div> : <div>
        {
          product.map((item, index) => {
            return <div className="card" key={index}>
              <div className="card-body">
                <h5 className="card-title">category: {item.category}</h5>
                <p className="card-text">Price:${item.price}</p>
                <a className="btn btn-primary" onClick={() => { addToCart(item) }}>add to cart</a>
              </div>
            </div>
          })
        }
      </div>
    }
  </div>
}

export default Product;