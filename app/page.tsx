import Hero from "@/components/Hero";
import MovieGrid from "@/components/MovieGrid";
import Trending from "@/components/Trending";

import { getData } from "@/lib/fetch";



export default async function Home() {


  const { results: data } = await getData(`trending/movie/day?sort_by=popularity.desc&api_key=${process.env.API_KEY}&page`);

   const { results: recommended2 } = await getData(`trending/movie/day?sort_by=popularity.desc&api_key=${process.env.API_KEY}&page=2`
   );

   const { results: recommended } = await getData(
     `movie/now_playing?language=en-US&page=1&api_key=${process.env.API_KEY}&page`
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
      <Trending movies={data} />
      <MovieGrid movies = {[...recommended,...recommended2]} />
    </main>
  );
}
