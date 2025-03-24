import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchDataAPI } from "../../api/apiClient";
import MovieCard from "./components/movieCard";
import { useNavigate } from "react-router-dom";


const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query){
        // navigate("/");
        return;
    } 

    const fetchSearchResults = async () => {
      setLoading(true);
      const response = await fetchDataAPI("/search/movie", null, { query });
      setMovies(response?.results || []);
      setLoading(false);

    //   if (response?.results.length === 0) {
    //     setTimeout(() => navigate("/"), 2000);
    //   }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold">Search Results for "{query}"</h2>
      
      {loading ? <p>Loading...</p> : 
        movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        ) : (
          <p>No movies found.</p>
        )
      }
    </div>
  );
};

export default SearchResults;
