import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { getBusinesses } from '../utils/YelpApi';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';

const transformBusinessData = (apiResponse) => {
    return apiResponse.map(business => ({
        "rating": business.rating,
        "price": business.price,
        "phone": business.phone,
        "id": business.id,
        "categories": business.categories,
        "review_count": business.review_count,
        "name": business.name,
        "url": business.url,
        "coordinates": business.coordinates,
        "image_url": business.image_url,
        "location": business.location
    }))
}

const SearchContainer = () => {
    const [businesses, setBusinesses] = useState([]);

    const handleSearch = async (term, location, sortBy) => {
        const apiResponse = await getBusinesses(term, location, sortBy);
        const businessesTransformed = await transformBusinessData(apiResponse);
        setBusinesses(businessesTransformed);
    }

    return (
        <div>
            <SearchBar onSearch={handleSearch}/>
            <BusinessList businesses={businesses} />
        </div>
    )
}

export default SearchContainer;