

const SearchBar = ({ query, setQuery }) => {

  return (
    <div className="relative w-1/2">
    <input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
      🔍
    </span>
  </div>
  );
};

export default SearchBar;