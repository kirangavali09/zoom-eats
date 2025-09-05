import { Route, Routes } from "react-router-dom"
import RestaurantContainer from "./RestaurantContainer";
import RestaurantDetail from "./RestaurantDetail";
import AboutClass from "./AboutClass";

const Routing = () => {

    return (
        <Routes>
            <Route path="/" element={<RestaurantContainer />} />
            <Route path="restaurant/:restaurantId" element={<RestaurantDetail />} />
            <Route path="/about" element={<AboutClass />} />
        </Routes>
    )
}

export default Routing;