import { useDispatch, useSelector } from "react-redux";
import { MENU_ITEM_MEDIA_URL } from "../utils/constants";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const handleCartClick = (itemId) => {
        dispatch(removeItem(itemId));
    }
    return (
        <div className="w-7/12 px-32 mx-auto my-8">
            <h1 className="text-center font-bold text-4xl">
                Cart
            </h1>
            <button className="px-5 py-2 bg-zinc-700 rounded-lg text-white font-semibold cursor-pointer"
            onClick={handleClearCart}
            >Clear Cart</button>
            <div className={`px-2`}> {
                cartItems?.map((item) => (
                    <div key={item.card.info.id} className={`flex justify-between my-4 border-b-1 border-gray-400 pt-4 pb-10 relative`}>
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
                        <div className="w-32 h-32">
                            <img src={MENU_ITEM_MEDIA_URL+item.card.info.imageId} className="w-full h-full object-cover rounded-lg"/>
                            <button className="absolute bg-gray-200 border-1 border-gray-200 px-2 py-0.5 shadow-2xl text-zinc-800 rounded-lg right-0 -top-0.5 font-semibold cursor-pointer"
                            onClick={() => handleCartClick(item.card.info.id) }>X</button>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Cart;