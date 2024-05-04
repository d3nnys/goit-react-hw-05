import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

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
export default async function getTrendingMovies() {
  const response = await axios.get('/trending/movie', options);

  return response.data.results;
}
