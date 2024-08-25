import { useEffect, useState } from "react";
const useRestaurantMenu=(resId)=>{

    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);
    
    async function fetchMenu(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.50330&lng=80.64650&restaurantId="+resId+"&catalog_qa=undefined&query=PUNUGULU&submitAction=ENTER");
        const json= await data.json();
        console.log(json);
        setResInfo(json.data);
    }
    return resInfo;
    
}


export default useRestaurantMenu;
