import { useDispatch } from "react-redux";
import { IMG_URL } from "../Utils/constants";
import { addItems } from "../Utils/cartSlice";

const ItemsList=({items})=>{
    // console.log(items);

    const dispatch=useDispatch();
    return(
        <div>
            {items.map((item)=>{
                return (
                    <div data-testid="menuCards" key={item?.card?.info?.id} className="p-2 m-2 text-left border-gray-400 border-b-2 flex justify-between">
                        <div className="w-9/12">
                            <div className="my-2">
                                <span>{item?.card?.info?.name}</span>
                                <span>&nbsp; ₹ {item?.card?.info?.price ? item?.card?.info?.price/100:item?.card?.info?.defaultPrice/100 }</span>
                            </div>
                            <p className="text-xs">
                                {item?.card?.info?.description}.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute cursor-pointer bg-white m-2 p-1  rounded-lg text-green-600 left-14 bottom-[-14px] text-xs" onClick={()=>{
                                dispatch(addItems(item));
                            }}> 
                                ADD +
                            </div>
                            <img src={IMG_URL+item?.card?.info?.imageId} alt={item?.card?.info?.name} className="w-28 h-28 object-cover mx-8"/>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default ItemsList;