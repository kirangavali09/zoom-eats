import { FaStar } from "react-icons/fa";

const RestaurantDetailHero = (props) => {
    let {avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName, sla} = props.restaurantData;

    return (
        <>
        <div className="restaurant-name text-4xl font-bold p-6">
            {props.name}
        </div>
        <div className="w-full bg-linear-to-t from-gray-300 via-gray-200 to-white pb-4 pt-1 rounded-3xl">
            <div className="w-[96%] mx-auto bg-white rounded-2xl p-6 border-1 border-gray-300 shadow-md">
            <div className="flex gap-2 items-center mb-2">
                <FaStar className="bg-green-600 text-white text-xl rounded-full p-1" />
                <span className="font-semibold">{avgRating}</span>
                <span className="font-semibold">({totalRatingsString})</span>
                <span className="list-inside list-disc">
                <li className="font-semibold ml-2">{costForTwoMessage}</li>
                </span>
            </div>
            <div className="cousins text-sm font-semibold text-orange-600 cursor-pointer underline">
                {cuisines.join(", ")}
            </div>

            <ol className="relative border-s border-gray-400 my-2">
                <li className="mb-4 ms-4">
                <div className="absolute w-2 h-2 bg-gray-300 rounded-full -left-1 border border-gray-300"></div>
                <div className="mb-1 leading-none text-sm font-semibold">
                    Outlet
                    <span className="ms-2 text-sm font-normal text-gray-600">
                    {areaName}
                    </span>
                </div>
                </li>
                <li className=" ms-4">
                <div className="absolute w-2 h-2 bottom-0 bg-gray-300 rounded-full mt-1.5 -start-1 border border-gray-300"></div>
                <div className="text-sm font-semibold">{sla.slaString}</div>
                </li>
            </ol>
            </div>
        </div>
        </>
    );
};

export default RestaurantDetailHero;
