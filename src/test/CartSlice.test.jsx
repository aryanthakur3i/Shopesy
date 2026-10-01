import { describe, it, expect, beforeEach } from "vitest";
import reducer, {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/CartSlice";

const product = {
  id: 1,
  title: "Test Product",
  price: 29.99,
};

describe("CartSlice", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // test 1
  it("returns the initial cart state", () => {
    const state = reducer(undefined, { type: "unknown" });

    expect(state).toEqual({
      items: [],
    });
  });

  // test 2
  it("add a new product to the cart with quantity 1", () => {
    const state = reducer({ items: [] }, addToCart(product));
    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toEqual({
      ...product,
      quantity: 1,
    });
  });

  // test 3
  it("increases quantity when the same product is added again", () => {
    const stateWithProduct = {
      items: [
        {
          ...product,
          quantity: 1,
        },
      ],
    };

    const state = reducer(stateWithProduct, addToCart(product));

    expect(state.items).toHaveLength(1);
    expect(state.items[0].quantity).toBe(2);
  });

  // test 4
  it("remove a product from the cart", () => {
    const stateWithProduct = {
      items: [
        {
          ...product,
          quantity: 1,
        },
        {
          id: 2,
          title: "Another Product",
          price: 10,
          quantity: 1,
        },
      ],
    };

    const state = reducer(stateWithProduct, removeFromCart(1));

    expect(state.items).toHaveLength(1);
    expect(state.items[0].id).toBe(2);
  });

  // test 5
  it("increases and decreases product quantity ", () => {
    let state = {
      items: [
        {
          ...product,
          quantity: 1,
        },
      ],
    };

    state = reducer(state, increaseQuantity(1));

    expect(state.items[0].quantity).toBe(2);
    state = reducer(state, decreaseQuantity(1));
    expect(state.items[0].quantity).toBe(1);
  });
});



