
export const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

export const getData = async (url: string) => {
  const res = await fetch("https://api.themoviedb.org/3/" + url);
  return res.json();
};
