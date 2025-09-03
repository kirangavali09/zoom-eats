import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_DETAIL_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import RestaurantDetailHero from "./RestaurantDetailHero";
import RestaurantDetailOffers from "./RestaurantDetailOffers";
import RestaurantDetailMenuItems from "./RestaurantDetailMenuItems";
import RestaurantDetailMenuItemsDivider from "./RestaurantDetailMenuItemsDivider";
import ToggleMenu from "./ToggleMenu";

const RestaurantDetail = () => {
  const { restaurantId } = useParams();
  const [restaurantData, setRestaurantData] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [allMenuItems, setAllMenuItems] = useState([]);
  const [vegFilter, setVegFilter] = useState(false);
  const [nonVegFilter, setNonVegFilter] = useState(false);
  

  const fetchRestaurantData = async () => {
    let restaurantData = await fetch(RESTAURANT_DETAIL_API_URL + restaurantId);
    let restaurantJson = await restaurantData.json();

    setRestaurantData(restaurantJson);
	let menuItems = restaurantJson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((item) => item?.card?.card?.itemCards?.length > 0);
    const menuItemsWithActive = menuItems.map(
      (card) => ({ ...card, active: false })
    );
    setMenuItems(menuItemsWithActive);
    setAllMenuItems(menuItemsWithActive);
  };

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  useEffect(() => {
    if (!vegFilter && !nonVegFilter) {
      setMenuItems(allMenuItems);
    } else {
      const filteredItems = allMenuItems.map((item) => {
        const filteredItemCards = item?.card?.card?.itemCards?.filter(
          (cardItem) => {
            const isVegItem = cardItem?.card?.info?.isVeg === 1;
            if (vegFilter && !nonVegFilter) {
              return isVegItem;
            } else if (!vegFilter && nonVegFilter) {
              return !isVegItem;
            } else {
              return true;
            }
          }
        );
        return {
          ...item,
          card: {
            ...item.card,
            card: {
              ...item.card.card,
              itemCards: filteredItemCards
            }
          }
        };
      }).filter(item => item?.card?.card?.itemCards?.length > 0);
      
      setMenuItems(filteredItems);
    }
  }, [vegFilter, nonVegFilter, allMenuItems]);

  if (restaurantData.length == 0) return <Shimmer />;

  const handleAccordion = (categoryId) => {
    setMenuItems((prev) => {
      return prev.map((item) => ({
        ...item,
        active: item.card.card.categoryId == categoryId ? !item.active : false,
      }));
    });
  };

  const handleFilter = (isVeg) => {
    if (isVeg) {
      setVegFilter(!vegFilter);
    } else {
      setNonVegFilter(!nonVegFilter);
    }
  }

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
