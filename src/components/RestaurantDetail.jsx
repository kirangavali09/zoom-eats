import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_DETAIL_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import RestaurantDetailHero from "./RestaurantDetailHero";
import RestaurantDetailOffers from "./RestaurantDetailOffers";
import RestaurantDetailMenuItems from "./RestaurantDetailMenuItems";
import RestaurantDetailMenuItemsDivider from "./RestaurantDetailMenuItemsDivider";

const RestaurantDetail = () => {
  const { restaurantId } = useParams();
  const [restaurantData, setRestaurantData] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [vegOnly, setVegOnly] = useState(false);

  const fetchRestaurantData = async () => {
    let restaurantData = await fetch(RESTAURANT_DETAIL_API_URL + restaurantId);
    let restaurantJson = await restaurantData.json();

    setRestaurantData(restaurantJson);
    setMenuItems(
      restaurantJson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
        (card) => ({ ...card, active: false })
      )
    );
  };

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  if (restaurantData.length == 0) return <Shimmer />;

  const handleAccordion = (categoryId) => {
    setMenuItems((prev) => {
      return prev.map((item) => ({
        ...item,
        active: item.card.card.categoryId == categoryId ? !item.active : false,
      }));
    });
  };

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
        <div className="w-22 h-10 rounded-3xl border-1 flex items-center justify-center ">
          <div
            className={`transition-all duration-200 ease-in-out ${
              vegOnly ? "bg-green-400" : "bg-gray-300"
            } p-2 w-14 h-4 rounded-3xl relative`}
          >
            <div
              className={`transition-all duration-200 ease-in-out cursor-pointer absolute w-6 h-6 border-2 border-green-600 bg-white rounded-md bottom-[-4px] ${
                vegOnly ? "right-0" : "right-10"
              }  flex items-center justify-center`}
              onClick={() => setVegOnly(!vegOnly)}
            >
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      {menuItems
        .filter((item) => item?.card?.card?.itemCards?.length > 0)
        .map((item) => (
          <>
            <RestaurantDetailMenuItems
              items={item}
              handleAccordion={handleAccordion}
            />
            <RestaurantDetailMenuItemsDivider />
          </>
        ))}
    </div>
  );
};

export default RestaurantDetail;
