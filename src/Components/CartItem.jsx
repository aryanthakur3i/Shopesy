import React from 'react'
import { useDispatch } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/CartSlice'
const CartItem = ({product}) => {

    const dispatch = useDispatch()
  return (
    <>
      <div className='bg-white rounded-xl shadow-md p-5 flex gap-5 items-center'>

        {/*Product Image */}

        <div className='w-28 h-28 flex-shrink-0 flex items-center justify-center '>
            <img
            src={product.image}
            alt={product.title}
            className='h-full w-full object-contain'
            />
        </div>

        {/*product Details */}

        <div className='flex-1'>
            <h2 className='font-semibold text-lg line-clamp-2'>
                {product.title}
            </h2>

            <p className='text-gray-500 text-sm mt-1 capitalize'>
                {product.category}
            </p>

            <p className='font-bold text-xl mt-2'>
                ${product.price}
            </p>

            {/* Quantity */}

            <div className='flex items-center gap-3 mt-3'>
                <button onClick={() => dispatch(decreaseQuantity(product.id))} className='border border-gray-300 px-3 py-1 rounded-md'>-</button>
                <span className='font-semibold'>
                    {product.quantity}
                </span>

                <button onClick={() => dispatch(increaseQuantity(product.id))} className='border border-gray-300 px-3 py-1 rounded-md'>+</button>

            </div>
        </div>

        {/*Remove */}

        <button  onClick={() => dispatch(removeFromCart(product.id))} className='text-red-500 hover:text-red-700 font-semibold'>Remove</button>
      </div>
    </>
  )
}

export default CartItem;
