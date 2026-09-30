import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create an aysn thunk to fetch products from the API
export const fetchProducts = createAsyncThunk("fetchProducts", async (_, {rejectWithValue}) => {
  try {
  //fetch product data  from the fake store API
  const response = await fetch("https://fakestoreapi.com/products?limit=150");

  //check whether the API request was successfull
  if(!response.ok){
    throw new Error("Failed to fetch Products")
  }
  //convert the API response into JSON
  const data = await response.json();

  // return the product data to redux 
  return data;
}catch(error){
  //send the error message to the rejected state
  return rejectWithValue(error.message)
  }
 }
);






// create a redux slice to manage products data
const productsSlice = createSlice({
  name: "products",
  //initial state for the product
  initialState: {
    isLoading: false,
    data: [],
    error: false,
  },
  // handles different state of the asyn product request
  extraReducers: (builder) => {
    //  run while the API progress is in request
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    // run when the API request is successfull
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = false
    });
    // run when the API requeest fails
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false
      state.error = true;
    });
  },
});

// export the product reducer from the redux store
export default productsSlice.reducer;
