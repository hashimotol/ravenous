import React from "react";
import Business from "../Business/Business";
import './BusinessList.css'
const businesses = [
    {imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
    },
    {
        imageSrc: 'https://via.placeholder.com/150',
        name: 'The Great Steak',
        address: '1234 Elm Street',
        city: 'Metropolis',
        state: 'CA',
        zipCode: '90210',
        category: 'Steakhouse',
        rating: 4.0,
        reviewCount: 85
      },
      {
        imageSrc: 'https://via.placeholder.com/150',
        name: 'Sushi Place',
        address: '5678 Maple Avenue',
        city: 'Gotham',
        state: 'NJ',
        zipCode: '07001',
        category: 'Sushi',
        rating: 4.8,
        reviewCount: 120
      }
    ];

function BusinessList() {
    return (
        <div className="BusinessList">
            {businesses.map((business, index) => (
                <Business key={index} business={business} />
            ))}
        </div>
    )
}

export default BusinessList;