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


const Order: React.FC = () => {

    const url = "http://localhost:8000";
    const navigate = useNavigate();
    const [state, setState] = useState<IState>({
        loading: false,
        product: [] as MyData[],
        errorMsg: "",
    });

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



    const { loading, product, errorMsg } = state;
    return <div>
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h1 className="navbar-brand" >E-commerce</h1>

                </div>
                <div className="d-flex">
                    <button className="btn btn-outline-success" type="submit" onClick={() => { navigate('/') }}>Home</button>
                </div>
            </nav>
        </div>
        <h2>Your Orders</h2>
        <div className="product-container">
            <div className="products">
                {errorMsg && <p>{errorMsg}</p>}
                {loading && <h1>Loading...</h1>}
                {product.length === 0 && <h1>No Item Found</h1>}
                {
                    product.map((item, index) => {
                        if (item.isBought === true) return <div className="card" key={index}>
                            <div className="card-body">
                                <div>
                                    <h5 className="card-title">category: {item.category}</h5>
                                    <p className="card-text">Price:${item.price}</p>
                                    <span>quantity: {item.quantity}</span>
                                </div>
                                <hr />
                                <p>Total Purchase: {item.price * item.quantity}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>

    </div>
}
export default Order