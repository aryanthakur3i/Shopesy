import React from "react";
import { describe, it, expect , vi } from "vitest";
import { render , screen , fireEvent } from "@testing-library/react";
import PaymentMethod from "../Components/checkout/PaymentMethod";

describe("PaymentMethod" , () => {
    // test 1 checked all payment oftions are displayed
    it("renders all payment options" , () => {
        render(
            <PaymentMethod 
            paymentMethod=""
            setPaymentMethod={vi.fn()}
            error=""
            />
        )

        // check cash on delivery option
        expect(screen.getByText("Cash on Delivery")).toBeInTheDocument()
        // check upi
        expect(screen.getByText("UPI")).toBeInTheDocument()
        // credit and debit cart
        expect(screen.getByText("Credit / Debit Card")).toBeInTheDocument()
    })

    // test 2 check whether selecting a payment method calls setpaymentmethod
    it("updates payment method when an option is selected" , () => {
        const setPaymentMethod = vi.fn()

        render(
            <PaymentMethod 
            paymentMethod=""
            setPaymentMethod={setPaymentMethod}
            error=""
            />
        )
        //find UPI radio button
        const upiRadio = screen.getByDisplayValue("upi")
        //select upi
        fireEvent.click(upiRadio)
        //check whether setter was called with upi
        expect(setPaymentMethod).toHaveBeenCalledWith("upi")
    })

    // test 3 check whether the payment validation error is diaplayed
    it("display payment validation error" , () => {
        render(
            <PaymentMethod 
            paymentMethod=""
            setPaymentMethod={vi.fn()}
            error="Please Select a payment method"
            />
        );

       // check error message
       expect(screen.getByText("Please Select a payment method")).toBeInTheDocument()
    })
} )
