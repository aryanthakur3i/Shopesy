import React from "react";
import { describe , it , expect , vi } from "vitest";
import { render , screen , fireEvent } from "@testing-library/react";
import CheckoutForm from "../Components/checkout/CheckoutForm";

describe("CheckoutForm" , () => {
    //Test 1
    it("renders all checkout from feilds " , () => {
        render(<CheckoutForm/>)

        expect(screen.getByPlaceholderText("Full Name")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Phone Number")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("House / Flat no-")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Street / Area")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("City")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Pincode")).toBeInTheDocument()

        expect(screen.getByRole("button", {name: "Continue"})).toBeInTheDocument()
    })

    // test 2
    it("show validation error when form is submitted empty " , () => {
        render(<CheckoutForm/>)

        const button = screen.getByRole("button",{
            name: "Continue",
        })

        fireEvent.click(button)

        expect(screen.getByText("Full name is required")).toBeInTheDocument()
        expect(screen.getByText("Phone number is required")).toBeInTheDocument()
        expect(screen.getByText("House / flat is required")).toBeInTheDocument()
        expect(screen.getByText("street / area is required")).toBeInTheDocument()
        expect(screen.getByText("city is required")).toBeInTheDocument()
        expect(screen.getByText("pincode is required")).toBeInTheDocument()

       
    })

    // test 3
    it("show validation error for invalid phone and pincode " , () => {
        render(<CheckoutForm/>)

        fireEvent.change(screen.getByPlaceholderText("Full Name") , {
            target: { value: "Test User"}
        })

         fireEvent.change(screen.getByPlaceholderText("Phone Number") , {
            target: { value: "12345"}
        })

         fireEvent.change(screen.getByPlaceholderText("House / Flat no-") , {
            target: { value: "12"}
        })

         fireEvent.change(screen.getByPlaceholderText("Street / Area") , {
            target: { value: "Test Street"}
        })

         fireEvent.change(screen.getByPlaceholderText("City") , {
            target: { value: "Pune"}
        })

         fireEvent.change(screen.getByPlaceholderText("Pincode") , {
            target: { value: "123"}
        })

        fireEvent.click(screen.getByRole("button", {name: "Continue"}))

        expect(screen.getByText("Enter a valid 10 digit number")).toBeInTheDocument()
        expect(screen.getByText("enter valid 6 digit pincode")).toBeInTheDocument()
    })

    // test 4
    it("submit successfully with valid checkout details " , () => {

       

        const alertSpy = vi.spyOn(window,"alert").mockImplementation(()=> {})

        render(<CheckoutForm/>)

        fireEvent.change(screen.getByPlaceholderText("Full Name") , {
            target: { value: "Test User"}
        })

         fireEvent.change(screen.getByPlaceholderText("Phone Number") , {
            target: { value: "1234567890"}
        })

         fireEvent.change(screen.getByPlaceholderText("House / Flat no-") , {
            target: { value: "12"}
        })

         fireEvent.change(screen.getByPlaceholderText("Street / Area") , {
            target: { value: "Test Street"}
        })

         fireEvent.change(screen.getByPlaceholderText("City") , {
            target: { value: "Pune"}
        })

         fireEvent.change(screen.getByPlaceholderText("Pincode") , {
            target: { value: "123456"}
        })

        fireEvent.click(screen.getByRole("button", {name: "Continue"}))

        
        expect(alertSpy).toHaveBeenCalledWith("Delivery details saved successfully" );

   
    alertSpy.mockRestore();
    })
})