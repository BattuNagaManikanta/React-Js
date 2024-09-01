import { useState } from "react";
import ItemsList from "./ItemsList";
const RestaurantCategory=({data ,showItems,setShowIndex})=>{
    // console.log(data);
    // const [showItems,setShowItems]=useState(false);
    const {itemCards}=data;
    // console.log(showItems);
    

    const handleAccordion=()=>{
        // console.log("Clicked");
        setShowIndex();
    }
    return(
        <div className="w-6/12 bg-slate-300 mx-auto m-3 p-2 shadow-lg">
            <div className="flex justify-between font-bold cursor-pointer" onClick={handleAccordion}>
                <span>{data.title} ({itemCards.length})</span>
                <span>⬇️</span>
            </div>
            <div>
                {showItems && <ItemsList items={itemCards}/>}
            </div>
        </div>
    );
}

export default RestaurantCategory;