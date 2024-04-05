export const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const baseURL = "https://api.themoviedb.org/3";

export const getData = async (url: string) => {
  const res = await fetch("https://api.themoviedb.org/3/" + url);
  return res.json();
};

export const getMovies = async (page: string, type: "tv" | "movie", genre?: string ) => {
  const res = await fetch(
    `${baseURL}/discover/${type}?include_adult=true&include_video=false&page=${page}&sort_by=popularity.desc&api_key=${process.env.API_KEY}&${genre}`
  );
  return res.json();
};

export const getTopRated = async (
  page: string,
  type: "tv" | "movie",
  genre?: string
) => {
  const res = await fetch(
    `${baseURL}/${type}/top_rated?include_adult=true&include_video=false&page=${page}&sort_by=popularity.desc&api_key=${process.env.API_KEY}&${genre}`
  );
  return res.json();
};

