import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const WishlistIcon = () => {

    const wishlistItems = useSelector(
        (state) => state.wishlist.items
    );

    const wishlistCount = wishlistItems.length;
  return (
    <>
      <Link to='/wishlist' className='relative' >
      <FaHeart className='text-2xl text-red-500'/>
      <span className='bg-red-5 rounded-full absolute -top-3 -right-3 text-white text-sm'>
        {wishlistCount}
      </span>
      </Link>
    </>
  );
}

export default WishlistIcon;
