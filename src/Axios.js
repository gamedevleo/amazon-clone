import axios from 'axios';

const instance = axios.create({
  baseURL:'http://localhost:5001/clone-8a3b6/us-central1/api'

});

export default instance;
