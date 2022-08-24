import React from 'react'
import Product from '../components/Product';
import data from '../data'

export default function HomeScreen() {
  return (
    <div>
    <div class="row center">
        {data.products.map((product) => ( //while using map in react you gotta use a key in the next first element 
        <Product key={product._id} product={product} />
        ))}
    </div>
    </div>
  )
}
