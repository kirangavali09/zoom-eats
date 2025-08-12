import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_DETAIL_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import RestaurantDetailHero from "./RestaurantDetailHero";
import RestaurantDetailOffers from "./RestaurantDetailOffers";
import RestaurantDetailMenuItems from "./RestaurantDetailMenuItems";
import RestaurantDetailMenuItemsDivider from "./RestaurantDetailMenuItemsDivider";

const RestaurantDetail = () => {
    const { restaurantId } = useParams();
    const [ restaurantData, setRestaurantData] = useState([]);
    const [ menuItems, setMenuItems] = useState([]);

    const fetchRestaurantData = async () => {
        let restaurantData = await fetch(RESTAURANT_DETAIL_API_URL + restaurantId)
        let restaurantJson = await restaurantData.json();

        setRestaurantData(restaurantJson);
        setMenuItems(restaurantJson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((card) => ({ ...card, active: false }))); 
    }

    useEffect(() => {
        fetchRestaurantData();
    }, [])

    if (restaurantData.length == 0) return  <Shimmer />;

    const handleAccordion = (categoryId) => {
        setMenuItems((prev)=> {
        return prev.map((item) => ({ ...item, active: (item.card.card.categoryId == categoryId ? !item.active : false)})) 
        });
    }

    return (
        <div className="w-[95%] sm:w-2/5 mx-auto my-10">
            <RestaurantDetailHero name={restaurantData?.data?.cards[0]?.card?.card?.text} restaurantData={restaurantData?.data?.cards[2]?.card?.card?.info} />

            <RestaurantDetailOffers offers={restaurantData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers}/>
            
            {
                menuItems.map((item) => (
                    <>
                        <RestaurantDetailMenuItemsDivider />
                        <RestaurantDetailMenuItems items={item} handleAccordion={handleAccordion} />
                    </>
                ) )
            }
        </div>
    )
}

export default RestaurantDetail;