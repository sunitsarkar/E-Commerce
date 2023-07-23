import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

interface MyData {
    name: string;
    category: string;
    price: number;
    quantity: number;
    isBought: boolean
}
interface IState {
    loading: boolean,
    product: MyData[],
    errorMsg: string
}
const Cart: React.FC = () => {

    const url = "http://localhost:8000/cart";
    const navigate=useNavigate();
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

    const { loading, product, errorMsg } = state;
    return <div>
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h1 className="navbar-brand" >E-commerce</h1>
                    
                </div>
                <div className="d-flex">
                    <button className="btn btn-outline-success" type="submit" onClick={()=>{navigate('/')}}>Home</button>
                </div>
            </nav>
        </div>
        <div className="product-section">
            {errorMsg && <p>{errorMsg}</p>}
            {loading && <h1>Loading...</h1>}
            {
                product.map((item, index) => {
                    return <div className="card" key={index}>
                        <div className="card-body">
                            <h5 className="card-title">category: {item.category}:{item.name}</h5>
                            <p className="card-text">Price:${item.price}</p>
                            <p className="card-text">Price:${item.quantity}</p>
                            <button type="button" className="btn btn-outline-success">+</button><span>quantity: {item.quantity}</span>
                            <button type="button" className="btn btn-outline-danger">-</button>
                        </div>
                    </div>
                })
            }
        </div>

    </div>
}
export default Cart