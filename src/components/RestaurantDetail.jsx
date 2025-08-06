import { useParams } from "react-router-dom";

const RestaurantDetail = () => {
    let { restaurantId } = useParams();
    console.log(restaurantId);
    return (
        <div>
            Hello , Welcome to restro page.
        </div>
    )
}

export default RestaurantDetail;