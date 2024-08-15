import Restaurantcard from "./Restaurantcard";
import { useState,useEffect } from "react";
import { Shimmer } from "./Shimmer";

const Body=()=>{

    const [resLists,setResLists]=useState([]);
    const [filterdList,setFilterdList]=useState([]);
    const [searchValue,setSearchValue]=useState("");

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
        setFilterdList(merged)
        
    }

    if(resLists.length ==0){
        return (<Shimmer/>)
    }

    return (
        <div className="body">
            <div className="search-container">
                <div>
                    <input type="text" placeholder="Search" onChange={(e)=>{
                        console.log(e.target.value);
                        setSearchValue(e.target.value);
                    }}/>
                    <button onClick={()=>{
                        let filteredList=resLists.filter((restaurant)=>{
                            return restaurant.card.card.info.name.toLowerCase().includes(searchValue.toLowerCase());
                        })
                        setFilterdList(filteredList);
                        
                    }}>Search</button>
                </div>
                {/* <input type="text" placeholder="Search here"/>Search */}
                <button onClick={()=>{
                    let filteredList = resLists.filter((restaurant)=>{
                        return restaurant.card.card.info.avgRating > 4.2;
                         
                    })
                    // console.log(filteredList);
                    setFilterdList(filteredList);
                }}>Filter Restaurant</button>
            </div>
            <div className="res-container">
                {filterdList.map((restaurant)=>{
                    return <Restaurantcard key={restaurant.card.card.info.id} restaurant={restaurant}/>
                })}
            </div>
        </div>
    )
}

export default Body;