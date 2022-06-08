import React from 'react';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review2 = () => {
    const [reviews, setReviews] = useReviews();
    const navigate = useNavigate();
    return (
        <div>
            <h1 className="m-5 text-3xl ">Customer Reviews(3)</h1>
            <div className="container">

                <Row xs={1} md={3} className="g-3">

                    {
                        reviews.slice(0, 3).map((review) => <ReviewCard
                            key={review.id}
                            reviews={review}

                        ></ReviewCard>)
                    }
                </Row>


                <button className='btn btn-info text-white my-3' onClick={() => navigate('/reviews')}>See All Review</button>


            </div>

        </div >
    );
};

export default Review2;