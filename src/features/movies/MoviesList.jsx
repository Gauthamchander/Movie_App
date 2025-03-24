import { useRef } from "react";
import MovieCard from "./components/movieCard";
import useFetchMovies from "./hooks/useFetchMovies";
import Button from "../../components/common/button";
import { useNavigate } from "react-router-dom";


const MoviesList = ({title, endpoint}) => {
  const { data: movies, loading, error } = useFetchMovies(endpoint);

  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const category = endpoint.split("/")[2];


  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.7;

      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error}</p>;

  return (
    <>
      <div className="flex items-center justify-between mt-16 w-full">
        <h4 className="text-3xl font-bold text-gray-900 inline-block">
          {title}
        </h4>
        <div className="flex gap-2">
        <Button onClick={() => navigate(`/movies/${category}`)} label="View all"/>
          <button
            className="p-2 bg-black rounded bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            onClick={() => scroll("left")}
          >
            ◀
          </button>
          <button
            className="p-2 bg-black rounded bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            onClick={() => scroll("right")}
          >
            ▶
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden px-4 mt-8 w-full">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
        >
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div
                key={movie.id}
                className="min-w-[200px] md:min-w-[250px] lg:min-w-[300px]"
              >
                <MovieCard movie={movie} />
              </div>
            ))
          ) : (
            <p>No movies found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MoviesList;
