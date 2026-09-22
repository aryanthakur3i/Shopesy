import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../pages/Product'

const CartSummary = () => {
  const CartItems = useSelector((state) => state.cart.items)

  const totalItems = CartItems.reduce(
    (total, Product) => total + Product.quantity,0
  )

  const totalPrice = CartItems.reduce(
    (total, product) => total + product.price * product.quantity,0
  )
  return (
    <>
      <div className='bg-white rounded-2xl shadow-md p-6 h-fit'>
        <h2 className=' text-2xl font-bold mb-6'>
          Cart Summary
        </h2>

        <div className='flex justify-between mb-3'>
          <span>Items</span>
          <span>{totalItems}</span>
        </div>

         <div className='flex justify-between mb-3'>
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div> 

         <div className='flex justify-between border-t pt-4 text-xl font-bold'>
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>   
        <button className='w-full mt-6 bg-green-900 text-white py-3 rounded-2xl hover:bg-gray-900'>Checkout</button>    
      </div>
    </>
  )
}

export default CartSummary
