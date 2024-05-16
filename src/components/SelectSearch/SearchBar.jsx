import { useState, useEffect, useRef } from 'react';
import FaSearch from '@mui/icons-material/Search';

import './SearchBar.css';

export const SearchBar = ({ setResults }) => {
    const fetchData = (value) => {
        fetch(`https://witty-nightgown-tuna.cyclic.app/search?name=${value}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setResults(json);
            });
    };
    const [searchTerm, setSearchTerm] = useState('');
    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        const delayDebounceFn = setTimeout(() => {
            if (searchTerm) {
                console.log(searchTerm);
                fetchData(searchTerm);
            } else {
                setResults([]);
            }
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            {/* <input
                placeholder="Type to search..."
                value={input}
                onChange={handleChange}
            /> */}
            <input
                autoFocus
                type="text"
                autoComplete="off"
                className="live-search-field"
                placeholder="Search here..."
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

