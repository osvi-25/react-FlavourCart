import { useState } from 'react'
import dataFood from './data.json'
import { Products } from './Products'
import './Home.css'

export const Home = () => {
   const [products] = useState(dataFood)

  return (
    <>
     <div className="product-container">
      {products.map((product)=>(
        <Products key={product.id} product={product} />
      ))}
     </div>
    </>
  )
}
