import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import RenderProducts from './RenderProducts';



const Home = () => {
  const[data, setData] = useState(null);
  const [cart, setCart] = useState([]);

 
  
  useEffect(()=>{
        axios
        .get("https://dummyjson.com/products/category/smartphones")
        .then(res => {
            setData(res.data.products)
           
        }).catch(err => {
            console.log("Something went wrong.")
        }
        )
  }, [])
  return (
    <div className="container my-3">
      <div className="row">
      {data?.map(d => (
  <div className="col-md-4 mb-4" key={d.id}>
    <RenderProducts d={d} cart={cart} setCart={setCart} />
  </div>
))}
      </div>
    </div>
  );
};

export default Home;