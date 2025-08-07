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

    console.log(restaurantData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers);
    return (
        <div className="w-2/5 mx-auto my-10">
            <RestaurantDetailHero name={restaurantData?.data?.cards[0]?.card?.card?.text} restaurantData={restaurantData?.data?.cards[2]?.card?.card?.info} />

            <div className="mt-10">
                <div className="">
                    Deals for you
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="p-4 border-2 border-gray-400 rounded-xl">
                            <div>
                                Image
                            </div>
                            <div>
                                content
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-4 border-2 border-gray-400 rounded-xl">
                            <div>
                                Image
                            </div>
                            <div>
                                content
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-4 border-2 border-gray-400 rounded-xl">
                            <div>
                                Image
                            </div>
                            <div>
                                content
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-4 border-2 border-gray-400 rounded-xl">
                            <div>
                                Image
                            </div>
                            <div>
                                content
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-4 border-2 border-gray-400 rounded-xl">
                            <div>
                                Image
                            </div>
                            <div>
                                content
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-4 border-2 border-gray-400 rounded-xl">
                            <div>
                                Image
                            </div>
                            <div>
                                content
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-4 border-2 border-gray-400 rounded-xl">
                            <div>
                                Image
                            </div>
                            <div>
                                content
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-4 border-2 border-gray-400 rounded-xl">
                            <div>
                                Image
                            </div>
                            <div>
                                content
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-4 border-2 border-gray-400 rounded-xl">
                            <div>
                                Image
                            </div>
                            <div>
                                content
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-4 border-2 border-gray-400 rounded-xl">
                            <div>
                                Image
                            </div>
                            <div>
                                content
                            </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    )
}

export default RestaurantDetail;