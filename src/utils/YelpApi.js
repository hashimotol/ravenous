import React from "react";

const apiKey = process.env.REACT_APP_YELP_API_KEY;
const baseUrl = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3`;

if (!apiKey) {
    console.error('Yelp API key is not defined');
}

const getBusinesses = async (term, location, sortBy) => {
    const searchEndpoint = `/businesses/search`;
    const requestParams = `?term=${term}&location=${location}&sort_by=${sortBy}`;
    const urlToFetch = `${baseUrl}${searchEndpoint}${requestParams}`;

    console.log(urlToFetch)

    try {
        const response = await fetch(urlToFetch, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        });

        if (response.ok) {
            const jsonResponse = await response.json();
            const businesses = await jsonResponse.businesses;

            return businesses;
        }
        else {
            console.error('Failed to fetch businesses:', response.statusText);
        }
    }
    catch(error) {
        console.log("Error fetching businesses", error);
    }

    return [];

}

export { getBusinesses };