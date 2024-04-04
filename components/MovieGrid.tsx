import Container from "./Container";
import MovieCard from "./MovieCard";

type MovieGridProps = {
  movies: {
    poster_path: string;
    id: number;
    title: string;
  }[];
};

const MovieGrid = ({movies}: MovieGridProps) => {
  return (
    <section>
      <Container>
        <h2 className="text-white text-2xl py-8 uppercase">Trending</h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-rows-9 gap-4">
          {movies.map(({ title, poster_path, id }, index) => (
            <MovieCard poster_path={poster_path} id={id} title={title} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MovieGrid;

// https://api.themoviedb.org/3/movie/popular?language=en-US&page=1?api_key=a30061ae8bc92fe288bf2573f507eaad