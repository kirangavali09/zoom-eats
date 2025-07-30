
import { FaStar } from "react-icons/fa";
import { IMAGE_BASE_URL } from "./../utils/constants";

const RestaurantCard = (props) => {
    const { name, avgRating, cuisines, sla, areaName, cloudinaryImageId} = props.restaurantData;

    return (
        <div className="w-full md:w-72 p-4  rounded-lg shadow-xl max-w-sm max-lg:mx-auto">
            <div className="w-full md:w-64 h-60 lg:h-44">
                <img src={IMAGE_BASE_URL + cloudinaryImageId} className="w-full h-full object-cover rounded-md"/>
            </div>
            <div className="content mt-4">
                <h2 className="text-lg font-semibold line-clamp-2">{name}</h2>
                <div className="flex gap-2">
                    <span className="flex items-center gap-2 font-semibold">
                        <FaStar className="bg-green-600 text-white text-xl rounded-full p-1" /> <span>{avgRating}</span>
                    </span>
                    <span className="font-semibold"> &#x2022; {sla.slaString}</span>
                </div>
                <div className="text-zinc-500 line-clamp-1">
                   { cuisines.join(", ") }
                </div>
                <div className="text-zinc-500">
                    {areaName}
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard;