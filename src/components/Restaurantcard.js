import { useContext } from "react";
import { IMG_URL } from "../Utils/constants";
import userContext from "../Utils/userContext";


const Restaurantcard=({restaurant})=>{
    // console.log(restaurant);
    const data=useContext(userContext)
    return (
        <div data-testid="resCard" className="h-96 m-4 p-2 bg-gray-200 w-56">
            <img className="w-52 object-cover h-44" src={IMG_URL+restaurant.card.card.info.cloudinaryImageId}/>
            <h4 className="font-bold text-lg leading-5 mt-3 hover:">{restaurant.card.card.info.name}</h4>
            <h4>{(restaurant.card.card.info.cuisines).join(", ")}</h4>
            <h4> {restaurant.card.card.info.costForTwo} </h4>
            <h5>{restaurant.card.card.info.avgRating}</h5>
            <h5>{data.loggedInUser}</h5>
        </div>
    )
}

export const restaurantCardPromoted=(Restaurantcard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute m-2 p-2 bg-black text-white">Promoted</label>
                <Restaurantcard {...props}/>
            </div>
        )      
    }
}

export default Restaurantcard;