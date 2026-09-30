import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartSummary = () => {

  // get all cart item from the redux store
  const CartItems = useSelector((state) => state.cart.items)

  // calculate the total number of products in the cart
  const totalItems = CartItems.reduce(
    (total, Product) => total + Product.quantity,0
  )

  // calculate the total price of all products
  const totalPrice = CartItems.reduce(
    (total, product) => total + product.price * product.quantity,0
  )
  return (
    <>
    {/* heading cart summary */}
      <div className='bg-white rounded-2xl shadow-md p-4 sm:p-5 md:p-6 h-fit'>
        <h2 className=' text-xl sm:text-2xl font-bold mb-5 sm:mb-6'>
          Cart Summary
        </h2>

      {/* display the total number of items */}
        <div className='flex justify-between mb-3 text-sm sm:text-base'>
          <span>Items</span>
          <span>{totalItems}</span>
        </div>

        {/* display the subtotal of all the cart item */}
         <div className='flex justify-between mb-3 text-sm sm:text-base'>
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div> 

        {/* display the final total price */}
         <div className='flex justify-between border-t pt-4 text-lg sm:text-xl font-bold'>
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>   

        {/* navigate to the checkout page */}
       <Link 
       to="/checkout"
       className='block text-center w-full mt-5 sm:mt-6 bg-green-900  text-white py-3 rounded-lg hover:bg-gray-800 transition'
       >
        Checkout
         </Link> 
      </div>
    </>
  )
}

export default CartSummary
