import Navbar from './components/Navbar'
import Search from './components/Search'
import RestaurantContainer from './components/RestaurantContainer'
import { useEffect, useState } from 'react'

function App() {
  const [RestaurantData, setRestaurantData] = useState([]);

  useEffect(()=>{
    fetchRestaurants();
  },[])

  const fetchRestaurants = async () => {
    let restaurants = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);

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
