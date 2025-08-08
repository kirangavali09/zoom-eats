import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from 'react'
import { RESTAURANT_API_URL } from './../utils/constants'
import Shimmer from './Shimmer'
import Search from './Search'
import { Link } from "react-router-dom";


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

        let restaurantsData = restaurantJson?.data?.cards.filter((res) => res?.card?.card?.id == "restaurant_grid_listing_v2" )

        setRestaurantData(restaurantsData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(restaurantsData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const handleFilter = (filteredData, searchQuery) => {
        setFilteredRestaurants(filteredData);
        setSearchQuery(searchQuery)
    }  

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
                <div className="w-full px-4 sm:px-12 lg:px-32 flex flex-wrap justify-start gap-10 mt-4">
                {filteredRestaurants.map((restaurant) => (
                    <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
                        <RestaurantCard
                        key={restaurant.info.id}
                        restaurantData={restaurant.info}
                        />
                    </Link>
                ))}
                </div>
            )};

        </>
    )
};

export default RestaurantContainer;
