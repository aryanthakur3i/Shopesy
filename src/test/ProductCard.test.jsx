import React from "react";
import { describe , it , expect , vi } from "vitest";
import { render , screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ProductCard from "../Components/ProductCard";

// mock chid component so productcard can be tested independently
vi.mock("../Components/WishlistButton", () => ({
    default: ({product})  => (
        <button data-testid = "wishlist-button">
            Wishlist {product.id}
        </button>
    ),
}));

vi.mock("../Components/AddToCartButton" , () => ({
    default: ({ product }) => (
        <button data-testid = "add-to-cart-button">
            Add {product.title}
        </button>
    ),
}));

// sample product used for testing
const product = {
    id:1,
    title: "Test Product",
    price: 29.99,
    description: " This is a test product description",
    image: "test-image.jpg",
    rating: {
        rate: 4.5,
        count: 100,
    },
};

describe("ProductCard", () => {
    // test 1  - product title should appear
    it("renders the product tittle" , () => {
        render(
            <MemoryRouter>
                <ProductCard product={product}/>
            </MemoryRouter>
        )

        expect(screen.getByText("Test Product")).toBeInTheDocument();
    })

     // test 2  - product price should appear
    it("renders the product price" , () => {
        render(
            <MemoryRouter>
                <ProductCard product={product}/>
            </MemoryRouter>
        )

        expect(screen.getByText("$29.99")).toBeInTheDocument();
    })

     // test 3  - product description should appear
    it("renders the product description" , () => {
        render(
            <MemoryRouter>
                <ProductCard product={product}/>
            </MemoryRouter>
        )

        expect(screen.getByText("This is a test product description")).toBeInTheDocument();
    })

     // test 4  - product image have correctly source and alt text
    it("renders the product image correctly" , () => {
        render(
            <MemoryRouter>
                <ProductCard product={product}/>
            </MemoryRouter>
        )

        const image = screen.getByAltText("Test Product")

        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute("src" , "test-image.jpg")
    })

     // test 5  - product rating should appear
    it("renders the product rating" , () => {
        render(
            <MemoryRouter>
                <ProductCard product={product}/>
            </MemoryRouter>
        )

        expect(screen.getByText("⭐4.5")).toBeInTheDocument();
    })

     // test 6  - product detail link should have point the correct product
    it("has the correct product details link" , () => {
        render(
            <MemoryRouter>
                <ProductCard product={product}/>
            </MemoryRouter>
        )
        const link = screen.getByRole("link")
        expect(link).toHaveAttribute("href" , "/product/1")
    })

    
     // test 7  - wishlist button should appear
    it("renders the wishlist button" , () => {
        render(
            <MemoryRouter>
                <ProductCard product={product}/>
            </MemoryRouter>
        )

        expect(screen.getByTestId("wishlist-button")).toBeInTheDocument();
    })

    
     // test 8  - add to cart button should render
    it("renders the add to cart button" , () => {
        render(
            <MemoryRouter>
                <ProductCard product={product}/>
            </MemoryRouter>
        )

        expect(screen.getByTestId("add-to-cart-button")).toBeInTheDocument();
    })
})





