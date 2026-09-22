import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Product from './Product'

const Category = () => {
     const {category} = useParams();

     const products = useSelector((state) => state.products.data)

     const selectedCategory = decodeURIComponent(category)

     const filteredProducts = products.filter((product) => product.category === selectedCategory)
  return (
    <>
        <div >
            <h1 className='text-3xl font-bold capitalize p-6'>
                {selectedCategory}
            </h1>
            <Product products={filteredProducts}/>
            </div>
      
    </>
  )
}

export default Category
