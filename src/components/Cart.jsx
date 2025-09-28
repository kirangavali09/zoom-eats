import { useDispatch, useSelector } from "react-redux";
import { MENU_ITEM_MEDIA_URL } from "../utils/constants";
import { removeItem } from "../reducers/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) =>store.cart.items);
    const subTotal = cartItems.reduce((total, item) => {
                           return item.card.info.defaultPrice ? (item.card.info.defaultPrice/100 + total) : (item.card.info.price ? 
                                (item.card.info.price/100 + total) : (item.card.info.finalPrice ? item.card.info.finalPrice/100 + total : total)
                            )
                        }, 0)

    const dispatch = useDispatch();
    const removeCartItem = (itemId) => {
        dispatch(removeItem(itemId))
    }
    return (
        <div className="w-full  h-[calc(100vh_-_37vh)]">
            <div className="font-bold text-2xl text-center pt-12">Cart</div>
            {
                cartItems.length == 0 ? <div className="my-10 text-xl text-center">😔 Oops... nothing here yet! Add items to your cart 🛍️</div> :
                <div className="w-full lg:w-8/12 mx-auto p-4 flex flex-wrap">
                    <div className={`px-2 lg:px-10 lg:w-8/12 lg:border-r-1 border-gray-300`}> {
                        cartItems?.map((item, index) => (
                            <div key={index} className={`flex justify-between mb-4 border-b-1 border-gray-400 py-4 relative`}>
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
                                    <button className="absolute px-2 rounded-lg border-1 border-zinc-900 bg-white shadow-2xl text-zinc-900 top-4 right-0 font-bold cursor-pointer z-30"
                                    onClick={() => removeCartItem(item.card.info.id)}>X</button>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:px-10">
                        <h1 className="text-lg uppercase font-semibold pb-2 border-b-3 border-gray-300">Cart Total</h1>
                        <div className="pb-2 pt-3 flex justify-between border-b-1 border-gray-300">
                            <span className="text-gray-700">Subtotal</span>
                            <span>₹ { subTotal.toFixed(2) }</span>
                        </div>
                        <div className="py-2 flex justify-between border-b-1 border-gray-300">
                            <span className="text-gray-700">Shipping</span>
                            <span className="text-right"> ₹60.00</span>
                        </div>
                        <div className="py-2 flex justify-between">
                            <span className="text-gray-700">Total</span>
                            <span>₹ { (subTotal + 60).toFixed(2) }</span>
                        </div>
                        <button className="w-full py-1 my-4 rounded-md bg-yellow-500 text-white font-semibold uppercase text-md cursor-pointer">Proceed to Checkout</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart;