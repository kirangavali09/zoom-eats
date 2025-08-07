import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_DETAIL_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { FaStar } from "react-icons/fa";

const RestaurantDetail = () => {
    const { restaurantId } = useParams();
    const [ restaurantData, setRestaurantData] = useState([]);

    const fetchRestaurantData = async () => {
        let restaurantData = await fetch(RESTAURANT_DETAIL_API_URL + restaurantId)
        let restaurantJson = await restaurantData.json();

        setRestaurantData(restaurantJson); 
    }

    useEffect(() => {
        fetchRestaurantData();
    }, [])

    if (restaurantData.length == 0) return  <Shimmer />;

    console.log(restaurantData?.data?.cards[2]?.card?.card?.info);
    let {avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName, sla} = restaurantData?.data?.cards[2]?.card?.card?.info;


    return (
        <div className="w-2/5 mx-auto my-10">
            <div className="restaurant-name text-4xl font-bold p-6">
                {restaurantData?.data?.cards[0]?.card?.card?.text}
            </div>
            <div className="w-full bg-linear-to-t from-gray-300 via-gray-200 to-white pb-4 pt-1 rounded-3xl">
                <div className="w-[96%] mx-auto bg-white rounded-2xl p-6 border-1 border-gray-300 shadow-md">
                    <div className="flex gap-2 items-center mb-2">
                        <FaStar className="bg-green-600 text-white text-xl rounded-full p-1" />
                        <span className="font-semibold">{avgRating}</span>
                        <span className="font-semibold">({totalRatingsString})</span>
                        <span className="list-inside list-disc">
                            <li className="font-semibold ml-2">{ costForTwoMessage }</li>
                        </span>
                    </div>
                    <div className="cousins text-sm font-semibold text-orange-600 cursor-pointer underline">
                        {cuisines.join(", ")}
                    </div>

                    <ol className="relative border-s border-gray-400 my-2">                 
                        <li class="mb-4 ms-4">
                            <div class="absolute w-2 h-2 bg-gray-300 rounded-full -left-1 border border-gray-300"></div>
                            <div class="mb-1 leading-none text-sm font-semibold">Outlet
                               <span className="ms-2 text-sm font-normal text-gray-600">{areaName}</span>
                            </div>
                        </li>
                        <li class=" ms-4">
                            <div class="absolute w-2 h-2 bottom-0 bg-gray-300 rounded-full mt-1.5 -start-1 border border-gray-300"></div>
                            <div class="text-sm font-semibold">{sla.slaString }</div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default RestaurantDetail;