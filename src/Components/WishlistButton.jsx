import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { FaHeart , FaRegHeart } from 'react-icons/fa'
import { addTOWhishlist , removeFromWishlist } from '../redux/WishlistSlice'

const WishlistButton = ({product}) => {

    const dispatch = useDispatch()

    const wishlistItems = useSelector(
        (state) => state.wishlist.items
    );

    const iswishlisted = wishlistItems.some(
        (item)=> item.id === product.id
    );

    const handleWishlist = () =>{
        if(iswishlisted){
            dispatch(removeFromWishlist(product.id))
        }
        else{
            dispatch(addTOWhishlist(product))
        }
    };
  return (
    <>
      <button onClick={handleWishlist} className='text-2xl'>
        {iswishlisted ? ( <FaHeart className='text-red-500'/> ) : (<FaRegHeart/>)}
      </button>
    </>
  )
}

export default WishlistButton
