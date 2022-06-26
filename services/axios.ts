import axios from 'axios';

const portfolioApi = axios.create({
  baseURL: 'https://cryptic-mesa-73224.herokuapp.com/api',
});

export default portfolioApi;
