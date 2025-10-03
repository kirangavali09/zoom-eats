import { Route, Routes } from "react-router-dom"
import RestaurantContainer from "./RestaurantContainer";
import RestaurantDetail from "./RestaurantDetail";
import { lazy, Suspense } from "react";
import Cart from "./Cart";
import SignIn from "./Pages/SignIn";
import AuthMiddleware from "../utils/authMiddleWare";
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
            <Route path="/cart" element={<Cart />} />
            <Route path="/sign-in" element={
                <AuthMiddleware>
                    <SignIn />
                </AuthMiddleware>
            } />
        </Routes>
    )
}

export default Routing;