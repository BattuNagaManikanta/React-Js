import { useState,useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu=()=>{
    const {resId}=useParams();
    const [showIndex,setShowIndex]=useState(null);
    const [showAccordion,setShowAccordion]=useState(null);
    const resInfo=useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer/>

    const{ name, costForTwoMessage,cuisines,uniqueId}=resInfo?.cards[2]?.card?.card?.info;

    // const itemcards= (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards) == undefined ? resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[3]?.card?.card?.itemCards : resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.itemCards;
    
    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(resInfo);
    

    // console.log(itemcards);
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
    

    return (
        <div className="m-4 p-4 text-center ">
            <h1 className="text-lg my-10 font-bold">
                {name}
            </h1>
            <p>
                {cuisines.join(", ")}-{costForTwoMessage}
            </p>
            {
                // categories accordion
            }
            <div  className="my-7">
                {
                    categories.map((category, index)=>{
                        return <RestaurantCategory data={category?.card?.card} setShowIndex={()=>{
                                if(index == showIndex)
                                    setShowIndex(null);
                                else
                                    setShowIndex(index);
                            }
                        } 
                            showItems={(index==showIndex) ? true :false
                        } />
                    })
                }
            </div>
        </div>
    )
}

export default RestaurantMenu;