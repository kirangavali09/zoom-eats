import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantDetail = () => {
    let { restaurantId } = useParams();
    const [restaurantData, setRestaurantData] = useState([])
    // console.log(restaurantId);

    const getRestaurantData = async () => {
        let restaurantData = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1264801&lng=73.0110096&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`)
        let restaurantJson = await restaurantData.json();

        console.log(restaurantJson);
    }

    useEffect(() => {
        getRestaurantData();
    }, [])

    return (
        <div>
            Hello , Welcome to restro page.
        </div>
    )
}

export default RestaurantDetail;