import { createSlice } from "@reduxjs/toolkit";


  const CartSlice = createSlice({
    name: 'cart',
    initialState: {
      items: [],
    },

    reducers: {
      addToCart: (state, action) => {
        const product = action.payload;

        const existingProduct = state.items.find(
          (item) => item.id === product.id,
        );

        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          state.items.push({
            ...product,
            quantity: 1,
          });
        }
      },
    

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    increaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload);

      if (product) {
        product.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    },
  });

  export const{
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  } = CartSlice.actions;



export default CartSlice.reducer;
