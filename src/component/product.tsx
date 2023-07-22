import React,{ useEffect, useState } from "react";
import axios ,{AxiosResponse} from "axios";

const Product :React.FC =()=> {
    interface MyData {
        name: string;
        category:string;
        price:number;
      }
    interface IState {
        loading:boolean,
        product:MyData[],
        errorMsg:string
    }
    // const [data, setData] = useState<MyData | null>(null);
    const [state, setState] = useState<IState>({
        loading: false,
        product: [] as MyData[],
        errorMsg: "",
      });

      useEffect(() => {
        setState({ ...state, loading: true });
        axios.get("http://localhost:8000/")
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

      console.log(state)
      const { loading, product, errorMsg } = state;

      return <>
        {errorMsg && <p>{errorMsg}</p>}
        {loading && <h1>Loading...</h1>}
      {
        product.map((item)=>{
            return  <div className="card" key={item.name}>
            <div className="card-body">
                <h5 className="card-title">category: {item.category}</h5>
                <p className="card-text">Price:${item.price}</p>
                <a href="#" className="btn btn-primary">add to cart</a>
             </div>
         </div>
        })
        
      }
      </>
}

export default Product;