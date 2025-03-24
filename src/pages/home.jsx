import MoviesList from "../features/movies/MoviesList";

const Home = () => {
    return ( 
        <>
            <MoviesList title="Recently Playing" endpoint="/movie/now_playing" />
            <MoviesList title="Top Rated Movies" endpoint="/movie/top_rated" />
            <MoviesList title="Popular Movies" endpoint="/movie/popular" />
            <MoviesList title="Upcoming Movies" endpoint="/movie/upcoming" />
        </>
    );
    
};

export default Home;
