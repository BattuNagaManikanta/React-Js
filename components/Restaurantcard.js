import { IMG_URL } from "../Utils/constants";

const Restaurantcard=({restaurant})=>{
    
    return (
        <div className="res-card">
            <img className="res-image" src={IMG_URL+restaurant.card.card.info.cloudinaryImageId}/>
            <h4>{restaurant.card.card.info.name}</h4>
            <h4>{(restaurant.card.card.info.cuisines).join(", ")}</h4>
            <h4> {restaurant.card.card.info.costForTwo} </h4>
            <h5>{restaurant.card.card.info.avgRating}</h5>
        </div>
    )
}

export default Restaurantcard;