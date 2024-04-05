import Hero from "@/components/Hero";
import MovieGrid from "@/components/MovieGrid";
import Trending from "@/components/Trending";

import { getData, getMovies } from "@/lib/fetch";



export default async function Home() {


  const { results: data } = await getData(`trending/movie/day?sort_by=popularity.desc&api_key=${process.env.API_KEY}&page`);

  const {results: movies} = await getMovies("1","movie")
  const {results: tvshows} = await getMovies("1", "tv");
  const { results: comedyShows } = await getMovies(
    "1",
    "tv",
    "with_genres=35"
  );



  const mostVotes = Math.max(
    ...data.map((movie: { vote_count: number }) => movie.vote_count)
  );

  const { id, title, backdrop_path:image, overview:description } = data.filter(
    ({ vote_count }: { vote_count: number }) => vote_count === mostVotes
  )[0];


  return (
    <main>
      <Hero movie={{ id, title, image, description }} />
      <div className="-translate-y-20">
        <Trending movies={data} title="Trending Now" />
        <MovieGrid
          movies={movies?.filter((_: any, index: number) => index < 9)}
          title="Recommended For You"
        />
        <MovieGrid
          movies={tvshows?.filter((_: any, index: number) => index < 9)}
          title="Popular TV shows"
        />

        <Trending movies={comedyShows} title="Comedy TV Shows" />

        <MovieGrid
          movies={movies?.filter(
            (_: any, index: number) => index > 9 && index < 19
          )}
          title="New Releases"
        />
        <MovieGrid
          movies={tvshows?.filter(
            (_: any, index: number) => index > 9 && index < 19
          )}
          title="Must Watch TV Shows"
        />
      </div>
    </main>
  );
}
