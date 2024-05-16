import "./SearchResult.css";

export const SearchResult = ({ result ,setSelectedGames}) => {
  return (
    <div
      className="search-result"
      onClick={(e) => setSelectedGames(oldArray => [...oldArray,result])}
    >
      {result}
    </div>
  );
};
