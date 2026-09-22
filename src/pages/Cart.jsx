import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../Components/CartItem'
import CartSummary from '../Components/CartSummary'
import Product from './Product'

const Cart = () => {
  const CartItems =useSelector((state) =>state.cart.items)
  return (
    <>
      <div className='min-h-screen bg-gray-100 p-6'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-3xl font-bold mb-8'>
            Shopping Cart
          </h1> 
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              {/*Cart Items */}

              <div className='lg:col-span-2 space-y-5'>
                {CartItems.length > 0 ? (
                  CartItems.map((product) => (
                    <CartItem key={product.id}
                    product={product} />
                  ))
                  
                ) : (
                  <p className='text-gray-500'>Your Cart is Empty.</p>
                )
              }
              </div>

              {/*Summuray */}
              <CartSummary/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
