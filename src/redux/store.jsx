import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import cartReducer from "./CartSlice";
import wishlistReducer from "./WishlistSlice";

// create the redux store
export const store = configureStore({
  // Register all reducers
  reducer: {
    // manage product data and API states
    products: productsReducer,
    // manage cart item and quantity
    cart: cartReducer,
    // manage wishlist item
    wishlist: wishlistReducer,
  },
});
