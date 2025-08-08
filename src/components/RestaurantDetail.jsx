import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_DETAIL_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import RestaurantDetailHero from "./RestaurantDetailHero";
import RestaurantDetailOffers from "./RestaurantDetailOffers";

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

    return (
        <div className="w-2/5 mx-auto my-10">
            <RestaurantDetailHero name={restaurantData?.data?.cards[0]?.card?.card?.text} restaurantData={restaurantData?.data?.cards[2]?.card?.card?.info} />

            <RestaurantDetailOffers offers={restaurantData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers}/>
        </div>
    )
}

export default RestaurantDetail;