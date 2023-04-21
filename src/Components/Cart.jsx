import React, { useEffect, useState, useContext } from 'react'
import { reqVal } from '../Context';
import RenderProducts from './RenderProducts';

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart, setCart } = useContext(reqVal);

  useEffect(() => {
   setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
  }, [cart]);

  if (!cart || cart.length === 0) {
    return (
      <div className='container my-3'>
        <span style={{marginLeft: "5px"}}><strong>My Cart</strong></span><br/>
        <span style={{marginLeft: "5px"}}><strong>No items in cart.</strong></span>
      </div>
    )
  }

  return (
    <div className='container my-3'>
      <span style={{marginLeft: "5px"}}><strong>My Cart</strong></span><br/>
      <span style={{marginLeft: "5px"}}><strong>Total Price: {total}</strong></span>
      <div className="container my-3">
        <div className="row">
          {cart.map(d => (
            <div className="col-md-4 mb-4" key={d.id}>
              <RenderProducts d={d} cart={cart} setCart={setCart} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cart;
