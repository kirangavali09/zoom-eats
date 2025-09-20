import { IoIosArrowDown } from "react-icons/io";
import { MENU_ITEM_MEDIA_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../reducers/cartSlice";
 
const RestaurantDetailMenuItems = ({items, handleAccordion}) => {
    const active = items?.active;
    const menuItems = items?.card?.card;

    const dispatch = useDispatch();
    const handleAddTocart = (item) => {
        dispatch(addItem(item));
    }

    const handleRemoveCart = (itemId) => {
        dispatch(removeItem(itemId))
    }

    const cartItems = useSelector((store) => store.cart.items);

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
                    <div key={item.card.info.id} className={`flex justify-between my-4 border-b-1 border-gray-400 py-4`}>
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
                            <button className={`absolute px-5 py-1 rounded-md bg-white shadow-2xl text-green-600 -bottom-5 left-6 font-bold cursor-pointer z-30 ${item.card.info.id} ${
                                cartItems.filter((cartItem) => cartItem.card.info.id == item.card.info.id).length > 0 ? "hidden" : " "
                            }`}
                            onClick={() => handleAddTocart(item)}>ADD</button>
                            <button className={`absolute px-5 py-1 rounded-md bg-white shadow-2xl text-zinc-900 -bottom-5 left-6 font-bold cursor-pointer z-30 ${
                                cartItems.filter((cartItem) => cartItem.card.info.id == item.card.info.id).length > 0 ? " " : "hidden"
                            }`}
                            onClick={() => handleRemoveCart(item.card.info.id)}>ADDED</button>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default RestaurantDetailMenuItems;