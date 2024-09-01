import { useEffect,useState } from "react";

const useRestaurantCard=()=>{
    const [resLists,setResLists]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    async function fetchData() {
        const data1=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.50330&lng=80.64650&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const data2=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.50330&lng=80.64650&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const resList1=await data1.json();
        const resList2=await data2.json();
        const filteredList1=resList1.data.cards.filter((card,index)=> index>2 ? true: false);
        const filteredList2=resList2.data.cards.filter((card,index)=> index>2 ? true: false);
        const merged=[...filteredList1, ...filteredList2];
        setResLists(merged);   
    }

    return resLists;
}

export default useRestaurantCard;