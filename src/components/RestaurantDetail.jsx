import RestaurantDetailHero from "./RestaurantDetailHero";
import RestaurantDetailOffers from "./RestaurantDetailOffers";
import RestaurantDetailMenuItems from "./RestaurantDetailMenuItems";
import RestaurantDetailMenuItemsDivider from "./RestaurantDetailMenuItemsDivider";
import ToggleMenu from "./ToggleMenu";
import useRestaurantDetailData from "../utils/useRestaurantDetailData";
import RestaurantDetailShimmer from "./RestaurantDetailShimmer";

const RestaurantDetail = () => {
    const [restaurantData, menuItems, handleFilter, handleAccordion,vegFilter, nonVegFilter] = useRestaurantDetailData();

    if (restaurantData.length == 0) return <RestaurantDetailShimmer />;

    return (
        <div className="w-[95%] sm:w-2/5 mx-auto my-10">
            <RestaurantDetailHero
            name={restaurantData?.data?.cards[0]?.card?.card?.text}
            restaurantData={restaurantData?.data?.cards[2]?.card?.card?.info}
            />

            <RestaurantDetailOffers
            offers={
                restaurantData?.data?.cards[3]?.card?.card?.gridElements
                ?.infoWithStyle?.offers
            }
            />

            <div className="flex gap-4 my-8">
                <ToggleMenu color="green" handleFilter={handleFilter} isVeg={true} isActive={vegFilter} />
                <ToggleMenu color="red" handleFilter={handleFilter} isVeg={false} isActive={nonVegFilter} />
            </div>
            {menuItems
            .map((item, index) => (
                <div key={index}>
                <RestaurantDetailMenuItems
                    items={item}
                    handleAccordion={handleAccordion}
                />
                <RestaurantDetailMenuItemsDivider />
                </div>
            ))}
        </div>
    );
};

export default RestaurantDetail;
