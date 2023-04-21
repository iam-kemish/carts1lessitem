import React, { useContext } from 'react'
import { reqVal } from '../Context'


const RenderProducts = ({d}) => {
 const {cart, setCart} = useContext(reqVal)
  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
      <img src={d.images ? d.images : "https://images-na.ssl-images-amazon.com/images/I/71aDGyijHCL._AC_UL160_SR160,160_.jpg"} className="card-img-top" alt="..." />

  <div className="card-body">
    <h5 className="card-title">Title: {d.title}</h5>
    <p className="card-text">Brand: {d.brand}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Category: {d.category}</li>
    <li className="list-group-item">Discount: {d.discountPercentage
}</li>
    <li className="list-group-item">Market.P: {d.price}</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Stock: {d.stock}</a>
    <a href="#" className="card-link">Ratings: {d.rating}</a>
    <img src={d.thumbnail
} className="card-img-top" alt="..."/>
{cart.includes(d)? (
       <button 
       className='btn btn-danger' 
       style={{textAlign: "center", display: "block", margin: "auto"}} 
       onClick={() => setCart(cart.filter(c => c.id !== d.id))}
     >
       Delete from cart
     </button>
) : (
  <button className='btn btn-primary my-3' style={{textAlign: "center", display: "block", margin: "auto"}} onClick={()=> setCart([...cart, d])}>Add to cart</button>

)}




  </div>
</div>
    </div>
  )
}

export default RenderProducts
