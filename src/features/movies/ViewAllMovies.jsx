import React from "react";
import MovieCard from "./components/movieCard";
import useFetchMovies from "./hooks/useFetchMovies";
import { useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Pagination from "../../components/common/pagination";


const ViewAllMovies = () => {

  const { category } = useParams(); 
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const [page, setPage] = useState(currentPage);


   useEffect(() => {
    setSearchParams({ page });
  }, [page, setSearchParams]);



  const { data: movies, loading, error, totalPages } = useFetchMovies(`/movie/${category}`, { page }); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error}</p>;

  return (
    <>
       <div className="flex justify-between items-center mt-20">
        <h1 className="text-3xl font-bold text-gray-900">
          {category.replace("_", " ").toUpperCase()} Movies
        </h1>
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>

      <div className="flex items-center justify-center space-x-2 mt-4"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {movies?.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <p className="text-center col-span-full text-gray-500">No movies available</p>
      )}
    </div>
    </>
  );
};

export default ViewAllMovies;