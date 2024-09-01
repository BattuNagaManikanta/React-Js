import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../Utils/appStore";
import { RouterProvider } from "react-router-dom";
import "@testing-library/jest-dom"


test('should load header component', () => {
        
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginButton=screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();
 })

 it("should render header component with cart 0 items",()=>{

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const cartButton=screen.getByText("Cart - (0 items)");

    expect(cartButton).toBeInTheDocument();

 })

 it("should render header component with cart 0 items",()=>{

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const cartButton=screen.getByText("Cart - (0 items)");

    expect(cartButton).toBeInTheDocument();

 })

 it("should render header component with logout on click",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    // const cartButton=screen.getByText("Cart - (0 items)");
    const loginButton = screen.getByRole("button",{name: "Login"});
    fireEvent.click(loginButton);
    const logoutButton=screen.getByRole("button", {name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
 })