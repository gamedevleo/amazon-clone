import axios from 'axios';

const instance = axios.create({
  baseURL:'https://us-central1-clone-8a3b6.cloudfunctions.net/api'
});

export default instance;
