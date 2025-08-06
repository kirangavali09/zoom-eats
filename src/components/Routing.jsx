import { Route, Routes } from "react-router-dom"
import RestaurantContainer from "./RestaurantContainer";
import RestaurantDetail from "./RestaurantDetail";

const Routing = () => {

    return (
        <Routes>
            <Route path="/" element={<RestaurantContainer />} />
            <Route path="restaurant/:restaurantId" element={<RestaurantDetail />} />
        </Routes>
    )
}

export default Routing;