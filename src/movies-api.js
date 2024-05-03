import axios from 'axios';

axios.defaults.baseURL =
  'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzFhOTRhOGQzNzg4ODJjNDRiNDZjZjRkODY1N2EwZiIsInN1YiI6IjY2MmQzMzk1NWE3ODg0MDEyN2MxNjNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yc0zv0l6Gz1Ru0UFSu4rjwylgkfLlA_tlvnXjTx5CUg',
  },
};

export default async function getMovies() {
  const response = await axios.get(options);

  return response.data;
}
