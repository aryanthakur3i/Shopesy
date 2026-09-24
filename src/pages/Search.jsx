import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'
import Product from './Product'

const Search = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("query") || ""

    const products = useSelector(
        (state) => state.products.data
    )

    const filteredProduct = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()))
  return (
    <>
      <div className='max-w-7xl mx-auto p-6'>
        <h1 className='text-3xl font-bold mb-8'>
            Search results for "{query}"
        </h1>

        {filteredProduct.length === 0 ? (
            <p className='text-gray-800'>
                No product found.
            </p>

        ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {filteredProduct.map((product) => (
                    <ProductCard
                    key={product.id}
                    product={product}
                    />
                ))}
                </div>
        )}
      </div>
    </>
  )
}

export default Search
