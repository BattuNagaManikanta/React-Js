import Body from "../Body"
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockSearchResList.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should Search resList with name KFC", async()=>{
     await act(async ()=>render(<BrowserRouter><Body/></BrowserRouter>));
    const btn=screen.getByRole("button",{name: "Search"});

    const cardsBefore=screen.getAllByTestId("resCard")
    // console.log(cardsBefore.length);
    
    expect(cardsBefore.length).toBe(14);

    const search=screen.getByTestId("searchTab");

    fireEvent.change(search,{target:{value:"ghiza"}});
    fireEvent.click(btn)

    // const cards=screen.getAllByTestId("resCard");

    // // console.log(cards);
    
    // expect(cards.length).toBe()
})

it("should filter Top rated restaurants",async ()=>{
    await act(async ()=>{
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    })

    const resCards=screen.getAllByTestId("resCard");
    expect(resCards.length).toBe(14);

    const topResbtn=screen.getByRole("button",{name: "Filter Restaurant"});
    fireEvent.click(topResbtn);
    const topResCards=screen.getAllByTestId("resCard");
    expect(topResCards.length).toBe(6);
})

