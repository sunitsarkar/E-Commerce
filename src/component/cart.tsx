import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


interface MyData {
    name: string;
    category: string;
    price: number;
    quantity: number;
    isBought: boolean;
    _id: string;
}
interface IState {
    loading: boolean,
    product: MyData[],
    errorMsg: string
}


const Cart: React.FC = () => {

    const url = "http://localhost:8000";
    const navigate = useNavigate();
    const [state, setState] = useState<IState>({
        loading: false,
        product: [] as MyData[],
        errorMsg: "",
    });

    const [count, setCount] = useState<number>(1)

    useEffect(() => {
        setState({ ...state, loading: true });
        axios.get(url + '/cart')
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
    console.log(state.product)

    const Buy = async (item: MyData) => {
        const { name, category, price, quantity, isBought, _id } = item;
        try {
            const response = await axios.put(url + `/cart?id=${_id}`, {
                name: name,
                category: category,
                price: price,
                quantity: count,
                isBought: true
            })
        } catch (err: any) {
            console.log(err)
        }
        // console.log(response);
        navigate('/order')
    };

    const incCount = () => {
        setCount((prevCount) => prevCount + 1);
        console.log(count)
    }
    const decCount = () => {
        setCount((prevCount) => prevCount - 1);
        console.log(count)
    }

    const { loading, product, errorMsg } = state;
    return <div >
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container-fluid">
                    <h1 className="navbar-brand" >E-commerce</h1>
                    <button type="button" className="btn btn-light" onClick={() => { navigate('/order') }}>Orders</button>
                </div>
                <div className="d-flex">
                    <button className="btn btn-outline-success" type="submit" onClick={() => { navigate('/') }}>Home</button>
                </div>
            </nav>
        </div>
        <h2>Your Cart Items</h2>
        <div className="product-container">
            <div className="products">
                {errorMsg && <p>{errorMsg}</p>}
                {loading && <h1>Loading...</h1>}
                {product.length === 0 && <h1>No Item Found</h1>}
                {
                    product.map((item, index) => {
                        if (item.isBought === false) return <div className="card" key={index}>
                            <div className="card-body">
                                <div>
                                    <h5 className="card-title">category: {item.category}</h5>
                                    <p className="card-text">Price:${item.price}</p>
                                    <button type="button" className="btn btn-outline-success" onClick={incCount}>+</button>
                                    <span>quantity: {count}</span>
                                    <button type="button" className="btn btn-outline-danger" onClick={decCount}>-</button>
                                </div>
                                <hr />
                                <button type="button" className="btn btn-dark" onClick={() => { Buy(item) }}>Buy Now</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>

    </div>
}
export default Cart