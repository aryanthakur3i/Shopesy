import { createSlice } from "@reduxjs/toolkit";

const wishlist = createSlice({
    name : "wishlist",
    initialState : {
        items :[],
    },

    reducers : {
            addTOWhishlist : (state , action ) => {
                const product = action.payload;

                const alreadyExists = state.items.some(
                    (item) => item.id === product.id
                );

                if(!alreadyExists){
                    state.items.push(product)
                }
            },

            removeFromWishlist : (state , action ) =>{
                state.items = state.items.filter(
                    (item) => item.id !== action.payload
                );
            },
    },
});

export const {
    addTOWhishlist,
    removeFromWishlist
} = wishlist.actions;

export default wishlist.reducer;