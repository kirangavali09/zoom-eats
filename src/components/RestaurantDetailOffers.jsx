import { OFFERS_MEDIA_URL } from "../utils/constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const RestaurantDetailOffers = ({offers}) => {

    return (
        <>
            <div className="text-2xl font-semibold py-4 mt-8">
                Deals for you
            </div>
            <Swiper
                slidesPerView={navigator.userAgentData.mobile ? 1.2 : 2.5}
                spaceBetween={20}
                freeMode={true}
                modules={[FreeMode,]}
            >
                {
                    offers.map((offer) => (
                        <SwiperSlide >
                            <div className="p-4 border-1 border-gray-400 rounded-3xl flex gap-3">
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
        </>
    )
}
export default RestaurantDetailOffers;