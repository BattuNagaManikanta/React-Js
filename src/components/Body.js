import Restaurantcard from "./Restaurantcard";
import { useState,useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body=()=>{

    const [resLists,setResLists]=useState([]);
    const [filterdList,setFilterdList]=useState([]);
    const [searchValue,setSearchValue]=useState("");
    const onlineStatus=useOnlineStatus();
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
        console.log(merged);
        
        setResLists(merged);
        setFilterdList(merged)
        
    }
      

    if(resLists.length ==0){
        return (<Shimmer/>)
    }

    if(onlineStatus==false){
        console.log(onlineStatus);
        
        return (
            <h1>Hey you are offline please check ypur internet connection</h1>
        )
    }

    

    return (
        <div className="mt-52">
            <div className="flex justify-around">
                <div>
                    <input className="border-2 border-black" type="text" placeholder="Search" onChange={(e)=>{
                        console.log(e.target.value);
                        setSearchValue(e.target.value);
                    }}/>
                    <button className="m-1 px-2 py-1 bg-green-500 text-black" onClick={()=>{
                        let filteredList=resLists.filter((restaurant)=>{
                            return restaurant.card.card.info.name.toLowerCase().includes(searchValue.toLowerCase());
                        })
                        setFilterdList(filteredList);
                        
                    }}>Search</button>
                </div>
                {/* <input type="text" placeholder="Search here"/>Search */}
                <button className="m-1 px-2 py-1 bg-gray-500 text-white" onClick={()=>{
                    let filteredList = resLists.filter((restaurant)=>{
                        return restaurant.card.card.info.avgRating > 4.2;
                         
                    })
                    // console.log(filteredList);
                    setFilterdList(filteredList);
                }}>Filter Restaurant</button>
            </div>
            <div className="flex flex-wrap mx-20">
                {filterdList.map((restaurant)=>{
                    console.log(restaurant.card.card.info.id);
                    return <Link key={restaurant.card.card.info.id} to={"/restaurants/"+ restaurant.card.card.info.id}> <Restaurantcard restaurant={restaurant}/> </Link>
                })}
            </div>
        </div>
    )
}

export default Body;