import React, { useState, MouseEvent } from "react"
import Product from "./product"
import '../App.css'
import { useNavigate } from "react-router-dom"

interface IState {
    category: string,
    range: number
}

const initialState = {
    category: '',
    range: 0
}

const LandingPage: React.FC = () => {
    const [state, setState] = useState<IState>(initialState);
    const navigate = useNavigate()
    // console.log(state);
    function setCat1(e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) {
        setState({ ...state, category: 'shoes' })
    }
    function setCat2(e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) {
        setState({ ...state, category: 'shirt' })
    }
    function setCat3(e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) {
        setState({ ...state, category: 'watch' })
    }
    function setPr1(e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) {
        setState({ ...state, range: 50 })
    }
    function setPr2(e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) {
        setState({ ...state, range: 100 })
    }
    function setPr3(e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) {
        setState({ ...state, range: 300 })
    }

    return <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <h1 className="navbar-brand" >E-commerce</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Price Range
                            </a>
                            <ul className="dropdown-menu">
                                <li className="li-btn" onClick={(e) => { setPr1(e) }} >Below 50</li>
                                <li className="li-btn" onClick={(e) => { setPr2(e) }} >Below 100</li>
                                <li className="li-btn" onClick={(e) => { setPr3(e) }} >Below 300</li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </a>
                            <ul className="dropdown-menu">
                                <li className="li-btn" onClick={(e) => { setCat1(e) }} >Shoes</li>
                                <li className="li-btn" onClick={(e) => { setCat2(e) }} >Shirt</li>
                                <li className="li-btn" onClick={(e) => { setCat3(e) }} >Watch</li>
                            </ul>
                        </li>
                        <button type="button" className="btn btn-light" onClick={() => { navigate('/order') }}>Orders</button>
                    </ul>
                    <div className="d-flex"  >
                    <button type="button" className="btn btn-light" onClick={() => { navigate('/cart') }}>Go to Cart</button>
                    </div>
                </div>
            </div>
        </nav>
        <div className="product-section">
            <Product category={state.category} range={state.range} />
        </div>
    </div>
}

export default LandingPage