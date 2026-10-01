import { describe , it  , expect, vi , beforeEach } from "vitest";
import reducer,{fetchProducts} from "../redux/productsSlice";

describe("productsSlice" , () =>{
    //clear all mock before test
    beforeEach(() => {
        vi.restoreAllMocks()
    })

    // test 1 check the initial redux state
    it("returns the initial state " , () => {
        const state  = reducer(undefined, {type : "unknown"})

        // check whether the initail state is correct
        expect(state).toEqual({
            isLoading: false,
            data : [],
            error : false,
        })
    })

    // test 2 check loading state when API request starts
    it("sets loading state when fetchProduct is pending", () => {
        const state = reducer(undefined, {
            type: fetchProducts.pending.type,
        })

        //API request should be in loading state 
        expect(state.isLoading).toBe(true)

        //there should be on error while loading
        expect(state.error).toBe(false)
    })

    // test 3 check successfull Api response
    it("store products when API request is succesfull" , ()=>{
        //Mock product data returned by the API
        const products = [
            {
                id: 1,
                title: "Test Product",
                price : 29.99,
            },
            {
                id: 2,
                title: "Another Product",
                price : 10,
            }
        ];

        const state = reducer(undefined,{
            type: fetchProducts.fulfilled.type,
            payload: products,
        });

        expect(state.isLoading).toBe(false)
        expect(state.data).toEqual(products)
        expect(state.error).toBe(false)
    })

    // test-4 check api error state
    it("sets error state when API request fail", ()=> {
        const state = reducer(undefined, {
            type: fetchProducts.rejected.type,
            payload: "Failed to fetch product"
        })

        expect(state.isLoading).toBe(false)
        expect(state.error).toBe(true)
    })
})