import { createSlice } from "@reduxjs/toolkit";

// load previously saved cart items from local storage
const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

// create a redux slice to manage cart state
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: savedCart,
  },

  reducers: {
    // add a product to the cart
    addToCart: (state, action) => {
      const product = action.payload;

      // check if the existing product is already in the cart
      const existingProduct = state.items.find(
        (item) => item.id === product.id,
      );

      if (existingProduct) {
        // increse quantity if the product already exixts
        existingProduct.quantity += 1;
      } else {
        // add the product with an initial quantity of 1
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
      // saved updated cart to localstorage
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    // remove a product from the cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      // saved updated cart to localstorage
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    // increase the quantity of the product
    increaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload);

      if (product) {
        product.quantity += 1;
      }

      // saved updated cart to localstorage
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    // decrease the quantity of the product
    decreaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
      // saved updated cart to localstorage
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

// export cart action for use in component
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;

//export cart reducer
export default CartSlice.reducer;
