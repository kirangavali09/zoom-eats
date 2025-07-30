import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";


const Search = ({ RestaurantData, handleFilter }) => {
    const searchInput = useRef(null);
    const [searchIcon, setSearchIcon] = useState(0) 


    const filterTopRatedRestaurants = () => {
        const filteredResults = RestaurantData.filter((res)=> res.info.avgRating > 4.2)
        handleFilter(filteredResults);
    }

    const filterSearch = () => {
        const filteredResults = RestaurantData.filter((res)=> {
            return res.info.name.toLocaleLowerCase().includes(searchInput.current.value.toLocaleLowerCase())
        })
        handleFilter(filteredResults);
    }

    return (
        <div className="w-full px-4 sm:px-12 lg:px-32 py-4 flex justify-between flex-wrap gap-2">
            <div className="relative">
                <input ref={searchInput} type="text" className="px-2 sm:px-6 py-2 max-sm:w-full bg-white border-1 mx-auto rounded-lg" onKeyDown={(e) => e.key === 'Enter' ? filterSearch() : ''} onChange={(e) => searchInput.current.value.length > 0 ? setSearchIcon(1) : setSearchIcon(0) }/>
                <CiSearch onClick={() => filterSearch() }className={`${searchIcon ? "hidden" : "" } text-3xl absolute top-1 right-2 bg-transparent`} />
                <RxCross2 onClick={() => {
                    searchInput.current.value = null;
                    filterSearch();
                    setSearchIcon(0);
                }} className={`${searchIcon ? "" : "hidden" } text-2xl absolute top-2 right-2 bg-transparent`} />
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