
import './App.css';
import React, { useReducer, useEffect ,lazy,Suspense} from "react";
import axios from 'axios';
import { cartReducer } from './reducer/cartReducer';
import Cart from './components/Cart';
import ErrorBoundary from './errorBoundary/errorBoundary';
const Products = lazy(() => import ('./components/Products'));

const App = () => {

  const [state,dispatch] = useReducer(cartReducer,{
    products:[],
    cart:[]
  })

  const getProducts = async () => {
    const response = await axios.get('https://dummyjson.com/products').then(res => res.data.products)
    dispatch({type: 'ADD_PRODUCTS', payload: response })
  }

  useEffect(() => getProducts, [])


  return (
    <div className="App" style={{display:'flex'}}>
      <ErrorBoundary>
      <Suspense fallback='<div>Data is loading</div>'>  
      <Products state = {state} dispatch={dispatch}/>
      </Suspense>
      </ErrorBoundary>
      <Cart state = {state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
