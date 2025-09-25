import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from 'react'
import { RESTAURANT_API_URL } from './../utils/constants'
import Shimmer from './Shimmer'
import Search from './Search'
import { Link } from "react-router-dom";
import OpenedRestaurant from "./OpenedRestaurant";


const RestaurantContainer = () => {  
    const [RestaurantData, setRestaurantData] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchQuery, setSearchQuery] = useState(null)

    useEffect(()=>{
        fetchRestaurants();
    },[])

    const fetchRestaurants = async () => {
        let restaurants = await fetch(RESTAURANT_API_URL);

        let restaurantJson = await restaurants.json();
        let filteredRestaurants = restaurantJson.data.cards.filter((res) => res.card.card.id == "restaurant_grid_listing_v2");
        setRestaurantData(filteredRestaurants[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(filteredRestaurants[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const handleFilter = (filteredData, searchQuery) => {
        setFilteredRestaurants(filteredData);
        setSearchQuery(searchQuery)
    }

    const OpenedRestaurantCard = OpenedRestaurant(RestaurantCard)
    return (
        <>
            <Search RestaurantData={RestaurantData} handleFilter={handleFilter} />
            {filteredRestaurants == undefined || filteredRestaurants?.length === 0 ? 
                    searchQuery == null ? <Shimmer /> : (
                        <div className="w-full px-4 sm:px-12 lg:px-32 flex flex-wrap justify-start gap-10 mt-4">
                            No Restaurants Found
                        </div>
                    )
            : (
                <div className="w-10/12 lg:w-11/12 mx-auto flex flex-wrap gap-4 md:gap-12 lg:gap-6 xl:gap-12 mt-4">
                {filteredRestaurants.map((restaurant) => {
                    return restaurant.info.isOpen ? 
                        <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id} className="max-sm:w-full">
                            <OpenedRestaurantCard restaurantData={restaurant.info} />
                        </Link>

                    : 
                    <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id} className="max-sm:w-full">
                        <RestaurantCard
                        key={restaurant.info.id}
                        restaurantData={restaurant.info}
                        />
                    </Link>
                } )}
                </div>
            )};

        </>
    )
};

export default RestaurantContainer;
