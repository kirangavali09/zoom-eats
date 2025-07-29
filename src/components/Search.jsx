
const Search = ({ RestaurantData, handleFilter }) => {
    const filterTopRatedRestaurants = () => {
        const filteredResults = RestaurantData.filter((res)=> res.info.avgRating > 4.2)
        handleFilter(filteredResults);
    }

    return (
        <div className="w-full px-4 sm:px-12 lg:px-32 py-4 flex justify-between flex-wrap gap-2">
            <div>
                <input type="text" className="px-2 sm:px-6 py-1 sm:py-2 max-sm:w-48 bg-white border-1 mr-6 rounded-lg" />
                <button className="px-2 sm:px-6 py-1 sm:py-2 max-sm:w-18 bg-red-900 rounded-md text-white text-xl cursor-pointer mr-6">Search</button>
            </div>

            <div>
                <button onClick={() => filterTopRatedRestaurants() } className="px-2 sm:px-6 py-1 sm:py-2  bg-red-900 rounded-md text-white text-xl cursor-pointer">
                    Top Rated Restaurant
                </button>
            </div>
        </div>
    )
}

export default Search;