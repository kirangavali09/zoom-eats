import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from 'react'
import { RESTAURANT_API_URL } from './../utils/constants'
import Shimmer from './Shimmer'
import Search from './Search'


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
        setRestaurantData(restaurantJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(restaurantJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
                    <RestaurantCard
                    key={restaurant.info.id}
                    restaurantData={restaurant.info}
                    />
                ))}
                </div>
            )};

        </>
    )

    return RestaurantData == undefined || RestaurantData?.length === 0 ? (
        <div className="w-full px-4 sm:px-12 lg:px-32 flex flex-wrap justify-start gap-10 mt-4">
            No Restaurants Found
        </div>
    ) : (
        <div className="w-full px-4 sm:px-12 lg:px-32 flex flex-wrap justify-start gap-10 mt-4">
        {RestaurantData.map((restaurant) => (
            <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant.info}
            />
        ))}
        </div>
    );
};

export default RestaurantContainer;
