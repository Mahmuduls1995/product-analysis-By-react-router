import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ReviewCard = ({reviews}) => {

 const {name,review,ratings,img}=reviews;
    return (
        <div>
        <Col>
          <Card className='shadow border-0 p-5'>
            <Card.Body>
             <div className="flex">
              <Card.Title><img className="rounded-full w-20 mr-5 "  src={img} alt="" /></Card.Title>
             <Card.Title className=" mt-4">{name}</Card.Title>
             </div>
              <Card.Text>
                {review}
              </Card.Text>
              <Card.Text>
                Rating : {ratings}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default ReviewCard;