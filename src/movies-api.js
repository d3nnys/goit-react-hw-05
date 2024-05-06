import axios from 'axios';

const url = 'https://api.themoviedb.org/3';

const options = {
  params: {
    include_adult: false,
    language: 'en-US',
    page: 1,
  },

  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzFhOTRhOGQzNzg4ODJjNDRiNDZjZjRkODY1N2EwZiIsInN1YiI6IjY2MmQzMzk1NWE3ODg0MDEyN2MxNjNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yc0zv0l6Gz1Ru0UFSu4rjwylgkfLlA_tlvnXjTx5CUg',
  },
};

export const getTrendingMovies = async function () {
  const response = await axios.get(`${url}/trending/movie/week`, options);

  return response.data.results;
};

export const getSearchMovies = async function () {
  const response = await axios.get(`${url}/search/movie`, options);

  return response.data.results;
};

export const getDetailsMovies = async function ({ id }) {
  const response = await axios.get(`${url}/movie/${id}`, options);

  return response.data.results;
};

export const getCreditsMovies = async function ({ id }) {
  const response = await axios.get(`${url}/movie/${id}/credits`, options);

  return response.data.results;
};

export const getReviewsMovies = async function ({ id }) {
  const response = await axios.get(`${url}/movie/${id}/reviews`, options);

  return response.data.results;
};

/* {
  "page": 1,
  "results": [
    {
      "backdrop_path": "/bWIIWhnaoWx3FTVXv6GkYDv3djL.jpg",
      "id": 940721,
      "original_title": "ゴジラ-1.0",
      "overview": "Postwar Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.",
      "poster_path": "/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Godzilla Minus One",
      "original_language": "ja",
      "genre_ids": [
        878,
        27,
        28
      ],
      "popularity": 1017.628,
      "release_date": "2023-11-03",
      "video": false,
      "vote_average": 7.877,
      "vote_count": 681
    },
*/
