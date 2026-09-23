import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "./productsSlice"
import cartReducer from "./CartSlice"
import wishlistReducer from "./WishlistSlice"

export const store  = configureStore({
    reducer : {
         products : productsReducer,
        cart : cartReducer,
        wishlist : wishlistReducer,
    },
   
});

