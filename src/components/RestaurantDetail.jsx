import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_DETAIL_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import RestaurantDetailHero from "./RestaurantDetailHero";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { OFFERS_MEDIA_URL } from "../utils/constants"

const RestaurantDetail = () => {
    const { restaurantId } = useParams();
    const [ restaurantData, setRestaurantData] = useState([]);

    const fetchRestaurantData = async () => {
        let restaurantData = await fetch(RESTAURANT_DETAIL_API_URL + restaurantId)
        let restaurantJson = await restaurantData.json();

        setRestaurantData(restaurantJson); 
    }

    useEffect(() => {
        fetchRestaurantData();
    }, [])

    if (restaurantData.length == 0) return  <Shimmer />;

    const offers = restaurantData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
    return (
        <div className="w-2/5 mx-auto my-10">
            <RestaurantDetailHero name={restaurantData?.data?.cards[0]?.card?.card?.text} restaurantData={restaurantData?.data?.cards[2]?.card?.card?.info} />

            <div className="mt-10">
                <div className="">
                    Deals for you
                </div>
                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={20}
                    freeMode={true}
                    modules={[FreeMode,]}
                >
                    {
                        offers.map((offer) => (
                            <SwiperSlide >
                                <div className="p-4 border-1 border-gray-400 rounded-xl flex gap-3">
                                    <div className="w-10 h-10">
                                        <img src={OFFERS_MEDIA_URL+ offer?.info?.offerLogo} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-md ">{offer?.info?.header}</div>
                                        <div className="text-sm text-gray-400 font-semibold">{offer?.info?.primaryDescription || offer?.info?.description}</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    
                </Swiper>
            </div>
        </div>
    )
}

export default RestaurantDetail;