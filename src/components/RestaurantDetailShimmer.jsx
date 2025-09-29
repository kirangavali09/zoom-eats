import RestaurantDetailMenuItemsDivider from "./RestaurantDetailMenuItemsDivider";

const RestaurantDetailShimmer = () => {

    return (
        <div className="w-full lg:w-5/12 mx-auto h-screen">
            <div className="mt-12 py-2 px-4">
                <h2 className="bg-gray-300 w-60 h-12 rounded-md shimmer"></h2>
                <div className="w-full bg-linear-to-t from-gray-300 via-gray-200 to-white pb-4 pt-1 rounded-3xl my-8 shimmer">
                    <div className="w-[96%] mx-auto bg-white rounded-2xl p-6 border-1 border-gray-300 shadow-md">
                    <div className="flex gap-2 items-center mb-2 flex-wrap">
                        <span className="bg-gray-300 w-16 h-4 rounded-md p-1 shimmer"></span>
                        <span className="bg-gray-300 w-16 h-4 rounded-md p-1 shimmer"></span>
                    </div>
                    <div className="cousins text-sm font-semibold text-orange-600 cursor-pointer underline">
                    </div>
        
                    <div className="relative my-6">
                        <div className="bg-gray-300 w-52 h-8 rounded-md shimmer"></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="py-2 px-4">
                <div className="w-60 h-8 bg-gray-300 rounded-md mb-4 shimmer"></div>
                <div className="w-full h-18 overflow-hidden gap-4 ">
                    {Array.from({length:6}).map((val,index) => (
                    <div key={index} className="p-3 border-1 border-gray-400 bg-gray-50 rounded-3xl inline-block w-60 mx-1 shimmer">
                        <div className="w-10 h-10"></div>
                        <div>
                            <div className="font-semibold text-md "></div>
                            <div className="text-sm text-gray-400 font-semibold"></div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="py-2 px-4">
                {Array.from({length:4}).map((_,index)=> (
                    <div key={index}>
                        <div className="w-full h-12 px-4 bg-gray-300 shimmer rounded-md"></div>
                        <RestaurantDetailMenuItemsDivider />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RestaurantDetailShimmer;