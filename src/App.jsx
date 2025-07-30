import Navbar from './components/Navbar'
import Search from './components/Search'
import RestaurantContainer from './components/RestaurantContainer'
import { useEffect, useState } from 'react'
import { RESTAURANT_API_URL } from './utils/constants'
import Shimmer from './components/Shimmer'

function App() {
  const [RestaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(()=>{
    fetchRestaurants();
  },[])

  const fetchRestaurants = async () => {
    let restaurants = await fetch(RESTAURANT_API_URL);

    let restaurantJson = await restaurants.json();
    setRestaurantData(restaurantJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(restaurantJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const handleFilter = (filteredData) => {
    setFilteredRestaurants(filteredData);
  }

  return (
    <>
      <Navbar />
      <Search RestaurantData={RestaurantData} handleFilter={handleFilter} />
      { RestaurantData == undefined || RestaurantData?.length === 0 ? 
        <Shimmer /> : 
        <RestaurantContainer RestaurantData={filteredRestaurants} />
      }


      
    </>
  )
}

export default App
