export const NETFLIX_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";
// export const BANER_IMAGE="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg";
export const BANER_IMAGE =
  "https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg";

export const USER_AVTAR =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const API_URL = "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const GET_POPULAR_MOVIE_API =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const GET_UPCOMMING_MOVIE =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const GET_TOP_RATED_MOVIE =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const SUPPORT_LANGUAGE = [
  { identifire: "en", name: "English" },
  { identifire: "hindi", name: "Hindi" },
];

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;
