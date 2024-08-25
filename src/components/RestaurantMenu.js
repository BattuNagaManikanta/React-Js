import { useState,useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu=()=>{
    const {resId}=useParams();

    const resInfo=useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer/>

    const{ name, costForTwoMessage,cuisines}=resInfo?.cards[2]?.card?.card?.info;

    const {itemCards}= (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card == undefined ? resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0] :  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card );


    console.log(name,costForTwoMessage,cuisines,itemCards);
    

    return (
        <div>
            <h1>
                {name}
            </h1>
            <p>
                {costForTwoMessage}
            </p>
            <p>
                {cuisines.join(", ")}
            </p>
            {itemCards.map((item)=>{
                return (<li key={item.card.info.id}>{item.card.info.name} --Rs:  {item.card.info.price/100}</li>)
            })}
        </div>
    )
}

export default RestaurantMenu;