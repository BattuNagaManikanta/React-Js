import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("Contact Component is rendered",()=>{
    render(<Contact/>)

    const heading=screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

test("Input boxes are must be two",()=>{
    render(<Contact/>)

    const inputs=screen.getAllByRole("textbox");
    expect(inputs.length).toBe(2);
})

test("Placeholder of an input box is name",()=>{
    render(<Contact/>) 
    const inputName=screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
})