import React from "react";
import Button from "../../../components/common/button";

const MovieCard = ({movie}) => {

    const baseImgUrl = "https://image.tmdb.org/t/p/w500/";
    const defaultImgUrl = "https://images.unsplash.com/photo-1726065235309-749733029822?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <img
            className="w-full h-60 object-cover"
            src={movie?.poster_path ? `${baseImgUrl}${movie.poster_path}` : defaultImgUrl}
            alt={movie?.title || "Movie Poster"}
        />
        <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">{movie.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{movie.release_date}</p>
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {movie.overview}
            </p>
            <div className="mt-4 flex justify-between items-center">
                <span className="text-sm font-semibold text-yellow-500">
                    ⭐ {movie.vote_average}
                </span>
              <Button label="View More"/>
            </div>
        </div>
    </div>
);
};

export default MovieCard;