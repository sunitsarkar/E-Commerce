import React, { useState ,MouseEvent} from "react"
import Product from "./product"
import '../App.css'
import { useNavigate } from "react-router-dom"

interface IState{
    category:string,
    range:number
}

const initialState={
    category:'',
    range:0
}

const LandingPage:React.FC=()=> {
    const [state,setState] =useState<IState>(initialState);
    const navigate=useNavigate()
    // console.log(state);
    function setCat1(e:MouseEvent<HTMLLIElement, globalThis.MouseEvent>){
        setState({...state, category:'shoes'})
    }
    function setCat2(e:MouseEvent<HTMLLIElement, globalThis.MouseEvent>){
        setState({...state, category:'shirt'})
    }
    function setCat3(e:MouseEvent<HTMLLIElement, globalThis.MouseEvent>){
        setState({...state, category:'watch'})
    }
    function setPr1(e:MouseEvent<HTMLLIElement, globalThis.MouseEvent>){
        setState({...state, range:50})
    }
    function setPr2(e:MouseEvent<HTMLLIElement, globalThis.MouseEvent>){
        setState({...state, range:100})
    }
    function setPr3(e:MouseEvent<HTMLLIElement, globalThis.MouseEvent>){
        setState({...state, range:300})
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
                        <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Price Range
                        </a>
                        <ul className="dropdown-menu">
                            <li className="li-btn" onClick={(e)=>{setPr1(e)}} >Below 50</li>
                            <li className="li-btn" onClick={(e)=>{setPr2(e)}} >Below 100</li>
                            <li className="li-btn" onClick={(e)=>{setPr3(e)}} >Below 300</li>
                        </ul>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Category
                        </a>
                        <ul className="dropdown-menu">
                            <li className="li-btn" onClick={(e)=>{setCat1(e)}} >Shoes</li>
                            <li className="li-btn" onClick={(e)=>{setCat2(e)}} >Shirt</li>
                            <li className="li-btn" onClick={(e)=>{setCat3(e)}} >Watch</li>
                        </ul>
                    </li>
                </ul>
                <div className="d-flex" onClick={()=>{navigate('/cart')}} >
                    <h3>cart</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                </div>
            </div>
        </div>
    </nav>
    <div className="product-section">
        <Product category={state.category} range={state.range}/>
    </div>
</div>
}

export default LandingPage