
const OpenedRestaurant = (RestaurantCard) => {

    return (props) => {

        return (
            <div className="relative">
                <div className="px-3 py-0.5 text-xs bg-green-800 absolute text-white rounded-lg z-40 top-2 left-4">Online</div>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default OpenedRestaurant;