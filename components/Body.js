import resList from "../Utils/mockdata"
import Restaurantcard from "./Restaurantcard"

const Body=()=>{
    return (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search here"/>Search
            </div>
            <div className="res-container">
                {resList.map((restaurant)=>{
                    {console.log(restaurant.card.card.info.cloudinaryImageId)}
                    return <Restaurantcard key={restaurant.card.card.info.id} restaurant={restaurant}/>

                })}
            </div>
        </div>
    )
}

export default Body;