import React from 'react';
import './Business.css';

function Business() {
    const business = {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    };

    return (
        <div className='Business'>
            <div className='imageContainer'>
                <img src={business.imageSrc} />
            </div>
            <h3>{business.name}</h3>
            <div className='BusinessInformation'>
                <div className='BusinessAddress'>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{`${business.state} ${business.zipCode}`}</p>
                </div>
                <div className='BusinessReviews'>
                    <h3>{business.category}</h3>
                    <h3>{`${business.rating} stars`}</h3>
                    <p>{`${business.reviewCount} reviews`}</p>
                </div>
            </div>
        </div>
    )
}

export default Business;