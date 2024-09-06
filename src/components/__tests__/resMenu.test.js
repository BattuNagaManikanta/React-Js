import Header from "../Header"
import {render,screen,act, fireEvent} from "@testing-library/react";
import {MOCK_DATA} from "../mocks/mockResMenuList"
import RestaurantMenu from "../RestaurantMenu"
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore"
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart"
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should render Restaurant Menu Component",async()=>{
    await act(async ()=> render(
        <Provider store={appStore}>
            <BrowserRouter>
                <RestaurantMenu/>
                <Header/>
                <Cart/>
            </BrowserRouter>
        </Provider>
    ))
    const accordionHeader=screen.getByText("Bucket 4 Person (11)")
    expect(accordionHeader).toBeInTheDocument();
    fireEvent.click(accordionHeader);
    const menuCards=screen.getAllByTestId("menuCards");
    expect(menuCards.length).toBe(11);
    const addButtons=screen.getAllByText("ADD +");
    expect(addButtons.length).toBe(11);
    fireEvent.click(addButtons[0]);
    fireEvent.click(addButtons[0]);
    const cart=screen.getByText("Cart - (2 items)")
    expect(cart).toBeInTheDocument();
    fireEvent.click(cart);
    expect(screen.getAllByTestId("menuCards").length).toBe(13); 
    const clearCart=screen.getByText("ClearCart");
    fireEvent.click(clearCart);
    expect(screen.getAllByTestId("menuCards").length).toBe(11);
})