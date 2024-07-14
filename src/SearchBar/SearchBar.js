import { render } from '@testing-library/react';
import React, { useState } from 'react';
import './SearchBar.css';


function SearchBar() {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');

    const sortOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    };

    const handleSortByChange = (sortOption) => {
        setSortBy(sortOption);
    };

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSearch = (event) => {
        //onSearch(term, location, sortBy);
        event.preventDefault();
    };

    const renderSortByOptions = () => {
        return Object.keys(sortOptions).map((sortOption) => {
            let sortByOptionValue = sortOptions[sortOption];
            return (
                <li
                    key={sortByOptionValue}
                    className={sortBy === sortByOptionValue ? 'active' : ''}
                    onClick={() => handleSortByChange(sortByOptionValue)}
                >
                    {sortOption}
                </li>
            );
        });
    };


    return (
        <div className='SearchBar'>
            <div className='SearchBar-sort-options'>
                <ul>
                {renderSortByOptions()}
                </ul>
            </div>
            <div className='SearchBar-fields'>
                <input type='search' 
                placeholder="Search Businesses" 
                value={term}
                onChange={handleTermChange}
                />
                <input type='search' 
                placeholder="Where?" 
                value={location}
                onChange={handleLocationChange}
                />
            </div>
            <div className="SearchBar-submit">
                <button onClick={handleSearch}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchBar;