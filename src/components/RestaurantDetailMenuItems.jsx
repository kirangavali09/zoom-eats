import { IoIosArrowDown } from "react-icons/io";
import { MENU_ITEM_MEDIA_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
 
const RestaurantDetailMenuItems = ({items, handleAccordion}) => {
    const active = items?.active;
    const menuItems = items?.card?.card;

    const dispatch = useDispatch();

    const handleCartClick = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div className="my-6">
            <div className="cursor-pointer" onClick={() => handleAccordion(menuItems.categoryId)}>
                <div className="font-semibold text-lg flex items-center justify-between px-2">
                    <span>
                        { menuItems?.title } ({ menuItems?.itemCards?.length})
                    </span>
                    <IoIosArrowDown className="text-2xl cursor-pointer"/>
                </div>
            </div>
            <div className={`px-2 ${active ? 'block' : 'hidden'}`}> {
                menuItems?.itemCards?.map((item) => (
                    <div key={item.card.info.id} className={`flex justify-between my-4 border-b-1 border-gray-400 pt-4 pb-10`}>
                        <div className="w-3/4">
                            <div className="font-semibold">
                                {item.card.info.name}
                            </div>
                            <div>
                                <span className={`${item.card.info.finalPrice ? "text-gray-400 line-through" : "font-semibold"}`}>₹{item.card.info.defaultPrice/100 || item.card.info.price / 100}</span>
                                <span className={`${item.card.info.finalPrice ? "font-semibold" : "hidden"}`}>  ₹{item.card.info.finalPrice / 100}</span>
                            </div>
                            <div className="line-clamp-3 text-gray-500 text-sm py-2">
                                {item.card.info.description}
                            </div>
                        </div>
                        <div className="w-32 h-32 relative">
                            <img src={MENU_ITEM_MEDIA_URL+item.card.info.imageId} className="w-full h-full object-cover rounded-lg"/>
                            <button className="absolute bg-white border-1 border-gray-200 px-5 py-1 shadow-2xl text-green-600 rounded-lg -bottom-5 left-5 font-semibold cursor-pointer"
                            onClick={() => handleCartClick(item) }>ADD</button>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default RestaurantDetailMenuItems;