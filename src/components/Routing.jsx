import { Route, Routes } from "react-router-dom"
import RestaurantContainer from "./RestaurantContainer";
import RestaurantDetail from "./RestaurantDetail";
import AboutClass from "./AboutClass";
import { lazy, Suspense } from "react";
const Contact = lazy(() => import("./Contact"));

const Routing = () => {

    return (
        <Routes>
            <Route path="/" element={<RestaurantContainer />} />
            <Route path="restaurant/:restaurantId" element={<RestaurantDetail />} />
            <Route
                path="/contact"
                element={
                    <Suspense fallback={<h2>Loading...</h2>}>
                        <Contact />
                    </Suspense>
                }
            />
        </Routes>
    )
}

export default Routing;