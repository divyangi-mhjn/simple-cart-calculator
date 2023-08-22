
import './App.css';
import React, { useReducer, useEffect } from "react";
import axios from 'axios';
import { cartReducer } from './reducer/cartReducer';
import Products from './components/Products';
import Cart from './components/Cart';

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
      <Products state = {state} dispatch={dispatch}/>
      <Cart state = {state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
