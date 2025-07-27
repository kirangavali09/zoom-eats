
const Search = () => {

    return (
        <div className="w-full h-18 px-4 sm:px-12 lg:px-32 py-4">
            <input type="text" className="px-2 sm:px-6 py-1 sm:py-2 max-sm:w-48 bg-white border-1 mr-6 rounded-lg" />
            <button className="px-2 sm:px-6 py-1 sm:py-2 max-sm:w-18 bg-red-900 rounded-md text-white text-xl cursor-pointer">Search</button>
        </div>
    )
}

export default Search;