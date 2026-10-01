import { describe , it , expect, beforeEach } from "vitest";
import reducer , { addTOWhishlist , removeFromWishlist} from "../redux/WishlistSlice";

const product = {
    id: 1,
    tittle: "Test Product",
    price: 29.99,
}

describe("WishlistSlice", () => {
    beforeEach(() => {
        localStorage.clear()
    })

    //test 1
    it("returns the initial wishlist state " , () =>{
       const state = reducer(undefined , {type: "unknown"})

       expect(state).toEqual({
        items: [],
       })
    })

    // test 2
    it("adds a product to the wishlist " , () =>{
        const state = reducer(
            { items: []},
            addTOWhishlist(product)
        )

        expect(state.items).toHaveLength(1)
        expect(state.items[0]).toEqual(product)
    })

    //test 3
    it("does not add the same product twice " , () =>{
        const stateWithProduct = {
           items: [product],
        }

            const state = reducer(
                stateWithProduct,
                addTOWhishlist(product)
            )
        expect(state.items).toHaveLength(1)
        expect(state.items[0]).toEqual(product)
    })

    //test 4
    it("remove a product from wishlist " , () =>{
          const stateWithProduct = {
           items: [product,
            {
                id: 2,
                title: "Another Product",
                price: 10,
            },
           ],
        }

            const state = reducer(
                stateWithProduct,
                removeFromWishlist(product.id)
            )

        expect(state.items).toHaveLength(1)
        expect(state.items[0].id).toBe(2)
    })
})