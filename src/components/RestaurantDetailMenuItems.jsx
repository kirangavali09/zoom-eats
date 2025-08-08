import { IoIosArrowDown } from "react-icons/io";

const RestaurantDetailMenuItems = ({menuItems}) => {
console.log(menuItems)
    return (
        <>
            <div className="cursor-pointer">
                <div className="font-semibold text-lg flex items-center justify-between px-2">
                    <span>
                        { menuItems?.title } ({ menuItems?.itemCards?.length})
                    </span>
                    <IoIosArrowDown className="text-2xl cursor-pointer"/>
                </div>
            </div>
            <div className="px-2">{
                menuItems.itemCards.map((item) => (
                    <div key={item.card.info.id} className="flex justify-between my-4 border-b-1 border-gray-400 py-4">
                        <div className="w-3/4">
                            <div className="font-semibold">
                                {item.card.info.name}
                            </div>
                            <div>
                                <span className={`${item.card.info.finalPrice ? "text-gray-400 line-through" : "font-semibold"}`}>₹{item.card.info.price / 100}</span>
                                <span className={`${item.card.info.finalPrice ? "font-semibold" : "hidden"}`}>  ₹{item.card.info.finalPrice / 100}</span>
                            </div>
                            <div className="line-clamp-3 text-gray-500 text-sm py-2">
                                {item.card.info.description}
                            </div>
                        </div>
                        <div className="w-32 h-32">
                            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+item.card.info.imageId} className="w-full h-full object-cover rounded-lg"/>
                        </div>
                    </div>
                ))
            }
            </div>
        </>
    )
}

export default RestaurantDetailMenuItems;