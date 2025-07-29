import Navbar from './components/Navbar'
import Search from './components/Search'
import RestaurantContainer from './components/RestaurantContainer'
import { useEffect, useState } from 'react'
import { RESTAURANT_API_URL } from './utils/constants'

function App() {
  const [RestaurantData, setRestaurantData] = useState([]);

  useEffect(()=>{
    fetchRestaurants();
  },[])

  const fetchRestaurants = async () => {
    let restaurants = await fetch(RESTAURANT_API_URL);

    let restaurantJson = await restaurants.json();
    setRestaurantData(restaurantJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const handleFilter = (filteredData) => {
    setRestaurantData(filteredData);
  }

  return (
    <>
      <Navbar />
      <Search RestaurantData={RestaurantData} handleFilter={handleFilter} />
      <RestaurantContainer RestaurantData={RestaurantData} />
    </>
  )
}

export default App
