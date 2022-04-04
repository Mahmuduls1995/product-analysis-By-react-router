import React from 'react';
import { Row } from 'react-bootstrap';
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const CustomerReview = () => {
    const [reviews, setReviews]= useReviews()
    return (
        <div>
            <h1 className="m-5 text-3xl ">Customer All Reviews</h1>
            <div className="container">

                <Row xs={1} md={3} className="g-3">

                    {
                        reviews.map((review) => <ReviewCard
                            key={review.id}
                            reviews={review}
                        ></ReviewCard>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default CustomerReview;