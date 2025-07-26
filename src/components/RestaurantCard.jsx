
import { FaStar } from "react-icons/fa";

const RestaurantCard = () => {

    return (
        <div className="w-72 p-4  rounded-lg shadow-xl max-w-sm max-lg:mx-auto">
            <div className="w-64 h-44">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/8247bd8f-c26a-4e9f-b8b0-fe0a25490f56_243517.JPG" className="w-full h-full object-cover rounded-md"/>
            </div>
            <div className="content mt-4">
                <h2 className="text-lg font-semibold">KFC</h2>
                <div className="flex gap-2">
                    <span className="flex items-center gap-2 font-semibold">
                        <FaStar className="bg-green-600 text-white text-xl rounded-full p-1" /> <span>4.5</span>
                    </span>
                    <span className="font-semibold"> &#x2022; 40-45 mins</span>
                </div>
                <div className="text-zinc-500">
                    Bakery, Desserts
                </div>
                <div className="text-zinc-500">
                    Kurla
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard;