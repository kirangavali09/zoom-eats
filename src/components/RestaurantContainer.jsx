import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const RestaurantContainer = ({ RestaurantData }) => {

    return RestaurantData == undefined || RestaurantData?.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="w-full px-4 sm:px-12 lg:px-32 flex flex-wrap justify-start gap-10 lg:gap-13 mt-4">
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
