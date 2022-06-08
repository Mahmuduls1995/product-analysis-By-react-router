import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const ReviewCard = ({ reviews }) => {

  const { name, review, ratings, img } = reviews;
  return (

    <section class="p-6">
      <div class="container max-w-xl mx-auto">
        <div class="flex flex-col items-center  w-full p-6 space-y-8 rounded-md lg:mx-h-full lg:p-8 dark:bg-gray-900 dark:text-gray-100">
          <img src={img} alt="" class="w-20 h-20 rounded-full dark:bg-gray-500" />
          <blockquote class="max-w-lg text-lg italic font-medium text-center">"{review.length > 150 ? review.slice(0, 90) + '.....' : review}"</blockquote>
          <div class="text-center dark:text-gray-400">
            <p>{name}</p>
            <h4> Rating: {ratings} </h4>
          </div>
          
        </div>

      </div>

      
    </section>










  );
};

export default ReviewCard;










