import { createSlice } from "@reduxjs/toolkit";

// load previously saved wishlist item from local storage
const savedWishlist = JSON.parse(localStorage.getItem("wishlistItem")) || [];

// create a redux slice to manage wishlist state
const wishlist = createSlice({
  name: "wishlist",
  initialState: {
    items: savedWishlist,
  },

  reducers: {
    // add a product to the wishlist
    addTOWhishlist: (state, action) => {
      const product = action.payload;

      // check if the product is already in the wishlist
      const alreadyExists = state.items.some((item) => item.id === product.id);

      // add the product only if it is not already present
      if (!alreadyExists) {
        state.items.push(product);
      }

      // save updated wishlist to local storage
      localStorage.setItem("wishlistItem", JSON.stringify(state.items));
    },

    // remove a product from the wishlist
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      // save updated wishlist to local storage
      localStorage.setItem("wishlistItem", JSON.stringify(state.items));
    },
  },
});

// export wishlist action
export const { addTOWhishlist, removeFromWishlist } = wishlist.actions;

// export wishlist reducer for the redux store
export default wishlist.reducer;
