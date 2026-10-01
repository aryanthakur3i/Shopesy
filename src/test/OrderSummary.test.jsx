import React from "react";
import { describe , it , expect , vi } from "vitest";
import { render,  screen , fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import OrderSummary from "../Components/checkout/OrderSummary";

describe("OrderSummary" , () => {
    // helper function to create  a test redux store
    const renderOrderSummary = (cartItems) => {
        //Create a simple redux store with cart items 
        const store  = configureStore({
            reducer: {
                cart: (state = {items : cartItems}) => state,
            },
        });

        // render Ordersummary with redux provider
        return render(
            <Provider store = {store}>
                <OrderSummary onPlaceOrder={vi.fn()}/>
            </Provider>
        )
    }

    // test 1 check cart product and quantity  are displayed
    it("render cart items with their quantites", () => {
        const cartItems = [
            {
                id: 1,
                title: "Test Product",
                price: 29.99,
                quantity: 2,
            }
        ];

        renderOrderSummary(cartItems);

        //check product title
        expect(screen.getByText("Test Product")).toBeInTheDocument()

         //check product quantity
        expect(screen.getByText("Qty : 2")).toBeInTheDocument()
    })

    // test 2 check total calculation including delivery fee
    it("calculates the total including delivery fee ", () => {
        const cartItems = [
            {
                id: 1,
                title: "Test Product",
                price: 20,
                quantity: 2,
            }
        ];

        renderOrderSummary(cartItems);

        //subtotal = 20 x 2 = 40
        //delivery fee = 50
        //final total = 40 + 50 = 90
        expect(screen.getByText("$90.00")).toBeInTheDocument()

    })   
    
    // test 3 check place order buttton functionality
    it("calls onPlaceOrder when Place Order is clicked ", () => {
        const onPlaceOrder = vi.fn()
        const cartItems = [
            {
                id: 1,
                title: "Test Product",
                price: 20,
                quantity: 1,
            }
        ];

        const store = configureStore({
            reducer: {
                cart:(state ={items: cartItems}) => state,
            },
        });

        render( 
            <Provider store ={store}>
                <OrderSummary 
                onPlaceOrder={onPlaceOrder}/>
            </Provider>
        );

        const button = screen.getByRole("button" , {
            name: "Place Order",
        })

        fireEvent.click(button)

        expect(onPlaceOrder).toHaveBeenCalledTimes(1)
    })
})