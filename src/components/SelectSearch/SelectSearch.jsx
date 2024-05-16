import { useState } from 'react';
import './SelectSearch.scss';
import { SearchBar } from './SearchBar';
import { SearchResultsList } from './SearchResultsList';
export const SelectSearch = () => {
    const [results, setResults] = useState([]);
    const [selectedGames, setSelectedGames] = useState([]);

    const getReccomendation = async (event) => {
        console.log('hehe');
    };
    return (
        <div className="select-search-wraper">
            <h1>Search and pick up games</h1>
            <div className="select-search">
                <SearchBar setResults={setResults} />
                {results && results.length > 0 && (
                    <SearchResultsList
                        results={results}
                        setSelectedGames={setSelectedGames}
                    />
                )}

                <button onClick={getReccomendation}>
                    {'GET RECCOMENDATION'}
                </button>
            </div>
            <div className="selected-games__list">
                {selectedGames.map((element) => (
                    <div
                        className="selected-games__list--item"
                        key={element}
                    >
                        {element}
                    </div>
                ))}
            </div>
        </div>
    );
};
