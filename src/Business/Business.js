import React from 'react';
import './Business.css';

function Business(props) {
    const { business } = props;


    return (
        <div className='Business'>
            <div className='imageContainer'>
                <img src={business.image_url} />
            </div>
            <h3>{business.name}</h3>
            <div className='BusinessInformation'>
                <div className='BusinessAddress'>
                    <p>{business.location.address1}</p>
                    <p>{business.location.city}</p>
                    <p>{`${business.location.state} ${business.location.zip_code}`}</p>
                </div>
                <div className='BusinessReviews'>
                    <h3>
                        {business.categories.map((category, index) => (
                                <span key={index}>{category.title}{index < business.categories.length - 1 ? ', ' : ''}</span>
                            ))}
                    </h3>
                    <h3>{`${business.rating} stars`}</h3>
                    <p>{`${business.review_count} reviews`}</p>
                </div>
            </div>
        </div>
    )
}

export default Business;