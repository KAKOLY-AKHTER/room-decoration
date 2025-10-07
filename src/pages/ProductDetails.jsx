import React from 'react'
import { useParams } from 'react-router'
import useProducts from '../hooks/useProducts';
import { updateList } from '../utilities/localStorage';

const ProductDetails = () => {
  const {id}=useParams();
  const {products,loading}=useProducts()
const product=products.find(p=>p.id===Number(id))
if(loading) return <p>loading......</p>
 const { name, image, category, price, description } = product

  return (
       <div className='card bg-base-100 border shadow-sm'>
      <figure className='h-84 overflow-hidden'>
        <img className='w-full object-cover' src={image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>{description}</p>
        <p>Category: {category}</p>
        <p>Price: ${price}</p>
        <div className='card-actions justify-end'>
          <button
            onClick={() => updateList(product)}
            className='btn btn-outline'
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails