import React from 'react';
import { Row } from 'react-bootstrap';
import HorizontalGallery from 'react-dynamic-carousel';
import { useNavigate } from 'react-router-dom';
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';





// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    const navigate = useNavigate();
    // const { name, review, ratings, img } = reviews;
    return (



        <>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <div className="border-2 border-slate-600">
                {
                    reviews?.map(review => <SwiperSlide 
                    
                        key={review.id}>
                        <ReviewCard
                            // key={review.id}
                            reviews={review}

                        ></ReviewCard>

                    </SwiperSlide>)
                }
            </div>

        </Swiper>
    </>


    );
};

export default Reviews;