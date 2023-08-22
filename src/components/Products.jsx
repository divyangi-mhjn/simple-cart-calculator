import React from "react"

const Products = ({ state, dispatch }) => {
    const { products, cart } = state
    const displayProducts = () => {
        
        return (products.map(data => {
            return (
                <div key={data.id} style={{ display: 'flex', flexDirection: 'column', border: '1px solid grey', width: '30%', marginTop: 10, gap: 10 }}>
                    <img src={data.thumbnail} alt={data.title} style={{ height: 200, objectFit: 'cover' }} />
                   <div style={{display:'flex',justifyContent:'space-between'}}>
                   <span>{data.title}</span>
                    <span>{data.price}</span>
                   </div>

                    {cart.some((p) => p.id === data.id) ? (
                        <button style={{ backgroundColor: 'red', color: 'white', borderRadius: 3 }}
                        onClick={() => dispatch({type:'REMOVE_FROM_CART',payload:data.id})}
                        >Remove</button>
                    ) : (
                        <button style={{ backgroundColor: 'green', borderRadius: 3, color: 'white' }}
                        onClick={() =>dispatch({type:'ADD_TO_CART',payload:data})}
                        >Add</button>
                    )}
                </div>
            )
        })
        )
    }

    return (

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '80%' }}>

            {displayProducts()}
        </div>

    )
}

export default Products