import Restaurantcard, { restaurantCardPromoted } from "./Restaurantcard";
import { useState,useEffect, useContext } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import useRestaurantCard from "../Utils/useRestaurantCard";
import userContext from "../Utils/userContext";

const Body=()=>{
    const [filterdList,setFilterdList]=useState([]);
    const [searchValue,setSearchValue]=useState("");
    const onlineStatus=useOnlineStatus();
    const RestaurantCardPromoted=restaurantCardPromoted(Restaurantcard);
    const resLists=useRestaurantCard();
    // console.log(resLists);
    
    const {loggedInUser,setUser}=useContext(userContext);
    // console.log(loggedInUser,setUser);

    useEffect(()=>{
        setFilterdList(resLists);
    },[resLists]);
      
    

    if(filterdList.length ==0){
        return (<Shimmer/>)
    }
    
    if(onlineStatus==false){
        // console.log(onlineStatus);
        
        return (
            <h1>Hey you are offline please check ypur internet connection</h1>
        )
    }

    

    return (
        <div className="mt-52">
            <div className="flex justify-around">
                <div>
                    <input data-testid="searchTab" value={searchValue} className="border-2 border-black" type="text" placeholder="Search" onChange={(e)=>{
                        // console.log(e.target.value);
                        setSearchValue(e.target.value);
                    }}/>
                    <button className="m-1 px-2 py-1 bg-green-500 text-black" onClick={()=>{
                        let filteredList=resLists.filter((restaurant)=>{
                            // console.log(resLists);
                            // console.log(searchValue);
                            return restaurant.card.card.info.name.toLowerCase().includes(searchValue.toLowerCase());
                        })
                        // console.log(filteredList);
                        setFilterdList(filteredList);
                    }}>Search</button>
                </div>
                <div>
                    <input className="border border-black p-2" type="text" value={loggedInUser} onChange={(e)=>{
                        setUser(e.target.value)}}></input>
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
                {filterdList.map((restaurant,index)=>{
                    // console.log(restaurant.card.card.info.promoted);
                    return <Link key={index} to={"/restaurants/"+ restaurant.card.card.info.id}> 
                    {
                        restaurant?.card?.card?.info?.promoted ? <RestaurantCardPromoted restaurant={restaurant}/> : <Restaurantcard restaurant={restaurant}/>
                    }
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Body;