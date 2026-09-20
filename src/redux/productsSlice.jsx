import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchProducts" , async() =>{
    const data = await fetch('https://fakestoreapi.com/products?limit=150')
    return data.json()
}
)

const productsSlice = createSlice({
    name : 'products',
    initialState :{
        isLoading : false,
        data : [],
        error : false
        
        
    },
    extraReducers : (builder) => {
        builder.addCase(fetchProducts.pending , (state ,action) => {
            state.isLoading = true
        });
        builder.addCase(fetchProducts.fulfilled , (state , action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(fetchProducts.rejected , (state , action) => {
            state.error = true;
        })
    }
})
export default productsSlice.reducer;