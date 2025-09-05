import { useParams } from "react-router-dom";
import { RESTAURANT_DETAIL_API_URL } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantDetailData = () => {
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

    return [restaurantData, menuItems, handleFilter, handleAccordion, vegFilter, nonVegFilter]
}

export default useRestaurantDetailData;