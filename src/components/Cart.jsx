import React, { useState } from "react"

const Cart = ({state,dispatch}) =>{
    const {cart} = state
    const[total,setTotal] = useState(0)

    React.useEffect(()=>{
setTotal(cart.reduce((acc,curr)=> acc + Number(curr.price) * curr.qty, 0))
    },[cart])

    const changeQty = (id,qty) =>{
   dispatch({type:'CHANGE_QTY',payload:{id:id,qty:qty}}) 
   
    }

    return(<div style={{display:'flex',flexDirection:'column',flexWrap: 'wrap-reverse' ,backgroundColor:'#ececec', padding:10,width:'20%'}}> 
<h4>Total is {total}</h4>
{ cart.length>0 ?
    cart.map(prod =>{
        return(
            <div key={prod.id} style={{border:'1px solid blue',padding:10,margin:10}}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <span>{prod.title}</span>
                <button onClick={()=>changeQty(prod.id,prod.qty-1)}>-</button>
                <span>{prod.qty}</span>
                <button  onClick={()=>changeQty(prod.id,prod.qty+1)}>+</button>
                </div>
            </div>
        )
    }) : 'Please add to cart'
}

    </div>)
}

export default Cart