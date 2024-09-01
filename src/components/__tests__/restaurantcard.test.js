import { render, screen } from "@testing-library/react"
import Restaurantcard from "../Restaurantcard"
import MOCK_DATA from "../mocks/restaurantcardmocks.json"
import MOCK_DATA2 from "../mocks/promotedrestaurantcard.json"
import "@testing-library/jest-dom"
import { restaurantCardPromoted } from "../Restaurantcard"

it("should render restaurant card component with props data",()=>{
    render(<Restaurantcard restaurant={MOCK_DATA}/>);
    const name=screen.getByText("KFC");
    expect(name).toBeInTheDocument();
})

it("should render Restaurant card component with Promoted label",()=>{
    const PromotedCard=restaurantCardPromoted(Restaurantcard);

    render(<PromotedCard restaurant={MOCK_DATA2}/>);
    const promote=screen.getByText("Promoted");
    console.log(promote);
    
    expect(promote).toBeInTheDocument();

})