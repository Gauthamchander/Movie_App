import React from "react";
import SearchBar from "./common/SearchBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const [ query, setQuery ] = useState("");
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
  };



  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">🎬 MovieApp</div>
        <SearchBar query={query} setQuery={handleSearch} />
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-yellow-400">Movies</a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">Actors</a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">Favorites</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
