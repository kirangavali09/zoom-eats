import RestaurantCard from "./RestaurantCard";

const RestaurantContainer = ({ RestaurantData }) => {    

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
