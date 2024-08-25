import { IMG_URL } from "../Utils/constants";

const Restaurantcard=({restaurant})=>{
    
    return (
        <div className="m-4 p-2 bg-gray-200 w-56 h-max">
            <img className="w-52 object-cover h-44" src={IMG_URL+restaurant.card.card.info.cloudinaryImageId}/>
            <h4 className="font-bold text-lg leading-5 mt-3 hover:">{restaurant.card.card.info.name}</h4>
            <h4>{(restaurant.card.card.info.cuisines).join(", ")}</h4>
            <h4> {restaurant.card.card.info.costForTwo} </h4>
            <h5>{restaurant.card.card.info.avgRating}</h5>
        </div>
    )
}

export default Restaurantcard;